"use client";

import { useCart } from "@/lib/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {
  const {
    items,
    cartTotal,
    removeFromCart,
    updateQuantity,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useCart();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full md:w-[450px] bg-white dark:bg-zinc-950 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b dark:border-zinc-800">
          <h2 className="text-lg font-medium tracking-wider">YOUR CART</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 -mr-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-gray-500 dark:text-gray-400 text-lg tracking-wide">
                Your cart is empty
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-sm border-b border-black dark:border-white pb-1 tracking-widest hover:text-gray-500 hover:border-gray-500 transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="relative w-24 h-32 bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium pr-4 leading-tight">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border dark:border-zinc-800">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="px-3 py-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="px-3 py-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-medium">GHS {item.product.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50">
            <div className="flex justify-between mb-6 font-medium text-lg">
              <span className="tracking-wider">SUBTOTAL</span>
              <span>GHS {cartTotal}</span>
            </div>
            <Link href="/checkout" onClick={() => setIsDrawerOpen(false)}>
              <button className="w-full bg-black text-white dark:bg-white dark:text-black py-4 text-sm font-medium tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                CHECKOUT
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
