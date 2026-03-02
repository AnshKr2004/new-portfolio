import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ansh Kumar — AI Engineer | Full-Stack Developer | SaaS Builder",
  description:
    "I engineer intelligent software that scales — from concept to production. AI-powered SaaS, full-stack applications, and automation tools.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "SaaS Builder",
    "Next.js",
    "React",
    "TypeScript",
    "LLM",
    "Machine Learning",
  ],
  authors: [{ name: "Ansh Kumar" }],
  openGraph: {
    title: "Ansh Kumar — AI Engineer | Full-Stack Developer | SaaS Builder",
    description:
      "I engineer intelligent software that scales — from concept to production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Kumar — AI Engineer | Full-Stack Developer | SaaS Builder",
    description:
      "I engineer intelligent software that scales — from concept to production.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
