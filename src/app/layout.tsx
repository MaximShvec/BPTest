import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Balance Pay",
  description: "Balance Pay",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
