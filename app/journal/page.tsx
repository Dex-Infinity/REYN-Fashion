import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal | REYN",
  description: "Essays on form, modern silhouettes, tactility, and intentional contemporary design.",
};

interface JournalPost {
  number: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const posts: JournalPost[] = [
  {
    number: "01",
    title: "THE ART OF RESTRAINT",
    date: "MAY 15, 2026",
    category: "DESIGN THEORY",
    excerpt: "Exploring the tension between negative space and structure. A conversation on architectural silhouettes and minimal contemporary dressing.",
    image: "/images/obsidian-trench.png",
  },
  {
    number: "02",
    title: "MULBERRY ARCHIVE SILK",
    date: "APRIL 28, 2026",
    category: "CRAFT & TEXTILE",
    excerpt: "Tracing our luxury silk slip from the historic weaving mills of Italy to the light-filled atelier in Accra. Quality in every thread.",
    image: "/images/silk-archive-slip.png",
  },
  {
    number: "03",
    title: "TACTILITY AND WEIGHT",
    date: "MARCH 12, 2026",
    category: "FALL SEASON",
    excerpt: "Why the weight of heavy Italian linen dictates the fall drape. Reviewing our structural midi design processes.",
    image: "/images/structured-linen-midi.png",
  },
];

export default function JournalPage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[0.25em] uppercase mb-6 leading-tight">
            The Journal
          </h1>
          <div className="h-[1px] w-12 bg-black dark:bg-white mx-auto mb-6 opacity-30" />
          <p className="text-xs md:text-sm font-light tracking-widest text-zinc-500 dark:text-zinc-400 uppercase leading-relaxed">
            Essays on design theory, craftsmanship, modern aesthetics, and the tactile poetry of contemporary clothing.
          </p>
        </div>

        {/* Editorial Post List */}
        <div className="space-y-24 md:space-y-36">
          {posts.map((post, index) => (
            <article 
              key={post.number} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Cover Image */}
              <div className="relative aspect-[4/5] w-full lg:w-1/2 overflow-hidden bg-zinc-100 dark:bg-zinc-900 group">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Editorial Text Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-zinc-400 mb-6">
                  <span>{post.number}</span>
                  <span className="h-[1px] w-6 bg-zinc-300 dark:bg-zinc-700" />
                  <span>{post.category}</span>
                  <span className="h-[1px] w-6 bg-zinc-300 dark:bg-zinc-700" />
                  <span>{post.date}</span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold tracking-wide uppercase mb-6 leading-snug">
                  {post.title}
                </h2>
                
                <p className="text-sm md:text-base leading-relaxed text-zinc-500 dark:text-zinc-400 font-light mb-10 max-w-xl">
                  {post.excerpt}
                </p>

                <div>
                  <Link 
                    href="/journal" 
                    className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-b border-black dark:border-white pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
                  >
                    READ ESSAY
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
