import type { Metadata } from "next";
import CollectionClient from "@/app/collection/CollectionClient";
import { getProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collection | REYN",
  description: "Explore our curated seasonal collections of fine contemporary garments, minimalist slip dresses, tailored trousers, and structured outerwear.",
};

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <CollectionClient initialProducts={products} />
    </div>
  );
}
