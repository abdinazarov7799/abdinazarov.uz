import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diyorbek Abdinazarov — Full‑Stack JavaScript Developer",
  description:
    "21 y.o. Full-Stack JavaScript Developer (React, React Native, NestJS). Building scalable, production-grade systems. Tashkent, Xalq Bank, Barterly.",
  metadataBase: new URL("https://abdinazarov-diyorbek.uz"),
  openGraph: {
    title: "Diyorbek Abdinazarov — Full‑Stack JavaScript Developer",
    description:
      "React | React Native | NestJS | DevOps. Real, scalable, production-grade systems.",
    url: "https://abdinazarov-diyorbek.uz",
    siteName: "Diyorbek Abdinazarov",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyorbek Abdinazarov — Full‑Stack JavaScript Developer",
    description:
      "React | React Native | NestJS | DevOps. Real, scalable, production-grade systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
