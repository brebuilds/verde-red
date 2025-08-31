
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Wifi, Tv, Zap, Dumbbell } from 'lucide-react';

const APPLY_URL = "https://your-resident-software-apply-link";

const tiers = [
  { 
    name: "Private Room - Queen Bed", 
    price: 800, 
    perks: ["All Utilities", "WiFi", '55" TV', "EOS Gym Included"], 
    icon: <Bed size={24} />,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/932b44d0a_VG-SingleRoom.png"
  },
  { 
    name: "Shared Room - Twin Bed", 
    price: 500, 
    perks: ["All Utilities", "WiFi", '55" TV', "EOS Gym Included"], 
    icon: <Bed size={24} />,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a5f429167_VG-SharedBedroom-Left.png"
  },
  { 
    name: "Shared Room - Twin Loft", 
    price: 500, 
    perks: ["All Utilities", "WiFi", '55" Smart TV', "EOS Gym Included"], 
    icon: <Bed size={24} />,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2c049b396_VG-Bunks.png"
  },
];

const perkIcons = {
  "All Utilities": <Zap size={14} className="text-red-600" />,
  "WiFi": <Wifi size={14} className="text-red-600" />,
  '55" Smart TV': <Tv size={14} className="text-red-600" />,
  "EOS Gym Included": <Dumbbell size={14} className="text-red-600" />,
};

export default function LivingOptions() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section id="living-options" className="max-w-7xl mx-auto px-6 py-20 md:py-28 scroll-mt-20">
      <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true, amount: 0.3 }} transition={{duration: 0.5}}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">Choose Your Setup</h2>
        <p className="mt-4 text-lg text-neutral-600 text-center max-w-3xl mx-auto">Per-room leasing, all-inclusive pricing. Everything you need, just steps from campus.</p>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300"
            onMouseEnter={() => setHoveredImage(t.image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <AnimatePresence mode="wait">
              {hoveredImage === t.image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="absolute inset-0 z-0"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ 
                      backgroundImage: `url(${t.image})`,
                      willChange: 'opacity'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-white/85" />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="bg-red-50 text-red-600 p-3 rounded-xl">{t.icon}</div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
              </div>
              <div className="mt-5 text-5xl font-bold">
                ${t.price}
                <span className="text-lg font-normal text-neutral-500">/mo</span>
              </div>
              
              {/* Room Image */}
              <div className="mt-6 mb-6">
                <img 
                  src={t.image} 
                  alt={`${t.name} room view`}
                  className="w-full h-32 object-cover rounded-lg border border-neutral-200"
                />
              </div>
              
              <div className="mt-6 space-y-3">
                {t.perks.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    {perkIcons[p]}
                    <span className="text-sm font-medium text-neutral-700">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a 
                  href={APPLY_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center block rounded-xl px-4 py-3 bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
