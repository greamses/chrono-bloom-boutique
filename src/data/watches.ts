import w1 from "@/assets/watch-1.jpg";
import w2 from "@/assets/watch-2.jpg";
import w3 from "@/assets/watch-3.jpg";
import w4 from "@/assets/watch-4.jpg";
import w5 from "@/assets/watch-5.jpg";
import w6 from "@/assets/watch-6.jpg";

export type Watch = {
  id: string;
  name: string;
  reference: string;
  collection: string;
  price: number;
  image: string;
  movement: string;
  case: string;
  diameter: string;
  waterResistance: string;
  description: string;
};

export const watches: Watch[] = [
  {
    id: "celestia-01",
    name: "Celestia Lumière",
    reference: "CL-1893",
    collection: "Heritage",
    price: 12400,
    image: w1,
    movement: "Automatic, in-house caliber 89",
    case: "Polished steel, 39mm",
    diameter: "39mm",
    waterResistance: "50m",
    description:
      "A whisper of mid-century restraint. The Lumière returns to a time when watchmaking obeyed the discipline of the line.",
  },
  {
    id: "obsidian-02",
    name: "Obsidian Chronograph",
    reference: "OC-440",
    collection: "Sport",
    price: 8950,
    image: w2,
    movement: "Automatic chronograph, caliber 7750",
    case: "Black ceramic, 42mm",
    diameter: "42mm",
    waterResistance: "200m",
    description:
      "Forged in matte ceramic, calibrated for measured pressure. A chronograph for the disciplined hour.",
  },
  {
    id: "aurum-03",
    name: "Aurum Skeleton",
    reference: "AS-2107",
    collection: "Atelier",
    price: 28600,
    image: w3,
    movement: "Hand-wound openworked caliber",
    case: "18k rose gold, 41mm",
    diameter: "41mm",
    waterResistance: "30m",
    description:
      "Architecture made wearable. Every bridge, jewel, and wheel exposed to the light it was built to catch.",
  },
  {
    id: "marin-04",
    name: "Marin Profundus",
    reference: "MP-300",
    collection: "Sport",
    price: 6750,
    image: w4,
    movement: "Automatic, caliber 80 chronometer",
    case: "Brushed steel, 40mm",
    diameter: "40mm",
    waterResistance: "300m",
    description:
      "Built for depth, dressed for surface. A diver that doesn't ask permission to be elegant.",
  },
  {
    id: "voyager-05",
    name: "Voyager Aviateur",
    reference: "VA-1947",
    collection: "Heritage",
    price: 9200,
    image: w5,
    movement: "Hand-wound, caliber 215",
    case: "Yellow gold, 38mm",
    diameter: "38mm",
    waterResistance: "30m",
    description:
      "An homage to early flight — patinated dial, oversized numerals, the romance of analog navigation.",
  },
  {
    id: "tour-06",
    name: "Tourbillon Nuit",
    reference: "TN-001",
    collection: "Atelier",
    price: 86500,
    image: w6,
    movement: "Flying tourbillon, hand-wound",
    case: "Platinum 950, 40mm",
    diameter: "40mm",
    waterResistance: "30m",
    description:
      "Three hundred and twenty hours of assembly. A single rotation per minute. Time made visible.",
  },
];

export const collections = ["All", "Heritage", "Sport", "Atelier"] as const;

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);