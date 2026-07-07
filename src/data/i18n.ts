export type Locale = "tr" | "en" | "ar";

export const locales: { code: Locale; label: string; short: string; dir: "ltr" | "rtl" }[] = [
  { code: "tr", label: "Türkçe", short: "TR", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" }
];

export const dictionary = {
  tr: {
    nav: ["Ana Sayfa", "Hakkımızda", "Showroom", "Blog", "İletişim"],
    heroTitle: "Tır, Lüks Araç ve Lojistikte Bölgesel Güven",
    heroText:
      "VİYAN, 20 yıllık tecrübesiyle tır ve lüks araç alım-satımı, İran ve Irak’a transit ticaret, lojistik organizasyon ve sınır ötesi ticaret çözümleri sunar.",
    inspect: "Araçları İncele",
    contact: "İletişime Geç",
    stats: ["20 Yıllık Deneyim", "İran & Irak Ağı", "Premium Araç Tedariki"],
    aboutTitle: "Taşımacılıktan bölgesel ticaret gücüne",
    aboutText:
      "Aydın Altıntaş kuruculuğunda yük taşımacılığı tecrübesiyle başlayan VİYAN, bugün tır alım-satımı, lüks araç ticareti, transit operasyon yönetimi ve lojistik danışmanlık alanlarında güçlü bir marka konumundadır.",
    aboutCards: ["Güvenilir ticaret yaklaşımı", "Bölgesel pazar bilgisi", "Operasyonel lojistik kabiliyeti"],
    showroomTitle: "Araç Showroom",
    showroomText: "Tır ve lüks araç portföyü kolay güncellenebilir veri yapısıyla yönetilir.",
    all: "Tümü",
    trucks: "Tır",
    luxury: "Lüks Araç",
    brand: "Marka",
    year: "Yıl",
    price: "Fiyat",
    market: "Ülke / pazar",
    details: "Detayları Gör",
    askWhatsApp: "WhatsApp ile Sor",
    servicesTitle: "Kapsamlı lojistik ve ticaret hizmetleri",
    services: [
      "Tır alım-satımı",
      "Lüks araç alım-satımı",
      "İran ve Irak’a transit ticaret",
      "Lojistik operasyon yönetimi",
      "Taşıma organizasyonu",
      "İthalat/ihracat süreç desteği",
      "Araç tedarik ve satış danışmanlığı",
      "Bölgesel ticaret çözümleri"
    ],
    transitTitle: "İran ve Irak transit ticaret uzmanlığı",
    transitText:
      "VİYAN; sınır ötesi araç satışı, rota planlama, belge takibi, lojistik organizasyon ve operasyon yönetiminde İran ve Irak pazarlarına odaklı çalışır.",
    whyTitle: "Neden VİYAN",
    why: [
      "20 yıllık sektör deneyimi",
      "İran ve Irak pazar bilgisi",
      "Güvenilir araç tedariki",
      "Profesyonel lojistik ağı",
      "Şeffaf iletişim",
      "Kurumsal hizmet anlayışı"
    ],
    blogTitle: "Blog ve piyasa notları",
    blog: [
      ["Transit Ticarette İran ve Irak Pazarı", "İran ve Irak pazarında araç satışı, belge takibi ve lojistik planlamanın ticari başarıya etkisi."],
      ["Tır Alım Satımında Dikkat Edilmesi Gerekenler", "Tır alım-satımında geçmiş kayıtları, kondisyon, rota uygunluğu ve operasyon maliyetleri nasıl değerlendirilir?"],
      ["Lojistikte Güvenilir Partner Seçimi", "Sınır ötesi ticarette doğru lojistik partneri seçmek operasyon güvenini ve teslimat kalitesini artırır."]
    ],
    contactTitle: "İletişim",
    form: ["Ad Soyad", "Telefon", "E-posta", "İlgilendiğiniz Hizmet", "Mesaj", "Gönder"],
    address: "Yüzbaşıoğlu Apt, Merkez, 52003. Sk. No:1 Kat:4 No:8, 33000 Mezitli/Mersin"
  },
  en: {
    nav: ["Home", "About", "Showroom", "Blog", "Contact"],
    heroTitle: "Regional Trust in Trucks, Luxury Cars and Logistics",
    heroText:
      "VİYAN delivers truck and luxury vehicle trading, transit commerce to Iran and Iraq, logistics organization and cross-border trade solutions with 20 years of experience.",
    inspect: "View Vehicles",
    contact: "Contact Us",
    stats: ["20 Years Experience", "Iran & Iraq Network", "Premium Sourcing"],
    aboutTitle: "From freight experience to regional trade strength",
    aboutText:
      "Founded by Aydın Altıntaş with a background in freight transportation, VİYAN is now a strong brand in truck trading, luxury vehicle commerce, transit operations and logistics consulting.",
    aboutCards: ["Reliable trade approach", "Regional market knowledge", "Operational logistics capability"],
    showroomTitle: "Vehicle Showroom",
    showroomText: "Truck and luxury vehicle inventory is managed through an easy-to-update data structure.",
    all: "All",
    trucks: "Trucks",
    luxury: "Luxury Cars",
    brand: "Brand",
    year: "Year",
    price: "Price",
    market: "Country / market",
    details: "View Details",
    askWhatsApp: "Ask on WhatsApp",
    servicesTitle: "Complete logistics and trade services",
    services: [
      "Truck trading",
      "Luxury vehicle trading",
      "Transit trade to Iran and Iraq",
      "Logistics operation management",
      "Transport organization",
      "Import/export process support",
      "Vehicle sourcing and sales consulting",
      "Regional trade solutions"
    ],
    transitTitle: "Iran and Iraq transit trade expertise",
    transitText:
      "VİYAN focuses on Iran and Iraq markets with cross-border vehicle sales, route planning, document follow-up, logistics organization and operation management.",
    whyTitle: "Why VİYAN",
    why: ["20 years of sector experience", "Iran and Iraq market insight", "Reliable vehicle sourcing", "Professional logistics network", "Transparent communication", "Corporate service mindset"],
    blogTitle: "Blog and market notes",
    blog: [
      ["Iran and Iraq Markets in Transit Trade", "How vehicle sales, document follow-up and logistics planning shape trade performance in Iran and Iraq."],
      ["What to Check When Buying or Selling Trucks", "How to evaluate vehicle history, condition, route suitability and operating costs in truck trade."],
      ["Choosing a Reliable Logistics Partner", "The right logistics partner improves operational trust, delivery quality and cross-border communication."]
    ],
    contactTitle: "Contact",
    form: ["Full Name", "Phone", "Email", "Service of Interest", "Message", "Send"],
    address: "Yüzbaşıoğlu Apt, Merkez, 52003. Sk. No:1 Floor:4 No:8, 33000 Mezitli/Mersin"
  },
  ar: {
    nav: ["الرئيسية", "من نحن", "المعرض", "المدونة", "تواصل"],
    heroTitle: "ثقة إقليمية في الشاحنات والسيارات الفاخرة والخدمات اللوجستية",
    heroText:
      "تقدم VİYAN بخبرة 20 عاما حلول بيع وشراء الشاحنات والسيارات الفاخرة، والتجارة الترانزيت إلى إيران والعراق، وتنظيم الخدمات اللوجستية والتجارة عبر الحدود.",
    inspect: "استعرض المركبات",
    contact: "تواصل معنا",
    stats: ["20 عاما من الخبرة", "شبكة إيران والعراق", "توريد مركبات فاخرة"],
    aboutTitle: "من خبرة النقل إلى قوة تجارية إقليمية",
    aboutText:
      "بدأت VİYAN بقيادة المؤسس أيدن ألتنطاش من خبرة نقل البضائع، وأصبحت اليوم علامة قوية في تجارة الشاحنات والسيارات الفاخرة وإدارة عمليات الترانزيت والاستشارات اللوجستية.",
    aboutCards: ["نهج تجاري موثوق", "معرفة بالأسواق الإقليمية", "قدرة تشغيلية لوجستية"],
    showroomTitle: "معرض المركبات",
    showroomText: "تدار قائمة الشاحنات والسيارات الفاخرة من خلال بنية بيانات سهلة التحديث.",
    all: "الكل",
    trucks: "شاحنات",
    luxury: "سيارات فاخرة",
    brand: "العلامة",
    year: "السنة",
    price: "السعر",
    market: "الدولة / السوق",
    details: "عرض التفاصيل",
    askWhatsApp: "اسأل عبر واتساب",
    servicesTitle: "خدمات تجارية ولوجستية متكاملة",
    services: ["بيع وشراء الشاحنات", "بيع وشراء السيارات الفاخرة", "تجارة الترانزيت إلى إيران والعراق", "إدارة العمليات اللوجستية", "تنظيم النقل", "دعم إجراءات الاستيراد والتصدير", "استشارات توريد وبيع المركبات", "حلول التجارة الإقليمية"],
    transitTitle: "خبرة تجارة الترانزيت في إيران والعراق",
    transitText:
      "تركز VİYAN على أسواق إيران والعراق من خلال بيع المركبات عبر الحدود، وتخطيط المسارات، ومتابعة المستندات، وتنظيم الخدمات اللوجستية وإدارة العمليات.",
    whyTitle: "لماذا VİYAN",
    why: ["20 عاما من الخبرة", "معرفة بأسواق إيران والعراق", "توريد موثوق للمركبات", "شبكة لوجستية احترافية", "تواصل شفاف", "فهم مؤسسي للخدمة"],
    blogTitle: "المدونة وملاحظات السوق",
    blog: [
      ["اختيار المركبة المناسبة لتجارة الترانزيت", "نقاط مهمة عند توريد الشاحنات والسيارات الفاخرة لأسواق إيران والعراق."],
      ["الانضباط التشغيلي في البيع عبر الحدود", "أهمية إدارة المستندات والمسار والتسليم والتواصل من مركز واحد."],
      ["الثقة في تجارة المركبات الفاخرة", "كيف تعزز سجلات المركبة والفحص والخدمات اللوجستية والتواصل بعد البيع الثقة."]
    ],
    contactTitle: "تواصل",
    form: ["الاسم الكامل", "الهاتف", "البريد الإلكتروني", "الخدمة المطلوبة", "الرسالة", "إرسال"],
    address: "Yüzbaşıoğlu Apt, Merkez, 52003. Sk. No:1 Kat:4 No:8, 33000 Mezitli/Mersin"
  }
} satisfies Record<Locale, Record<string, string | string[] | string[][]>>;
