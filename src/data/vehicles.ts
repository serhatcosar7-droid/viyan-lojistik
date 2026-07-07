export type VehicleCategory = "truck" | "luxury";

export type Vehicle = {
  id: string;
  category: VehicleCategory;
  image: string;
  brand: string;
  model: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  market: "Türkiye" | "İran" | "Irak" | "Transit";
  price: string;
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "mercedes-actros-1845",
    category: "truck",
    image: "/vehicles/vehicle-1.jpg",
    brand: "Mercedes-Benz",
    model: "Actros 1845",
    year: 2021,
    mileage: "420.000 km",
    fuel: "Dizel",
    transmission: "Otomatik",
    market: "Irak",
    price: "Talep üzerine",
    description: "Uzun yol ve transit operasyonlar için bakımlı, güçlü çekici."
  },
  {
    id: "scania-r450",
    category: "truck",
    image: "/vehicles/vehicle-2.jpg",
    brand: "Scania",
    model: "R450",
    year: 2020,
    mileage: "510.000 km",
    fuel: "Dizel",
    transmission: "Otomatik",
    market: "İran",
    price: "Talep üzerine",
    description: "Sınır ötesi ticaret ve filo yenileme için uygun premium tır."
  },
  {
    id: "volvo-fh500",
    category: "truck",
    image: "/vehicles/vehicle-3.jpg",
    brand: "Volvo",
    model: "FH500",
    year: 2022,
    mileage: "290.000 km",
    fuel: "Dizel",
    transmission: "Otomatik",
    market: "Transit",
    price: "Talep üzerine",
    description: "Yüksek konforlu kabin, güçlü motor ve uluslararası rota uyumu."
  },
  {
    id: "range-rover-vogue",
    category: "luxury",
    image: "/vehicles/vehicle-4.jpg",
    brand: "Range Rover",
    model: "Vogue",
    year: 2021,
    mileage: "68.000 km",
    fuel: "Dizel",
    transmission: "Otomatik",
    market: "Türkiye",
    price: "Talep üzerine",
    description: "Temiz geçmişli, lüks segmentte güçlü ve prestijli SUV."
  },
  {
    id: "mercedes-s-class",
    category: "luxury",
    image: "/vehicles/vehicle-5.jpg",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2022,
    mileage: "41.000 km",
    fuel: "Benzin",
    transmission: "Otomatik",
    market: "Irak",
    price: "Talep üzerine",
    description: "Üst segment müşteri talepleri için seçilmiş temsil aracı."
  }
];
