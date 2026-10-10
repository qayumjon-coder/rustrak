# Rustrak

A multilingual, multi-page website for **Rustrak**, a supplier of certified special-purpose trucks (crane manipulators, fuel tankers, aerial work platforms, dump trucks and more). Built with React, Vite and Tailwind CSS.

## Features

- **Product catalog**: catalog, category and product pages
- **Cart and favorites**: state kept in React Context and persisted in `localStorage`
- **3 languages**: Russian (default), Uzbek and English via i18next
- **Company pages**: about, production, partners, suppliers, certificates, reviews, vacancies, leasing
- **Media**: photo gallery, video, promo and info pages
- **News**: list and detail pages
- **Service and repair** pages, contact page and call-request modal
- **UI**: Swiper sliders, Motion animations, Lenis smooth scrolling, back-to-top button, 404 page
- **Performance**: route-level code splitting with `React.lazy` and `Suspense`

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Routing | React Router |
| i18n | i18next, react-i18next |
| Sliders and animation | Swiper, Motion |
| Icons | Font Awesome, Lucide, React Icons |
| Linting | ESLint |

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
git clone https://github.com/qayumjon-coder/rustrak.git
cd rustrak
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the codebase with ESLint |

## Project Structure

```
.
├── public/             # images, logos, certificates, gallery assets
├── src/
│   ├── components/     # Header, Footer, modals, sliders, Cart/Favorites contexts
│   ├── locales/        # ru.json, uz.json, en.json
│   ├── pages/          # Home, Catalog, About, AboutPages, MediaPages, MiniPages ...
│   ├── App.jsx         # routes
│   ├── i18n.js         # i18next setup
│   ├── object.js       # static data (menu links, products)
│   └── main.jsx        # entry point
├── vercel.json         # SPA rewrites for Vercel
└── vite.config.js
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/catalog`, `/catalog/:category`, `/catalog/:category/:productId` | Catalog, category, product |
| `/cart`, `/favorites` | Cart, favorites |
| `/about`, `/production`, `/partners`, `/suppliers`, `/reviews`, `/cert`, `/vacancies`, `/leasing` | Company pages |
| `/photogallery`, `/video`, `/promo`, `/info` | Media |
| `/news`, `/news/:id` | News |
| `/service`, `/repair`, `/contacts` | Service, repair, contacts |

## Deployment

The project includes a `vercel.json` that rewrites all paths to `index.html`, so client-side routing works on Vercel.

## Author

Created by [qayumjon-coder](https://github.com/qayumjon-coder).
