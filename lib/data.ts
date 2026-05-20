import { client } from "./sanity";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  details: string[];
}

// Fallback/Static products array
export const products: Product[] = [
  {
    id: "silk-archive-slip",
    name: "Silk Archive Slip",
    description: "A floor-length, bias-cut slip dress with delicate spaghetti straps. Crafted from deep noir black silk.",
    price: 3200,
    image: "/images/silk-archive-slip.png",
    category: "Dresses",
    details: ["100% Mulberry Silk", "Dry clean only", "Made in Italy"]
  },
  {
    id: "structured-linen-midi",
    name: "Structured Linen Midi",
    description: "A-line silhouette midi dress made from heavyweight Italian linen with an architectural neckline.",
    price: 2800,
    image: "/images/structured-linen-midi.png",
    category: "Dresses",
    details: ["100% Italian Linen", "Sleeveless", "Hand wash cold"]
  },
  {
    id: "draped-silk-blouse",
    name: "Draped Silk Blouse",
    description: "Warm champagne/rose taupe silk blouse featuring a cowl neck and billowing sleeves.",
    price: 2100,
    image: "/images/draped-silk-blouse.png",
    category: "Tops",
    details: ["100% Mulberry Silk", "Relaxed fit", "Dry clean only"]
  },
  {
    id: "tailored-wide-leg-trouser",
    name: "Tailored Wide Leg Trouser",
    description: "Charcoal grey high-waisted trousers with ultra wide flowing legs and sharp pleats.",
    price: 2500,
    image: "/images/tailored-wide-leg-trouser.png",
    category: "Bottoms",
    details: ["Virgin Wool Blend", "High-waisted", "Dry clean only"]
  },
  {
    id: "obsidian-trench",
    name: "Obsidian Trench",
    description: "Architectural obsidian black double-breasted trench coat with exaggerated lapels and a structured silhouette.",
    price: 5400,
    image: "/images/obsidian-trench.png",
    category: "Outerwear",
    details: ["Heavyweight Bonded Silk", "Midi length", "Dry clean only"]
  }
];

// Helper to check if Sanity is configured
const isSanityConfigured = () => 
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
  !!process.env.NEXT_PUBLIC_SANITY_DATASET &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

// Fetch all products dynamically from Sanity with local fallback
export async function getProducts(): Promise<Product[]> {
  if (!isSanityConfigured()) {
    return products;
  }

  try {
    const query = `*[_type == "product"] {
      "id": slug.current,
      name,
      description,
      price,
      "image": image.asset->url,
      category,
      details
    }`;
    const data = await client.fetch(query);
    // If configured but empty, return original static fallback list to avoid blank storefronts
    return data && data.length > 0 ? data : products;
  } catch (error) {
    console.error("Sanity fetch error, using fallbacks:", error);
    return products;
  }
}

// Fetch single product dynamically from Sanity with local fallback
export async function getProduct(id: string): Promise<Product | undefined> {
  if (!isSanityConfigured()) {
    return products.find(p => p.id === id);
  }

  try {
    const query = `*[_type == "product" && slug.current == $id][0] {
      "id": slug.current,
      name,
      description,
      price,
      "image": image.asset->url,
      category,
      details
    }`;
    const data = await client.fetch(query, { id });
    return data || products.find(p => p.id === id);
  } catch (error) {
    console.error(`Sanity fetch single error for ${id}:`, error);
    return products.find(p => p.id === id);
  }
}
