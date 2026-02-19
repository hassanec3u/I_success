"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Témoignages", href: "#temoignages" },
];

const serviceLinks = [
  "Orientation & Conseil",
  "Inscriptions Campus France",
  "Assistance Visa",
  "Accueil & Logement",
];

export default function Footer() {
  return (
    <>
      {/* Contact / CTA Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-brand-blue-500 py-20 lg:py-28"
      >
        {/* Decorative */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full border-[4px] border-brand-orange-500/10" />
          <div className="absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full border-[3px] border-brand-cyan-500/10" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-white/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-brand-orange-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-400">
              Contactez-nous
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Prêt à{" "}
              <span className="text-brand-orange-400">démarrer</span> votre
              aventure ?
            </h2>
            <p className="mt-4 text-lg text-blue-100/70">
              Prenez rendez-vous dès maintenant avec l&apos;un de nos
              conseillers. L&apos;accompagnement commence par un simple appel.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+22797596060"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-orange-500/30 transition-all hover:bg-brand-orange-600 hover:shadow-2xl hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                +227 97 59 60 60
              </a>
              <a
                href="mailto:illimisuccess1@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                Envoyer un email
              </a>
            </div>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid gap-6 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-500/20">
                <MapPin className="h-6 w-6 text-brand-orange-400" />
              </div>
              <h3 className="font-bold text-white">Notre adresse</h3>
              <p className="mt-2 text-sm text-blue-100/60">
                Quartier Yantala, face camping touristique, Niamey, Niger
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan-500/20">
                <Clock className="h-6 w-6 text-brand-cyan-400" />
              </div>
              <h3 className="font-bold text-white">Horaires</h3>
              <p className="mt-2 text-sm text-blue-100/60">
                Lundi – Vendredi : 8h – 18h
                <br />
                Samedi : 9h – 13h
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-500/20">
                <MessageCircle className="h-6 w-6 text-brand-orange-400" />
              </div>
              <h3 className="font-bold text-white">Réseaux sociaux</h3>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href="https://wa.me/22797596060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#25D366] hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/illimisuccess/?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-brand-orange-500 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/illimi_success/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-brand-orange-500 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-blue-700 bg-brand-blue-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#accueil" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="I-Success"
                  width={160}
                  height={48}
                  className="h-10 w-auto brightness-0 invert"
                />
              </a>
              <p className="mt-4 text-sm leading-relaxed text-blue-200/50">
                Votre partenaire de confiance pour réussir vos études à
                l&apos;étranger depuis le Niger.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-orange-400">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 text-sm text-blue-200/60 transition-colors hover:text-white"
                    >
                      <ArrowRight className="h-3 w-3 text-brand-orange-500/50" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-orange-400">
                Nos Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <span className="flex items-center gap-1.5 text-sm text-blue-200/60">
                      <ArrowRight className="h-3 w-3 text-brand-orange-500/50" />
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-orange-400">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-blue-200/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-400" />
                  Quartier Yantala, Niamey, Niger
                </li>
                <li>
                  <a
                    href="tel:+22797596060"
                    className="flex items-center gap-2.5 text-sm text-blue-200/60 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-brand-orange-400" />
                    +227 97 59 60 60
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:illimisuccess1@gmail.com"
                    className="flex items-center gap-2.5 text-sm text-blue-200/60 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-brand-orange-400" />
                    illimisuccess1@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-blue-700 pt-8 sm:flex-row">
            <p className="text-xs text-blue-200/40">
              © {new Date().getFullYear()} I-Success. Tous droits
              réservés.
            </p>
            <p className="text-xs text-blue-200/40">
              Fait avec ❤️ à Niamey, Niger
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
