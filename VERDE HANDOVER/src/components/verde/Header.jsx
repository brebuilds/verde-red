
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const APPLY_URL = "https://your-resident-software-apply-link";

const navLinks = [
  { title: "Living Options", href: "#living-options" },
  { title: "Community", href: "#community" },
  { title: "Gallery", href: "#gallery" },
  { title: "Floorplan", href: "#floorplan" },
  { title: "Amenities", href: "#amenities" },
  { title: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-neutral-900">
            Verde Gardens
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
             <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block rounded-xl px-4 py-2 bg-red-600 text-white text-sm font-medium shadow-sm hover:shadow-lg hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Apply Now
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeMenu} className="absolute top-4 right-4 p-2 text-neutral-600">
                <X size={24} />
              </button>
              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a key={link.title} href={link.href} onClick={closeMenu} className="text-lg font-medium text-neutral-700 hover:text-red-600">
                    {link.title}
                  </a>
                ))}
                 <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full text-center rounded-xl px-4 py-2 bg-red-600 text-white font-medium shadow-sm hover:shadow-lg"
                 >
                    Apply Now
                 </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
