import type { Metadata } from "next";
import { ViyanWebsite } from "@/components/ViyanWebsite";

export const metadata: Metadata = {
  title: "Blog | VİYAN",
  description:
    "İran-Irak transit ticareti, tır alım-satımı ve güvenilir lojistik partner seçimi hakkında VİYAN blog yazıları.",
  openGraph: {
    title: "Blog | VİYAN",
    description: "Transit ticaret, tır alım-satımı ve lojistik operasyonlar için piyasa notları.",
    images: ["/logo.png"]
  }
};

export default function BlogPage() {
  return <ViyanWebsite page="blog" />;
}
