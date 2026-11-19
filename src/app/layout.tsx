import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Raj | Information Technology Engineer & Data Analyst",
  description:
    "Personal portfolio of Gaurav Raj, Information Technology undergraduate at Delhi Technological University (DTU). Data Analyst, AI & LLM Systems, Graph Algorithms, and Full-Stack Developer.",
  keywords: [
    "Gaurav Raj",
    "DTU",
    "Delhi Technological University",
    "Data Analyst",
    "Software Engineer",
    "Python",
    "Streamlit",
    "LeetCode",
    "Codeforces",
  ],
  authors: [{ name: "Gaurav Raj" }],
  openGraph: {
    title: "Gaurav Raj | Portfolio",
    description:
      "Information Technology Undergraduate @ Delhi Technological University (DTU). Data Analytics & Machine Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300`}
      >
        {children}
      </body>
    </html>
  );
}
