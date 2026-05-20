"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const businessWhatsApp = "+233554106732";

    let message = `*GENERAL INQUIRY - REYN ATELIER*\n\n`;
    message += `*FROM*\n`;
    message += `Name: ${formData.name}\n\n`;
    message += `*SUBJECT*\n`;
    message += `${formData.subject}\n\n`;
    message += `*MESSAGE*\n`;
    message += `${formData.message}\n\n`;
    message += `Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessWhatsApp.replace("+", "")}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;

    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 md:pt-36 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase mb-6 leading-tight">
            Contact
          </h1>
          <div className="h-[1px] w-12 bg-black dark:bg-white mx-auto opacity-30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          
          {/* Showroom Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
                01 / ACCRA BOUTIQUE & SHOWROOM
              </h2>
              <p className="text-sm font-light text-zinc-650 dark:text-zinc-400 leading-relaxed max-w-sm">
                14 Senchi St, Airport Residential Area,<br />
                Accra, Ghana
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
                02 / SHOWROOM HOURS
              </h2>
              <p className="text-sm font-light text-zinc-650 dark:text-zinc-400 leading-relaxed">
                Monday &ndash; Saturday<br />
                10:00 AM &ndash; 7:00 PM<br />
                <span className="text-zinc-450 dark:text-zinc-500 font-medium">Sunday by Appointment Only</span>
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
                03 / CONTACT DESK
              </h2>
              <p className="text-sm font-light text-zinc-650 dark:text-zinc-400 leading-relaxed space-y-2 flex flex-col">
                <span>Client Relations: +233 55 410 6732</span>
                <span>Press & Editorial: atelier@reyn.fashion</span>
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              SEND AN INQUIRY
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-medium tracking-wider text-zinc-550 dark:text-zinc-400">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-medium tracking-wider text-zinc-550 dark:text-zinc-400">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-medium tracking-wider text-zinc-550 dark:text-zinc-400">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-sm resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white dark:bg-white dark:text-black py-5 text-sm font-bold tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-70 active:scale-[0.98] duration-300 shadow-lg shadow-black/10 dark:shadow-white/5"
                >
                  {isSubmitting ? "ROUTING INQUIRY..." : "SEND TO WHATSAPP"}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
