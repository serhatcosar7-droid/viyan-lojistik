import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VİYAN | Tır, Lüks Araç ve Lojistikte Bölgesel Güven",
  description:
    "VİYAN; tır ve lüks araç alım-satımı, İran ve Irak transit ticareti, lojistik operasyon yönetimi ve sınır ötesi ticaret çözümleri sunar.",
  metadataBase: new URL("https://viyan.com"),
  openGraph: {
    title: "VİYAN | Premium Araç ve Lojistik Çözümleri",
    description:
      "20 yıllık deneyimle tır, lüks araç, transit ticaret ve lojistik organizasyon hizmetleri.",
    images: ["/logo.png"],
    locale: "tr_TR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
