
import React from 'react';
import { motion } from 'framer-motion';

const APPLY_URL = "https://your-resident-software-apply-link";
const HERO_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dfe32c12_Hero.jpg";

const previewImages = [
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ce5055f9f_VG-SingleRoom.png",
    label: "Private + Shared Rooms"
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/db32f5c1e_VG-LivingArea-Wide.png",
    label: "Furnished Living Spaces"
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3d410142_VG-KitchenCloseUp.png",
    label: "Move-in Ready"
  },
  {
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b27c6d2c_VG-Outdoors.png",
    label: "Community Areas"
  }
];

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] md:h-screen bg-neutral-900 text-white flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${HERO_IMG})`, backgroundAttachment: 'fixed' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Main Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-shadow"
            >
              Your Sanctuary Away From Home
              <br />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-4 text-lg md:text-xl text-neutral-200 max-w-xl mx-auto lg:mx-0"
            >
              Thoughtfully curated 3-bedroom apartments designed with intention for SEU Arizona students. Nestled directly across from campus, where community meets comfort in perfect harmony.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8"
            >
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-8 py-4 bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-400"
              >
                Apply Now
              </a>
            </motion.div>
          </div>

          {/* Right Column: Preview Images */}
          <div className="hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-4"
            >
              {previewImages.map((img, i) => (
                <motion.div
                  key={img.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={img.src} 
                      alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-medium text-sm">{img.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
