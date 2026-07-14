import type { Metadata } from "next";
import { ViyanWebsite } from "@/components/ViyanWebsite";

export const metadata: Metadata = {
  title: "Showroom | VİYAN",
  description:
    "VİYAN showroom'da tır ve lüks araç portföyünü filtreleyin; marka, yıl, pazar ve araç detaylarına kolayca ulaşın.",
  openGraph: {
    title: "Araç Showroom | VİYAN",
    description: "Tır ve lüks araçlar için premium showroom deneyimi.",
    images: ["/vehicles/daf-480-2021.jpg"]
  }
};

export default function ShowroomPage() {
  return <ViyanWebsite page="showroom" />;
}
