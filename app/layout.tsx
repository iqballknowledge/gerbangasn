import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GerbangASN — Platform Latihan CPNS & PPPK Terpercaya",
  description: "Simulasi CAT realistis, bank soal terkurasi dari field report terbaru, pembahasan mendalam, ranking nasional, dan analisis progress belajar untuk CPNS & PPPK.",
  keywords: "CPNS, PPPK, ASN, tryout, latihan soal, CAT, simulasi, ranking nasional",
  openGraph: {
    title: "GerbangASN — Latihan CPNS & PPPK Berbasis Field Report",
    description: "Ribuan soal terkurasi, simulasi CAT realistis, dan ranking nasional. Persiapan CPNS & PPPK paling efektif.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
