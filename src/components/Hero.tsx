"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Inscription Campus France",
  "Assistance Visa",
  "Logement garanti",
  "Assurance voyage",
];

const flags = ["🇫🇷", "🇹🇷", "🇨🇦", "🇧🇪", "🇷🇺", "🇲🇦", "🇸🇳", "🇹🇳"];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-hero-gradient pt-20"
    >
      {/* Decorative arcs — matching the brand style */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large orange arc top-right */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border-[4px] border-brand-orange-500/20" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border-[3px] border-brand-orange-500/10" />
        {/* Cyan arc bottom-left */}
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full border-[4px] border-brand-cyan-500/15" />
        <div className="absolute -bottom-28 -left-28 h-[450px] w-[450px] rounded-full border-[3px] border-brand-cyan-500/10" />
        {/* Small orange accent */}
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-brand-orange-500/40" />
        <div className="absolute left-1/3 bottom-1/4 h-2 w-2 rounded-full bg-brand-cyan-500/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-12 lg:py-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange-500/30 bg-brand-orange-500/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange-500" />
              <span className="text-sm font-semibold text-brand-orange-300">
                Rentrée 2025-2026 — Inscriptions ouvertes
              </span>
            </motion.div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Étudiez dans les{" "}
              <span className="text-brand-orange-400">
                meilleures universités
              </span>{" "}
              du monde depuis le Niger.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/80">
              Inscription, Orientation, Visa, Logement.{" "}
              <strong className="text-white">I-Success</strong> vous
              accompagne de Niamey jusqu&apos;à votre campus en France,
              Turquie, Canada et plus encore.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-blue-100/90"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-orange-500/30 transition-all hover:bg-brand-orange-600 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Démarrer mon dossier
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+22797596060"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                +227 97 59 60 60
              </a>
            </div>

            {/* Country flags */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200/60">
                Nos destinations
              </span>
              <div className="flex gap-2">
                {flags.map((flag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-base backdrop-blur-sm"
                  >
                    {flag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Main image — full width, natural landscape ratio */}
              <div className="relative w-full overflow-hidden rounded-3xl border-2 border-white/15 shadow-2xl">
                <Image
                  src="/hero/photo_hero.jpg"
                  alt="Étudiants accompagnés par I-Success"
                  width={960}
                  height={501}
                  className="h-auto w-full"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Badges row below the image */}
              <div className="flex w-full items-center justify-between gap-3">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="rounded-2xl bg-white px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🇫🇷</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">France</p>
                      <p className="text-[11px] text-gray-500">Campus France</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="rounded-2xl bg-brand-orange-500 px-5 py-3 shadow-xl shadow-brand-orange-500/30"
                >
                  <p className="text-2xl font-extrabold text-white">500+</p>
                  <p className="text-xs font-medium text-orange-100">
                    Étudiants accompagnés
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: "easeInOut" }}
                  className="rounded-2xl bg-white px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🇨🇦</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Canada</p>
                      <p className="text-[11px] text-gray-500">Permis d&apos;études</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="h-16 w-full sm:h-20"
        >
          <path
            d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
