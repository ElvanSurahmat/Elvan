# Elvan Portfolio

A personal portfolio web app built with React, Vite, Tailwind CSS, and Three.js. The project showcases a modern developer landing page with interactive UI sections, 3D visuals, contact integration, and animated project previews.

## Key Features

- Responsive portfolio layout with navigation, hero, about, projects, experience, contact, and footer sections.
- 3D hero scene built with `@react-three/fiber`, `@react-three/drei`, and `maath`.
- Animated project cards with hover preview images following the pointer.
- Contact form integrated with EmailJS for sending messages.
- Interactive about section with floating cards, tech stack display, and a globe component.
- Timeline experience section with reusable data-driven components.
- Particle background and animated motion effects throughout the UI.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Three Fiber
- Drei
- EmailJS Browser SDK
- Motion
- Maath
- Three.js

## Project Structure

- `src/App.jsx` — main page layout and section order
- `src/sections/` — page sections like `Hero`, `About`, `Projects`, `Experiences`, `Contact`, and `Footer`
- `src/components/` — reusable UI and animation components
- `src/constants/index.js` — project, social, and experience data
- `public/assets/` — image, logo, and project asset files

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser at the local URL shown in the terminal.

## Build and Preview

- Build the production bundle:

  ```bash
  npm run build
  ```

- Preview the production build locally:

  ```bash
   npm run preview
  ```

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create an optimized production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint across the project

## Configuration Notes

- The contact form uses EmailJS credentials defined in `src/sections/Contact.jsx`.
- Replace the EmailJS `service`, `template`, and `publicKey` values with your own account details before deploying.
- Project cards and experience items are defined in `src/constants/index.js`, making it easy to update content.

## Customization

- Update section text and profile details in the section components under `src/sections/`.
- Add or modify projects by editing `myProjects` in `src/constants/index.js`.
- Adjust 3D hero and animation settings in `src/sections/Hero.jsx` and the related components.

## Author

Created by Elvan Surahmat as a developer portfolio showcase.
