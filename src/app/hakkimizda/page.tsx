import type { Metadata } from "next";
import { ViyanWebsite } from "@/components/ViyanWebsite";

export const metadata: Metadata = {
  title: "Hakkımızda | VİYAN",
  description:
    "Aydın Altıntaş kuruculuğunda büyüyen VİYAN'ın 20 yıllık taşımacılık, araç ticareti ve İran-Irak pazar tecrübesi.",
  openGraph: {
    title: "Hakkımızda | VİYAN",
    description: "Yük taşımacılığından premium araç ve lojistik çözümlerine uzanan kurumsal deneyim.",
    images: ["/logo.png"]
  }
};

export default function AboutPage() {
  return <ViyanWebsite page="about" />;
}
