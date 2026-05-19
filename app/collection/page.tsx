import type { Metadata } from "next";
import CollectionClient from "@/app/collection/CollectionClient";

export const metadata: Metadata = {
  title: "Collection | REYN",
  description: "Explore our curated seasonal collections of fine contemporary garments, minimalist slip dresses, tailored trousers, and structured outerwear.",
};

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <CollectionClient />
    </div>
  );
}
