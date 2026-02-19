"use client";

import { motion } from "framer-motion";
import { Compass, FileCheck, Shield, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Orientation & Conseil",
    description:
      "Bilan de compétences personnalisé, choix de filière et plan d'études adapté à votre profil et vos ambitions.",
    accent: "orange" as const,
  },
  {
    icon: FileCheck,
    title: "Inscriptions & Admissions",
    description:
      "Montage complet de votre dossier Campus France, candidatures aux universités privées et publiques à l'international.",
    accent: "blue" as const,
  },
  {
    icon: Shield,
    title: "Assistance Visa",
    description:
      "Constitution du dossier consulaire, simulation d'entretien, suivi jusqu'à l'obtention de votre visa étudiant.",
    accent: "blue" as const,
  },
  {
    icon: Home,
    title: "Accueil & Logement",
    description:
      "Aide à la recherche de logement, accueil à l'aéroport et accompagnement pour votre installation sur place.",
    accent: "orange" as const,
  },
];

const accentStyles = {
  orange: {
    iconBg: "bg-brand-orange-500/10",
    iconColor: "text-brand-orange-500",
    hoverBorder: "hover:border-brand-orange-500/30",
    line: "bg-brand-orange-500",
  },
  blue: {
    iconBg: "bg-brand-blue-500/10",
    iconColor: "text-brand-blue-500",
    hoverBorder: "hover:border-brand-blue-500/30",
    line: "bg-brand-blue-500",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      {/* Decorative arcs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-[300px] w-[300px] rounded-full border-[3px] border-brand-blue-500/5" />
        <div className="absolute -right-16 bottom-20 h-[250px] w-[250px] rounded-full border-[3px] border-brand-orange-500/5" />
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
          <span className="inline-block rounded-full bg-brand-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue-500">
            Ce que nous faisons
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Un accompagnement{" "}
            <span className="text-brand-blue-500">complet</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            De la première consultation jusqu&apos;à votre arrivée sur le
            campus, ILLIMI SUCCESS est à vos côtés à chaque étape.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const styles = accentStyles[service.accent];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.hoverBorder}`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${styles.line} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${styles.iconBg}`}
                >
                  <Icon className={`h-7 w-7 ${styles.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
