# Vite WebGL Fluid Demo

This project is my submission for the “Vite + npm package” assignment at Kodehode.

---

## 🚀 Project Overview

This is a visually impressive, interactive web page built with [Vite](https://vitejs.dev/) and enhanced with a real-time fluid simulation effect using the [`webgl-fluid`](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) library.

-  **Built with:** Vite (modern frontend build tool)
-  **Npm package:** [`webgl-fluid`](https://www.npmjs.com/package/webgl-fluid)
-  **Deployed with:** GitHub Pages

---

## 🌈 What Does It Do?

-  Renders a mesmerizing, colorful, and interactive fluid simulation as the background.
-  The effect reacts to mouse/touch input and is highly customizable via code.
-  All config is done in JavaScript; page styles are managed with CSS.

---

## 📦 How I Used an NPM Package

-  I selected `webgl-fluid` because it creates a visually engaging effect that’s much more impressive than a typical API or date library.
-  I integrated the package using a [CDN-based ESM import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) for browser compatibility on GitHub Pages, since Vite static builds sometimes have trouble bundling certain non-standard modules.
-  The effect is initialized in `src/main.js` and styled via `src/style.css`.

---

## 🛠️ Project Structure

/
├── index.html
├── src/
│ ├── main.js
│ └── style.css

---

## ✨ How It Works

-  `index.html` includes an import map that loads `webgl-fluid` from a CDN, and sets up a `<canvas>` for rendering the simulation.
-  `src/main.js` imports `WebGLFluid` and starts the simulation with custom options.
-  `src/style.css` ensures the canvas fills the screen and gives a clean look.
-  All code is modular and easy to expand for future features or overlays.

---

## 💡 Why This Library?

-  Most students would use typical libraries like Axios, uuid, or date-fns.
-  I wanted to challenge myself and make something unique and visually memorable.
-  This project demonstrates my ability to integrate third-party npm packages, use ESM and import maps, and deploy modern JavaScript apps with Vite.

---

## 🔗 Links

-  **GitHub Repo:** [https://github.com/elm042025/Vite-Webpage/tree/gh-pages]
-  **Live Demo:** [https://elm042025.github.io/Vite-Webpage/]

---

## 🧑‍💻 Credits

-  Fluid simulation code by [Pavel Dobryakov](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation).
-  Integration and customization by [Mohammed S E].

---

_Thanks for checking it out!_
