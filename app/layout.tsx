import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Launch Feed",
  description: "Where builders share their journey, not just their launch",
  icons: [
    {
      rel: "icon",
      url: "/loglo.png",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      url: "/loglo.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://launchfeed.vercel.app",
    title: "Launch Feed",
    description: "Where builders share their journey, not just their launch",
    siteName: "Launch Feed",
    images: [
      {
        url: "/app.png",
        width: 1200,
        height: 630,
        alt: "Launch Feed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch Feed",
    description: "Where builders share their journey, not just their launch",
    images: ["/app.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
