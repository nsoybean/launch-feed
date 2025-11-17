import { useEffect, useState } from "react";
import Image from "next/image";

const EARLY_BUILDERS_SHEET_CSV_URL =
  process.env.NEXT_PUBLIC_EARLY_BUILDERS_GOOGLE_SHEET_CSV_URL;
const LOGO_DEV_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_LOGO_DEV_KEY || "pk_BxvWYlR6TVCdbC1fUPxMSw";

type EarlyBuilder = {
  logo: string;
  name: string;
  link: string;
  description: string;
  color: string;
};

// Get logo from logo.dev service based on domain
function getLogoDevUrl(url: string): string {
  if (!url) return "";

  try {
    // Add https:// if protocol is missing
    let fullUrl = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      fullUrl = `https://${url}`;
    }

    const urlObj = new URL(fullUrl);
    return `https://img.logo.dev/${urlObj.hostname}?token=${LOGO_DEV_PUBLIC_KEY}`;
  } catch {
    return "";
  }
}

// Get favicon from Google's service based on domain
function getFaviconUrl(url: string): string {
  if (!url) return "";

  try {
    // Add https:// if protocol is missing
    let fullUrl = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      fullUrl = `https://${url}`;
    }

    const urlObj = new URL(fullUrl);
    return `https://s2.googleusercontent.com/s2/favicons?domain=${urlObj.hostname}&sz=128`;
  } catch {
    return "";
  }
}

// Add UTM tracking parameters to URL
function addUTMParams(url: string): string {
  if (!url) return "";

  // Add https:// if protocol is missing
  let fullUrl = url;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    fullUrl = `https://${url}`;
  }

  try {
    const urlObj = new URL(fullUrl);
    urlObj.searchParams.set("utm_source", "launchfeed");
    urlObj.searchParams.set("utm_medium", "early_builders");
    urlObj.searchParams.set("utm_campaign", "showcase");
    return urlObj.toString();
  } catch {
    // If URL is invalid, return with https prefix
    return fullUrl;
  }
}

