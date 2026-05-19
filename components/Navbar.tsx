"use client";

import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cartCount, setIsDrawerOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 dark:bg-black/90 dark:border-b dark:border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <Link href="/collection" className="hover:text-gray-500 transition-colors">
            COLLECTION
          </Link>
          <Link href="/#about" className="hover:text-gray-500 transition-colors">
            ABOUT
          </Link>
        </nav>

        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-[0.2em] absolute left-1/2 -translate-x-1/2"
        >
          REYN
        </Link>

        <div className="flex items-center gap-6 ml-auto md:ml-0">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 text-sm font-medium tracking-wide hover:text-gray-500 transition-colors group"
          >
            <span>CART</span>
            <span className="flex items-center justify-center bg-black text-white dark:bg-white dark:text-black w-5 h-5 rounded-full text-xs transition-transform group-hover:scale-110">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
