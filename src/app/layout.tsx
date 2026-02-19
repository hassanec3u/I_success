import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "I-Success | Accompagnement Étudiant au Niger",
  description:
    "I-Success accompagne les étudiants du Niger vers les meilleures universités du monde. Inscription, Orientation, Visa, Logement — de Niamey jusqu'à votre campus.",
  keywords: [
    "études à l'étranger",
    "Niger",
    "Campus France",
    "visa étudiant",
    "Niamey",
    "université",
    "accompagnement étudiant",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