// Parse CSV handling quoted fields that may contain commas and newlines
function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
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
    } else if (char === "," && !insideQuotes) {
      // End of field
      currentRow.push(currentField);
      currentField = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      // End of row
      if (char === "\r" && nextChar === "\n") {
        i++; // Skip \n in \r\n
      }
      if (currentField || currentRow.length > 0) {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = "";
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

// Builder card component with image fallback handling
const BuilderCard = ({ builder }: { builder: EarlyBuilder }) => {
  // Fallback priority: custom logo -> logo.dev -> favicon -> placeholder
  const getInitialSrc = () => {
    if (builder.logo) {
      console.log(`[${builder.name}] Using custom logo:`, builder.logo);
      return builder.logo;
    }
    if (builder.link) {
      const logoDevUrl = getLogoDevUrl(builder.link);
      console.log(`[${builder.name}] Using logo.dev:`, logoDevUrl);
      return logoDevUrl;
    }
    console.log(`[${builder.name}] No logo source available`);
    return "";
  };

  const [imgSrc, setImgSrc] = useState<string>(getInitialSrc());
  const [fallbackStep, setFallbackStep] = useState(builder.logo ? 1 : 0);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    // Cascade through fallback options
    if (fallbackStep === 0 && builder.link) {
      // Step 0: logo.dev failed, try custom logo
      console.log(`[${builder.name}] Logo.dev failed, trying custom logo`);
      if (builder.logo) {
        setImgSrc(builder.logo);
        setFallbackStep(1);
      } else {
        // Skip to favicon
        const faviconUrl = getFaviconUrl(builder.link);
        console.log(
          `[${builder.name}] No custom logo, using favicon:`,
          faviconUrl
        );
        setImgSrc(faviconUrl);
        setFallbackStep(2);
      }
    } else if (fallbackStep === 1 && builder.link) {
      // Step 1: custom logo failed, try logo.dev (if we started with custom)
      const logoDevUrl = getLogoDevUrl(builder.link);
      if (logoDevUrl !== imgSrc) {
        console.log(
          `[${builder.name}] Custom logo failed, trying logo.dev:`,
          logoDevUrl
        );
        setImgSrc(logoDevUrl);
        setFallbackStep(2);
      } else {
        // Skip to favicon
        const faviconUrl = getFaviconUrl(builder.link);
        console.log(
          `[${builder.name}] Skipping logo.dev, using favicon:`,
          faviconUrl
        );
        setImgSrc(faviconUrl);
        setFallbackStep(3);
      }
    } else if (fallbackStep === 2 && builder.link) {
      // Step 2: try favicon
      const faviconUrl = getFaviconUrl(builder.link);
      console.log(
        `[${builder.name}] Previous source failed, using favicon:`,
        faviconUrl
      );
      setImgSrc(faviconUrl);
      setFallbackStep(3);
    } else {
      // Final fallback: show placeholder
      console.log(`[${builder.name}] All sources failed, using placeholder`);
      setImgError(true);
    }
  };

  return (
    <div
      className="shrink-0 w-72 px-6 py-2 rounded-xl backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center text-center transition-transform hover:scale-104"
      style={{
        backgroundColor: builder.color
          ? `${builder.color}33`
          : "oklch(0.62 0.19 25 / 0.1)",
      }}
    >
      {imgError || !imgSrc ? (
        <div className="w-8 h-8 mb-4 rounded-lg bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
          <span className="text-sm font-bold text-zinc-600 dark:text-zinc-300">
            {builder.name?.charAt(0)?.toUpperCase() || "?"}
          </span>
        </div>
      ) : (
        <Image
          src={imgSrc}
          alt={`${builder.name} logo`}
          width={64}
          height={64}
          className="w-8 h-8 object-contain mb-1 rounded-lg"
          onError={handleImageError}
          unoptimized
        />
      )}
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
        {builder.name}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {builder.description}
      </p>
    </div>
  );
};

const EarlyBuildersCards = () => {
  const [earlyBuilders, setEarlyBuilders] = useState<EarlyBuilder[]>([]);

  useEffect(() => {
    async function fetchEarlyBuilders() {
      try {
        const response = await fetch(EARLY_BUILDERS_SHEET_CSV_URL!);
        const csvData = await response.text();

        // Parse CSV properly handling quoted fields with newlines
        const rows = parseCSV(csvData);

        // Skip header row and map to EarlyBuilder objects
        const builders: EarlyBuilder[] = rows.slice(1).map((row) => {
          const [logo, name, link, description, color] = row;
          return {
            logo: logo?.trim() || "",
            name: name?.trim() || "",
            description: description?.trim() || "",
            color: color?.trim() || "",
            link: link?.trim() || "",
          };
        });

        setEarlyBuilders(builders);
      } catch (error) {
        console.error("Error fetching early builders data:", error);
      }
    }

    fetchEarlyBuilders();
  }, []);

  // Split builders into two rows (7 each)
  const rows = [
    {
      builders: earlyBuilders.slice(0, 7),
      animationClass: "animate-scroll-right",
      keyPrefix: "first",
    },
    {
      builders: earlyBuilders.slice(7, 14),
      animationClass: "animate-scroll-left",
      keyPrefix: "second",
    },
  ];

  // Render a single builder card
  const renderCard = (
    builder: EarlyBuilder,
    index: number,
    keyPrefix: string
  ) => {
    return builder.link ? (
      <a
        key={`${keyPrefix}-${index}`}
        href={addUTMParams(builder.link)}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 cursor-pointer relative z-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <BuilderCard builder={builder} />
      </a>
    ) : (
      <div key={`${keyPrefix}-${index}`} className="shrink-0">
        <BuilderCard builder={builder} />
      </div>
    );
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Early Builders
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Join these amazing builders who are already on board
        </p>
      </div>

      {/* Render scrolling rows */}
      {rows.map((row, rowIndex) => {
        const duplicatedBuilders = [...row.builders, ...row.builders];
        return (
          <div
            key={rowIndex}
            className={rowIndex === 0 ? "mb-8 relative" : "relative"}
          >
            <div className={`flex gap-6 ${row.animationClass}`}>
              {duplicatedBuilders.map((builder, index) =>
                renderCard(builder, index, row.keyPrefix)
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default EarlyBuildersCards;
