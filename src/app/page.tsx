import type { Metadata } from "next";
import { ViyanWebsite } from "@/components/ViyanWebsite";

export const metadata: Metadata = {
  title: "VİYAN | Tır, Lüks Araç ve Lojistikte Bölgesel Güven",
  description:
    "VİYAN; 20 yıllık deneyimiyle tır ve lüks araç alım-satımı, İran-Irak transit ticareti ve lojistik çözümleri sunar.",
  openGraph: {
    title: "VİYAN | Premium Araç ve Lojistik Çözümleri",
    description: "Tır, lüks araç, transit ticaret ve lojistik organizasyon alanlarında bölgesel güven.",
    images: ["/logo.png"]
  }
};

export default function Home() {
  return <ViyanWebsite />;
}
