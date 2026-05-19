import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-[0.2em] mb-6">REYN</h2>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              A curated selection of luxury pieces for the modern wardrobe. Designed with purpose, crafted with intention.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium tracking-widest mb-6">EXPLORE</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link href="/#collection" className="hover:text-black dark:hover:text-white transition-colors">
                  The Collection
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-black dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest mb-6">SUPPORT</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} REYN FASHION STORE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
              INSTAGRAM
            </Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
              PINTEREST
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
