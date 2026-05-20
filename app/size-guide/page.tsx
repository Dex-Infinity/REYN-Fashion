"use client";

import { useState } from "react";


const MEASUREMENTS = {
  CM: {
    dresses: [
      { size: "S", bust: "84-88", waist: "66-70", hips: "90-94" },
      { size: "M", bust: "89-93", waist: "71-75", hips: "95-99" },
      { size: "L", bust: "94-98", waist: "76-80", hips: "100-104" },
      { size: "XL", bust: "99-103", waist: "81-85", hips: "105-109" },
    ],
    tops: [
      { size: "S", bust: "88-92", shoulder: "38", sleeve: "59" },
      { size: "M", bust: "93-97", shoulder: "39", sleeve: "60" },
      { size: "L", bust: "98-102", shoulder: "40", sleeve: "61" },
      { size: "XL", bust: "103-107", shoulder: "41", sleeve: "62" },
    ],
    bottoms: [
      { size: "S", waist: "64-68", hips: "90-94", inseam: "82" },
      { size: "M", waist: "69-73", hips: "95-99", inseam: "83" },
      { size: "L", waist: "74-78", hips: "100-104", inseam: "84" },
      { size: "XL", waist: "79-83", hips: "105-109", inseam: "85" },
    ],
  },
  IN: {
    dresses: [
      { size: "S", bust: "33-34.5", waist: "26-27.5", hips: "35.5-37" },
      { size: "M", bust: "35-36.5", waist: "28-29.5", hips: "37.5-39" },
      { size: "L", bust: "37-38.5", waist: "30-31.5", hips: "39.5-41" },
      { size: "XL", bust: "39-40.5", waist: "32-33.5", hips: "41.5-43" },
    ],
    tops: [
      { size: "S", bust: "34.5-36", shoulder: "15", sleeve: "23" },
      { size: "M", bust: "36.5-38", shoulder: "15.5", sleeve: "23.5" },
      { size: "L", bust: "38.5-40", shoulder: "16", sleeve: "24" },
      { size: "XL", bust: "40.5-42", shoulder: "16.5", sleeve: "24.5" },
    ],
    bottoms: [
      { size: "S", waist: "25-26.5", hips: "35.5-37", inseam: "32.2" },
      { size: "M", waist: "27-28.5", hips: "37.5-39", inseam: "32.6" },
      { size: "L", waist: "29-30.5", hips: "39.5-41", inseam: "33" },
      { size: "XL", waist: "31-32.5", hips: "41.5-43", inseam: "33.4" },
    ],
  },
};

export default function SizeGuidePage() {
  const [unit, setUnit] = useState<"CM" | "IN">("CM");

  const activeSpecs = MEASUREMENTS[unit];

  return (
    <div className="pt-28 pb-24 md:pt-36 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase mb-6 leading-tight">
            Size Guide
          </h1>
          <div className="h-[1px] w-12 bg-black dark:bg-white mx-auto mb-6 opacity-30" />
          <p className="text-xs md:text-sm font-light tracking-widest text-zinc-500 dark:text-zinc-400 uppercase leading-relaxed max-w-lg mx-auto">
            Use this interactive guide to select the size that best aligns with your silhouette. 
          </p>
        </div>

        {/* Toggle metric units */}
        <div className="flex justify-center mb-16">
          <div className="border border-zinc-200 dark:border-zinc-800 p-1 flex">
            <button
              onClick={() => setUnit("CM")}
              className={`px-8 py-2 text-xs font-bold tracking-widest transition-colors duration-300 ${
                unit === "CM"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-transparent text-zinc-400 hover:text-black dark:hover:text-white"
              }`}
            >
              CENTIMETERS (CM)
            </button>
            <button
              onClick={() => setUnit("IN")}
              className={`px-8 py-2 text-xs font-bold tracking-widest transition-colors duration-300 ${
                unit === "IN"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-transparent text-zinc-400 hover:text-black dark:hover:text-white"
              }`}
            >
              INCHES (IN)
            </button>
          </div>
        </div>

        {/* Size Charts */}
        <div className="space-y-20">
          
          {/* Dresses */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 mb-4">
              01 / DRESSES & SLIPS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-450 uppercase text-[10px] font-bold tracking-widest">
                    <th className="py-4 font-bold">SIZE</th>
                    <th className="py-4 font-bold">BUST ({unit})</th>
                    <th className="py-4 font-bold">WAIST ({unit})</th>
                    <th className="py-4 font-bold">HIPS ({unit})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900 font-light text-zinc-650 dark:text-zinc-400">
                  {activeSpecs.dresses.map((spec) => (
                    <tr key={spec.size} className="hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors">
                      <td className="py-5 font-bold text-black dark:text-white">{spec.size}</td>
                      <td className="py-5">{spec.bust}</td>
                      <td className="py-5">{spec.waist}</td>
                      <td className="py-5">{spec.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tops */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 mb-4">
              02 / TOPS & COATS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-450 uppercase text-[10px] font-bold tracking-widest">
                    <th className="py-4 font-bold">SIZE</th>
                    <th className="py-4 font-bold">BUST ({unit})</th>
                    <th className="py-4 font-bold">SHOULDER ({unit})</th>
                    <th className="py-4 font-bold">SLEEVE LENGTH ({unit})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900 font-light text-zinc-650 dark:text-zinc-400">
                  {activeSpecs.tops.map((spec) => (
                    <tr key={spec.size} className="hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors">
                      <td className="py-5 font-bold text-black dark:text-white">{spec.size}</td>
                      <td className="py-5">{spec.bust}</td>
                      <td className="py-5">{spec.shoulder}</td>
                      <td className="py-5">{spec.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottoms */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 mb-4">
              03 / TROUSERS & BOTTOMS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-450 uppercase text-[10px] font-bold tracking-widest">
                    <th className="py-4 font-bold">SIZE</th>
                    <th className="py-4 font-bold">WAIST ({unit})</th>
                    <th className="py-4 font-bold">HIPS ({unit})</th>
                    <th className="py-4 font-bold">INSEAM ({unit})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900 font-light text-zinc-650 dark:text-zinc-400">
                  {activeSpecs.bottoms.map((spec) => (
                    <tr key={spec.size} className="hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors">
                      <td className="py-5 font-bold text-black dark:text-white">{spec.size}</td>
                      <td className="py-5">{spec.waist}</td>
                      <td className="py-5">{spec.hips}</td>
                      <td className="py-5">{spec.inseam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* Note info */}
        <div className="mt-16 bg-zinc-50 dark:bg-zinc-900/50 p-8 text-center text-xs tracking-widest text-zinc-500 dark:text-zinc-450 uppercase leading-relaxed max-w-2xl mx-auto">
          Every silhouette is tailored differently depending on cut and textiles. 
          For exact personalized recommendations, please contact our showroom concierge desk with your dimensions.
        </div>

      </div>
    </div>
  );
}
