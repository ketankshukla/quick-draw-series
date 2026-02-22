import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import ImageProtection from "@/components/ImageProtection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// TODO: Replace {{SERIES_NAME}} and {{SERIES_DESCRIPTION}} with your series details
export const metadata: Metadata = {
  title: "{{SERIES_NAME}} -- A Book Series by {{AUTHOR_NAME}}",
  description: "{{SERIES_DESCRIPTION}}",
  keywords: [
    // TODO: Add 6-8 keywords relevant to your series
    "book series",
    "{{AUTHOR_NAME}}",
  ],
  icons: {
    icon: "/favicon.svg",
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
        className={`${inter.variable} ${garamond.variable} font-sans antialiased`}
      >
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
