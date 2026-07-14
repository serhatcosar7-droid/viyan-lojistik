import type { Locale } from "@/data/i18n";

export type VehicleCategory = "truck" | "luxury";
export type LocalizedVehicleText = Record<Locale, string>;

export type Vehicle = {
  id: string;
  category: VehicleCategory;
  image: string;
  brand: string;
  model: string;
  year: number;
  description: LocalizedVehicleText;
};

export const vehicles: Vehicle[] = [
  {
    id: "daf-480-2021",
    category: "truck",
    image: "/vehicles/daf-480-2021.jpg",
    brand: "DAF",
    model: "480",
    year: 2021,
    description: {
      tr: "DAF 480, 2021 model çekici.",
      en: "DAF 480, model year 2021 truck.",
      ar: "شاحنة DAF 480، موديل 2021."
    }
  },
  {
    id: "daf-530-2019",
    category: "truck",
    image: "/vehicles/daf-530-2019.jpg",
    brand: "DAF",
    model: "530",
    year: 2019,
    description: {
      tr: "DAF 530, 2019 model çekici.",
      en: "DAF 530, model year 2019 truck.",
      ar: "شاحنة DAF 530، موديل 2019."
    }
  },
  {
    id: "renault-t480-2023",
    category: "truck",
    image: "/vehicles/renault-t480-2023.jpg",
    brand: "Renault",
    model: "T480",
    year: 2023,
    description: {
      tr: "Renault T480, 2023 model çekici.",
      en: "Renault T480, model year 2023 truck.",
      ar: "شاحنة Renault T480، موديل 2023."
    }
  },
  {
    id: "volvo-500-2018",
    category: "truck",
    image: "/vehicles/volvo-500-2018.jpg",
    brand: "Volvo",
    model: "500",
    year: 2018,
    description: {
      tr: "Volvo 500, 2018 model çekici.",
      en: "Volvo 500, model year 2018 truck.",
      ar: "شاحنة Volvo 500، موديل 2018."
    }
  }
];
