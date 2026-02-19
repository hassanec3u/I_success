"use client";

import { motion } from "framer-motion";
import { Star, Quote, Users, Award, Globe } from "lucide-react";

const testimonials = [
  {
    name: "Amina Boubacar",
    destination: "France 🇫🇷",
    university: "Université de Lyon",
    quote:
      "Grâce à ILLIMI SUCCESS, j'ai obtenu mon visa Campus France du premier coup. Leur équipe m'a guidée pas à pas, de la constitution de mon dossier jusqu'à la préparation de l'entretien. Je suis maintenant en Master à Lyon !",
    initials: "AB",
  },
  {
    name: "Moussa Keita",
    destination: "Turquie 🇹🇷",
    university: "Istanbul University",
    quote:
      "Je ne savais pas par où commencer pour étudier à l'étranger. ILLIMI SUCCESS m'a tout expliqué et m'a aidé à décrocher une bourse Türkiye Bursları. Aujourd'hui, je vis mon rêve à Istanbul.",
    initials: "MK",
  },
  {
    name: "Fatouma Djibo",
    destination: "Canada 🇨🇦",
    university: "Université Laval",
    quote:
      "L'accompagnement est exceptionnel. Ils m'ont même aidé à trouver un logement avant mon arrivée à Québec. Je recommande à 100% à tous les étudiants nigériens qui veulent réussir.",
    initials: "FD",
  },
];

const stats = [
  { icon: Users, label: "Étudiants accompagnés", value: "500+" },
  { icon: Globe, label: "Pays de destination", value: "8+" },
  { icon: Award, label: "Taux de réussite visa", value: "95%" },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative bg-white py-20 lg:py-28">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-[350px] w-[350px] rounded-full border-[3px] border-brand-blue-500/5" />
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
          <span className="inline-block rounded-full bg-brand-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-500">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Ils ont{" "}
            <span className="text-brand-blue-500">réussi</span> avec nous
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez les histoires de nos étudiants qui vivent aujourd&apos;hui
            leur rêve à l&apos;étranger.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-brand-blue-100 bg-brand-blue-50 p-6 text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-500">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-extrabold text-brand-blue-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-brand-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <Quote className="mb-4 h-8 w-8 text-brand-orange-500/20" />
              <p className="text-sm leading-relaxed text-gray-600">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-500 text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.destination} — {t.university}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-orange-500 text-brand-orange-500"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
