import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/data";
import ProductClientDetails from "./ProductClientDetails";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} | REYN`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="relative aspect-[3/4] w-full bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Product Info (Interactive part extracted to Client Component) */}
          <div className="flex flex-col justify-center">
            <nav className="mb-8 text-xs font-medium tracking-widest text-gray-500">
              <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">/</span>
              <Link href="/#collection" className="hover:text-black dark:hover:text-white transition-colors uppercase">{product.category}</Link>
              <span className="mx-2">/</span>
              <span className="text-black dark:text-white uppercase">{product.name}</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold tracking-[0.1em] mb-4 uppercase">{product.name}</h1>
            <p className="text-xl text-gray-500 mb-8">GHS {product.price}</p>
            
            <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-10">
              {product.description}
            </p>

            <ProductClientDetails product={product} />

            <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/10">
              <h3 className="text-xs font-bold tracking-[0.2em] mb-4">DETAILS & CARE</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
