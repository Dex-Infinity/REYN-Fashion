"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

const SIZES = ["S", "M", "L", "XL"];

export default function ProductClientDetails({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
  };

  return (
    <>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold tracking-[0.2em]">SIZE</span>
          <button className="text-xs text-gray-500 border-b border-gray-300 dark:border-gray-700 pb-0.5 tracking-wider hover:text-black dark:hover:text-white transition-colors">
            SIZE GUIDE
          </button>
        </div>
        <div className="flex gap-4">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                selectedSize === size
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-gray-200 text-gray-500 hover:border-black dark:border-gray-800 dark:hover:border-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white dark:bg-white dark:text-black py-5 text-sm font-bold tracking-[0.2em] hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 shadow-xl shadow-black/10 dark:shadow-white/5 active:scale-[0.98]"
      >
        ADD TO CART
      </button>
    </>
  );
}
