import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Natanael Siahaan — Senior Software Engineer",
  description:
    "Portfolio and CV of Jonathan Natanael Siahaan, a senior software engineer with 10+ years of experience building high-concurrency, high-quality systems.",
  openGraph: {
    title: "Jonathan Natanael Siahaan — Senior Software Engineer",
    description:
      "Portfolio and CV of Jonathan Natanael Siahaan, a senior software engineer with 10+ years of experience building high-concurrency, high-quality systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
