"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "./data";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("reyn_cart");
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem("reyn_cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, size: string, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { product, size, quantity }];
    });
    setIsDrawerOpen(true); // Auto open drawer when adding to cart
  };

  const removeFromCart = (productId: string, size: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
