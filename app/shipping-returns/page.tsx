import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Returns | REYN",
  description: "Learn about REYN's local Accra courier delivery, nationwide shipping, and global air cargo services, alongside our 14-day exchange policy.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase mb-6 leading-tight">
            Shipping & Returns
          </h1>
          <div className="h-[1px] w-12 bg-black dark:bg-white mx-auto opacity-30" />
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          
          {/* Section 1: Shipping Policy */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-4">
              01 / SHIPPING & DELIVERY METRICS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-650 dark:text-zinc-400 font-light leading-relaxed">
              <div className="space-y-4">
                <h3 className="font-bold text-black dark:text-white tracking-wide uppercase">Accra Local Courier</h3>
                <p>
                  We offer same-day dispatch via dedicated motorbike dispatch services for all orders placed in Accra before 12:00 PM. 
                </p>
                <p className="text-zinc-500 font-medium">Flat Rate: GHS 50.00</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-black dark:text-white tracking-wide uppercase">Nationwide Ghana</h3>
                <p>
                  Delivery to Kumasi, Takoradi, Tamale, and other regions takes 1-3 business days. Packages are handled via secure private VIP parcel logistics.
                </p>
                <p className="text-zinc-500 font-medium">Flat Rate: GHS 100.00</p>
              </div>

              <div className="space-y-4 md:col-span-2 pt-4">
                <h3 className="font-bold text-black dark:text-white tracking-wide uppercase">International Delivery</h3>
                <p>
                  We ship globally via express DHL courier services. Delivery takes 5-10 business days depending on customs and local processing. Shipping weights and shipping estimates are finalized with our logistics desk on WhatsApp when placing your order.
                </p>
                <p className="text-zinc-500 font-medium">Calculated upon request on WhatsApp</p>
              </div>
            </div>
          </section>

          {/* Section 2: Returns Policy */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-4">
              02 / RETURN & EXCHANGE PRINCIPLES
            </h2>

            <div className="space-y-6 text-sm text-zinc-650 dark:text-zinc-400 font-light leading-relaxed">
              <p>
                We hold our craftsmanship to the highest standards. If a piece does not sit correctly, we accept exchanges or store credit returns within <strong className="text-black dark:text-white">14 days</strong> of package delivery.
              </p>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Garments must remain completely unworn, unwashed, and undamaged.</li>
                <li>All original designer labels, cards, and packaging elements must remain attached.</li>
                <li>Custom-tailored or adjusted pieces are considered final sale and cannot be returned.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Process */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-4">
              03 / INITATING A REQUEST
            </h2>

            <div className="space-y-6 text-sm text-zinc-650 dark:text-zinc-400 font-light leading-relaxed">
              <p>
                To coordinate an exchange, size swap, or return, please message our showroom logistics coordinator directly via our WhatsApp line. 
                Please provide your order number and full name.
              </p>
              <div>
                <Link 
                  href="/contact" 
                  className="inline-block text-xs font-bold tracking-[0.2em] uppercase bg-black text-white dark:bg-white dark:text-black px-8 py-4 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  CONTACT SHOWROOM
                </Link>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
