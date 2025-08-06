import WebGLFluid from "webgl-fluid";
// import Typed from "typed.js";
//! ----- background that is just pure eye candy ----- //
WebGLFluid(document.querySelector("canvas"), {
   TRIGGER: "hover", // can be "click"
   IMMEDIATE: true, // auto on initialization
   AUTO: false, // Whether to enable auto-splatting
   INTERVAL: 3000, // time delay in milliseconds between splatting
   SIM_RESOLUTION: 256,
   DYE_RESOLUTION: 1024,
   CAPTURE_RESOLUTION: 256,
   DENSITY_DISSIPATION: 1,
   VELOCITY_DISSIPATION: 0.2,
   PRESSURE: 0.2,
   PRESSURE_ITERATIONS: 10,
   CURL: 30,
   SPLAT_RADIUS: 0.1,
   SPLAT_FORCE: 6000,
   SPLAT_COUNT: Number.parseInt(Math.random() * 20) + 5,
   SHADING: true,
   COLORFUL: true,
   COLOR_UPDATE_SPEED: 10,
   PAUSED: false,
   BACK_COLOR: { r: 0, g: 0, b: 0 },
   TRANSPARENT: false,
   BLOOM: false, // if true = background color will whitened by 13 on each RGB color | false = pure color
   BLOOM_ITERATIONS: 8,
   BLOOM_RESOLUTION: 256,
   BLOOM_INTENSITY: 0.8,
   BLOOM_THRESHOLD: 0.6,
   BLOOM_SOFT_KNEE: 0.7,
   SUNRAYS: true,
   SUNRAYS_RESOLUTION: 196,
   SUNRAYS_WEIGHT: 1.0,
});
//! ----- npm package that renders text in a beautiful way ----- //
// import Typed from "typed.js";
window.addEventListener("DOMContentLoaded", () => {
   const options = {
      strings: [
         "Welcome to My Fluid WebGL Demo!",
         "Check out the cool typing effect.",
         "Built with Vite + npm + ❤️",
         " Feel free to hover the cursor for as long as you want 😉",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
   };

   new Typed("#typed-output", options);
});
