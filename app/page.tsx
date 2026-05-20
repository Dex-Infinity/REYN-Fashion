import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src="/images/hero-banner.png"
          alt="REYN Fall Collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-20 text-center text-white px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] uppercase mb-6">
            The Essentials
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest max-w-2xl mx-auto mb-10 drop-shadow-md">
            Elevate your everyday with our curated collection of luxury staples.
          </p>
          <Link
            href="/collection"
            className="inline-block border border-white px-10 py-4 text-sm font-medium tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
          >
            DISCOVER THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] text-gray-400 mb-8">OUR PHILOSOPHY</h2>
          <p className="text-xl md:text-3xl leading-relaxed font-light tracking-wide">
            "We believe in the power of restraint. Every garment is an exploration of form, fabric, and uncompromising quality designed for the modern narrative."
          </p>
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section id="collection" className="py-16 md:py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em]">CURATED ARRIVALS</h2>
            <Link href="/collection" className="hidden md:inline-block text-sm font-medium tracking-widest hover:text-gray-500 transition-colors border-b border-black dark:border-white pb-1">
              VIEW ALL
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link href="/collection" className="inline-block border border-black dark:border-white px-8 py-3 text-sm font-medium tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
