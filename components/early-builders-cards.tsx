import React, { useEffect, useState } from "react";

type Props = unknown;

const EARLY_BUILDERS_SHEET_CSV_URL =
  process.env.NEXT_PUBLIC_EARLY_BUILDERS_GOOGLE_SHEET_CSV_URL;

type EarlyBuilder = {
  logo: string;
  name: string;
  description: string;
  color: string;
};

// Parse CSV handling quoted fields that may contain commas and newlines
function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const nextChar = csv[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote (double quote)
        currentField += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      // End of field
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      // End of row
      if (char === '\r' && nextChar === '\n') {
        i++; // Skip \n in \r\n
      }
      if (currentField || currentRow.length > 0) {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = '';
      }
    } else {
      // Regular character
      currentField += char;
    }
  }

  // Add last field and row if any
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  return rows;
}

const EarlyBuildersCards = (props: Props) => {
  const [earlyBuilders, setEarlyBuilders] = useState<EarlyBuilder[]>([]);

  useEffect(() => {
    async function fetchEarlyBuilders() {
      try {
        const response = await fetch(EARLY_BUILDERS_SHEET_CSV_URL!);
        const csvData = await response.text();
        console.log("🚀 ~ fetchEarlyBuilders ~ csvData:", csvData);

        // Parse CSV properly handling quoted fields with newlines
        const rows = parseCSV(csvData);
        console.log("🚀 ~ fetchEarlyBuilders ~ rows:", rows);

        // Skip header row and map to EarlyBuilder objects
        const builders: EarlyBuilder[] = rows.slice(1).map((row) => {
          const [logo, name, description, color] = row;
          return {
            logo: logo?.trim() || '',
            name: name?.trim() || '',
            description: description?.trim() || '',
            color: color?.trim() || ''
          };
        });
        console.log("🚀 ~ fetchEarlyBuilders ~ builders:", builders);

        setEarlyBuilders(builders);
      } catch (error) {
        console.error("Error fetching early builders data:", error);
      }
    }

    fetchEarlyBuilders();
  }, []);

  return <div>EarlyBuildersCards</div>;
};

export default EarlyBuildersCards;
