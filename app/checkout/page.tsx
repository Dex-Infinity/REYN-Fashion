"use client";

import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    ghanaPostGps: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Business WhatsApp Number (Placeholder - using a generic number format)
    // Replace with the actual REYN fashion WhatsApp number
    const businessWhatsApp = "+233540000000";

    let message = `*NEW ORDER - REYN FASHION*\n\n`;
    message += `*CUSTOMER DETAILS*\n`;
    message += `Name: ${formData.fullName}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Delivery Address: ${formData.address}, ${formData.city}\n`;
    if (formData.ghanaPostGps) {
      message += `Ghana Post GPS: ${formData.ghanaPostGps}\n`;
    }
    
    message += `\n*ORDER SUMMARY*\n`;
    items.forEach((item) => {
      message += `- ${item.quantity}x ${item.product.name} (Size: ${item.size}) - GHS ${item.product.price * item.quantity}\n`;
    });
    
    message += `\n*TOTAL: GHS ${cartTotal}*\n`;
    message += `\nThank you for shopping with REYN.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessWhatsApp.replace("+", "")}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
    
    // In a real app, we might clear the cart here or after confirmation
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold tracking-[0.2em] mb-6">CHECKOUT</h1>
        <p className="text-gray-500 mb-8">Your cart is empty.</p>
        <Link href="/" className="bg-black text-white dark:bg-white dark:text-black px-10 py-4 text-sm font-medium tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          RETURN TO SHOP
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-3xl font-bold tracking-[0.2em] mb-12">CHECKOUT</h1>

        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24">
          
          {/* Checkout Form */}
          <div className="flex-1">
            <h2 className="text-sm font-bold tracking-widest mb-8 border-b pb-4 dark:border-zinc-800">DELIVERY DETAILS</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs font-medium tracking-wider text-gray-500">FULL NAME</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-medium tracking-wider text-gray-500">WHATSAPP NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+233..."
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-xs font-medium tracking-wider text-gray-500">STREET ADDRESS</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-xs font-medium tracking-wider text-gray-500">CITY</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="ghanaPostGps" className="block text-xs font-medium tracking-wider text-gray-500">
                    GHANA POST GPS <span className="text-gray-400 font-normal">(Highly Recommended)</span>
                  </label>
                  <input
                    type="text"
                    id="ghanaPostGps"
                    name="ghanaPostGps"
                    placeholder="e.g. GA-123-4567"
                    value={formData.ghanaPostGps}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] text-white py-5 text-sm font-bold tracking-widest hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "REDIRECTING..."
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      COMPLETE ORDER VIA WHATSAPP
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  You will be redirected to WhatsApp to confirm your order with our team.
                </p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-[400px]">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8">
              <h2 className="text-sm font-bold tracking-widest mb-8 border-b pb-4 dark:border-zinc-800">ORDER SUMMARY</h2>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                    <div className="relative w-16 h-20 bg-gray-100 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium">GHS {item.product.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-zinc-800 pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span>GHS {cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span>Calculated on WhatsApp</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-4 border-t border-gray-200 dark:border-zinc-800">
                  <span className="tracking-widest">TOTAL</span>
                  <span>GHS {cartTotal}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
