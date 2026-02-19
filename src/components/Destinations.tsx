"use client";

import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";

const destinations = [
  { country: "France", flag: "🇫🇷", info: "Campus France, Universités publiques & Grandes Écoles", featured: true },
  { country: "Turquie", flag: "🇹🇷", info: "Bourses Türkiye Bursları, Universités privées", featured: false },
  { country: "Canada", flag: "🇨🇦", info: "Permis d'études, Collèges & Universités", featured: true },
  { country: "Belgique", flag: "🇧🇪", info: "Universités francophones, Hautes Écoles", featured: false },
  { country: "Russie", flag: "🇷🇺", info: "Bourses gouvernementales, Médecine & Ingénierie", featured: false },
  { country: "Maroc", flag: "🇲🇦", info: "Écoles de commerce, Ingénierie & Médecine", featured: false },
  { country: "Sénégal", flag: "🇸🇳", info: "Universités régionales, Formations professionnelles", featured: false },
  { country: "Tunisie", flag: "🇹🇳", info: "Universités publiques, Écoles d'ingénieurs", featured: false },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-hero-gradient py-20 lg:py-28">
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border-[3px] border-brand-orange-500/15" />
        <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full border-[4px] border-brand-cyan-500/10" />
        <div className="absolute left-1/2 top-20 h-[200px] w-[200px] rounded-full border-[2px] border-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-400">
            <Plane className="h-3.5 w-3.5" />
            Où étudier
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Nos <span className="text-brand-orange-400">destinations</span>
          </h2>
          <p className="mt-4 text-lg text-blue-100/70">
            Partez étudier dans les meilleures universités à travers le monde
            grâce à notre réseau de partenaires.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl ${
                dest.featured ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {dest.flag}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">
                      {dest.country}
                    </h3>
                    <MapPin className="h-4 w-4 text-brand-orange-400/60" />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-blue-100/60">
                    {dest.info}
                  </p>
                </div>
              </div>
              {/* Hover glow */}
              <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-brand-orange-500/5 transition-all duration-500 group-hover:-bottom-8 group-hover:-right-8 group-hover:bg-brand-orange-500/10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <blockquote>
              <p className="text-xl font-medium italic text-white/90 sm:text-2xl">
                &quot;L&apos;éducation est l&apos;arme la plus puissante pour
                changer le monde.&quot;
              </p>
              <cite className="mt-4 block text-sm font-semibold text-brand-orange-400">
                — Nelson Mandela
              </cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
