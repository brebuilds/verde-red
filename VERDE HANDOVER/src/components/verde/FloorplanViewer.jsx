
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const FLOORPLAN_IMG = "https://yesadu.com/3-bedroom-adu-floor-plan-1000-sq-ft/"; // Placeholder 3BR/2BA floor plan

export default function FloorplanViewer() {
  const [scale, setScale] = useState(1);
  const zoom = (d) => setScale((s) => Math.min(3, Math.max(0.75, s + d)));

  return (
    <section id="floorplan" className="max-w-7xl mx-auto px-6 py-20 md:py-28 scroll-mt-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold">3BR / 2BA Floorplan</h2>
            <p className="mt-2 text-neutral-600">Spacious, modern, and designed for shared living.</p>
        </div>
        <div className="flex gap-2 p-1 bg-neutral-100 rounded-xl">
          <button onClick={() => zoom(-0.25)} className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-white hover:text-red-600 transition-colors"><ZoomOut size={20} /></button>
          <button onClick={() => zoom(+0.25)} className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-white hover:text-red-600 transition-colors"><ZoomIn size={20} /></button>
          <button onClick={() => setScale(1)} className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-white hover:text-red-600 transition-colors"><RotateCcw size={20} /></button>
        </div>
      </div>
      <div className="mt-8 overflow-auto rounded-2xl border-4 border-neutral-100 bg-white">
        <motion.div
            className="w-full h-full"
            animate={{ scale }}
            style={{ transformOrigin: 'center' }}
        >
          <img src={FLOORPLAN_IMG} alt="3BR / 2BA Floorplan" className="max-w-none w-full" />
        </motion.div>
      </div>
    </section>
  );
}
