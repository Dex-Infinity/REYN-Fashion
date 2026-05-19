"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function CollectionClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sortOption, setSortOption] = useState("featured");

  // Get unique categories dynamically from product data
  const categories = useMemo(() => {
    const allCategories = products.map((p) => p.category.toUpperCase());
    return ["ALL", ...Array.from(new Set(allCategories))];
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (activeCategory !== "ALL") {
      result = result.filter(
        (product) => product.category.toUpperCase() === activeCategory
      );
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Apply Sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        // Default to natural/original order
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortOption]);

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory("ALL");
    setSortOption("featured");
  };

  return (
    <div className="pt-28 pb-24 md:pt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[0.25em] uppercase mb-6 leading-tight">
            The Collection
          </h1>
          <div className="h-[1px] w-12 bg-black dark:bg-white mx-auto mb-6 opacity-30" />
          <p className="text-sm md:text-base font-light tracking-widest text-zinc-500 dark:text-zinc-400 uppercase leading-relaxed">
            A study in sculptural form, texture, and uncompromising contemporary minimalism designed for the modern narrative.
          </p>
        </div>

        {/* Filter and Control Section */}
        <div className="border-t border-b border-zinc-200 dark:border-zinc-800 py-6 mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Search bar */}
          <div className="relative md:w-80 group">
            <input
              type="text"
              placeholder="SEARCH COLLECTION..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 pl-8 pr-4 text-xs tracking-widest uppercase focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-300 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
            />
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-bold tracking-[0.2em] uppercase pb-1 transition-all duration-300 border-b ${
                  activeCategory === category
                    ? "border-black dark:border-white text-black dark:text-white"
                    : "border-transparent text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex items-center justify-between md:justify-end gap-3 min-w-[200px]">
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">SORT BY</span>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-none px-6 py-2 pr-10 text-xs tracking-widest uppercase focus:outline-none focus:border-black dark:focus:border-white transition-colors cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-az">Name: A to Z</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Info bar / count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-xs font-medium tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
            Showing {filteredAndSortedProducts.length} of {products.length} pieces
          </p>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 animate-fadeIn transition-opacity duration-300">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="transition-all duration-500 ease-out hover:-translate-y-1">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-32 border border-dashed border-zinc-200 dark:border-zinc-850 rounded-lg">
            <svg
              className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-3">No matching pieces found</h3>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 tracking-widest uppercase mb-8 max-w-md mx-auto leading-relaxed">
              We couldn&apos;t find any items matching your selected criteria. Try adjusting your search query or filter settings.
            </p>
            <button
              onClick={handleReset}
              className="inline-block border border-black dark:border-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
