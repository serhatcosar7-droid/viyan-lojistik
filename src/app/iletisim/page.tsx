import type { Metadata } from "next";
import { ViyanWebsite } from "@/components/ViyanWebsite";

export const metadata: Metadata = {
  title: "İletişim | VİYAN",
  description:
    "VİYAN ile telefon, WhatsApp, e-posta ve iletişim formu üzerinden iletişime geçin. Adres: Mezitli/Mersin.",
  openGraph: {
    title: "İletişim | VİYAN",
    description: "Tır, lüks araç ve lojistik çözümleri için VİYAN ile iletişime geçin.",
    images: ["/logo.png"]
  }
};

export default function ContactPage() {
  return <ViyanWebsite page="contact" />;
}
