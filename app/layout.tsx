import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "REYN | Luxury Fashion Boutique",
  description: "A curated selection of luxury pieces for the modern wardrobe in Accra, Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
