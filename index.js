import init, { greet } from "./rust/pkg/caleidoscopio.js";

(() => {
  document.addEventListener("DOMContentLoaded", async () => {

    if (!init || typeof init !== "function") {
      throw new Error("cannot connect with wasm");
    }

    await init();

    greet("hello");
  });
})();