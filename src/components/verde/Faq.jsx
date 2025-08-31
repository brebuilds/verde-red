
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Do I need to bring any furniture?", a: "No. Apartments are fully furnished and ready to go with beds, sofas, tables, and more." },
  { q: "What should I bring?", a: "Please bring your own personal items, bath towels, and bedding." },
  { q: "Are utilities and WiFi included?", a: "Yes. All utilities and high-speed WiFi are included in your monthly rent." },
  { q: "Is there a TV?", a: "Yes. A 55-inch Smart TV is included in each apartment's living area." },
  { q: "What’s included with the EOS membership?", a: "Access to all EōS locations, VIP guest privileges, a complimentary welcome workout, The Tank recovery space, and the E7 nutrition program." },
  { q: "How do I apply?", a: "Click any 'Apply Now' button on this page. You will be taken to our secure external resident portal to complete your application." },
];

export default function Faq() {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20 md:py-28 scroll-mt-20">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
      </motion.div>
      <div className="mt-10 space-y-4">
        {faqs.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05 * idx }}
          >
            <details className="group rounded-2xl border border-neutral-200 bg-white open:shadow-lg open:bg-neutral-50 transition-all duration-300">
              <summary className="cursor-pointer list-none p-5 font-medium flex items-center justify-between text-lg">
                <span>{item.q}</span>
                <ChevronDown className="transition-transform duration-300 group-open:rotate-180 text-red-600" />
              </summary>
              <div className="px-5 pb-5 text-neutral-600">{item.a}</div>
            </details>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
