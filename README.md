# ILLIMI SUCCESS — Landing Page

Landing page pour **ILLIMI SUCCESS**, agence d'accompagnement étudiant basée à Niamey, Niger.

## À propos

ILLIMI SUCCESS accompagne les étudiants nigériens dans leurs démarches pour étudier à l'étranger : orientation, inscriptions (Campus France, universités privées), assistance visa, accueil et logement.

### Destinations

🇫🇷 France · 🇹🇷 Turquie · 🇨🇦 Canada · 🇧🇪 Belgique · 🇷🇺 Russie · 🇲🇦 Maroc · 🇸🇳 Sénégal · 🇹🇳 Tunisie

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 3
- **Animations** : Framer Motion
- **Icônes** : Lucide React

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Structure du projet

```
src/
├── app/
│   ├── globals.css       # Design system et utilitaires CSS
│   ├── layout.tsx        # Layout principal (font Inter, metadata SEO)
│   └── page.tsx          # Page d'accueil (one page)
└── components/
    ├── Header.tsx        # Header sticky avec navigation responsive
    ├── Hero.tsx          # Section héro avec CTA
    ├── Services.tsx      # Grille de 4 services
    ├── Destinations.tsx  # 8 pays partenaires en bento grid
    ├── Testimonials.tsx  # Témoignages + statistiques
    └── Footer.tsx        # Contact, infos et footer
```

## Contact

- **Adresse** : Quartier Yantala, face camping touristique, Niamey, Niger
- **Téléphone** : +227 97 59 60 60
- **Email** : illimisuccess1@gmail.com
