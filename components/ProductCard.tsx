import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 dark:group-hover:bg-black/40" />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-sm font-medium tracking-wide uppercase">{product.name}</h3>
        <p className="text-sm text-gray-500">GHS {product.price}</p>
      </div>
    </Link>
  );
}
