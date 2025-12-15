# 🎨 AssetTown
Asset Town is a curated SVG asset library built with React, focused on character-driven illustrations, smooth animations, and a playful yet professional UX.
It allows users to browse, filter, preview, and purchase assets while showcasing strong frontend architecture and deployment practices.

🔗 Live site: https://miaroseelbo.github.io/AssetTown/

# ✨ Features
- 📁 SVG Asset Library with inline previews
- 🔍 Tag & character-based filtering
- 🎭 Animated SVG characters using CSS keyframes
- 🎨 Dynamic theming — accent color randomized per visit
- 🖱 Custom SVG cursor
- 📱 Fully responsive layout (mobile-first)
- 🧭 Client-side routing with React Router
- 🧠 SEO-ready with dynamic metadata
- 🚀 Automated deployment via GitHub Actions

# 🧰 Tech Stack

## Frontend
- React 18
- React Router
- Vite
- Tailwind CSS

## Styling & UX
- CSS Variables for dynamic color themes
- Inline SVG rendering
- Custom SVG cursor
- Responsive layout & navigation

## Animation
- CSS keyframes
- SVG transform & transform-origin

## SEO
- react-helmet-async
- Semantic HTML structure

## Deployment
- GitHub Pages
- GitHub Actions (CI/CD)

# 🧠 Architecture Overview

- Assets are defined in a JSON-based catalog
- SVGs are loaded dynamically based on asset IDs
- Filters operate entirely client-side for fast UX
- Color themes are selected on app load and injected via CSS variables
- Build output is deployed automatically to GitHub Pages

# 🚀 Getting Started
- npm install
- npm run dev

## Build for production:
- npm run build

# 📦 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions on every push to main.

# 🎯 Why This Project?

This project was built to explore:
- Use some assets I had laying around
- SVG-heavy UI design
- Animation with minimal JS
- Clean frontend architecture
- Real-world SPA deployment constraints
- SEO in a client-rendered app

# 👩‍💻 About the Author

Mia Rose Elbo
Frontend Developer · Creative Technologist
- 🌐 Portfolio: https://miaroseelbo.github.io/
- 🧠 Interests: UI/UX, front-end, interactive systems
