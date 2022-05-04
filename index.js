import init, { Universe } from "./rust/pkg/caleidoscopio.js";
import { Universe as JsUniverse } from "./src/universe.js";

(() => {
  document.addEventListener("DOMContentLoaded", async () => {

    if (!init || typeof init !== "function") {
      throw new Error("cannot connect with wasm");
    }

    await init();

    const $pre = document.getElementById("game_canvas");
    const universe = Universe.new();

    const $startWasmBtn = document.getElementById("start_wasm");
    $startWasmBtn.addEventListener("click", startWasm, false);

    const $startJsBtn = document.getElementById("start_js");
    $startJsBtn.addEventListener("click", startJs, false);


    function startWasm() {
      deactivateStartButton();

      const renderLoop = () => {
        console.time("wasm");
        $pre.textContent = universe.render();
        universe.tick();
        requestAnimationFrame(renderLoop);
        console.timeEnd("wasm");
      };

      requestAnimationFrame(renderLoop);
    }

    function startJs() {
      deactivateStartButton();

      const u = new JsUniverse();

      const renderLoop = () => {
        console.time("js");
        $pre.textContent = u.render();
        u.tick();
        requestAnimationFrame(renderLoop);
        console.timeEnd("js");
      };

      requestAnimationFrame(renderLoop);
    }

    function deactivateStartButton() {
      const $elList = document.getElementsByClassName("start_button");
      for (const $el of $elList) {
        $el.setAttribute("disabled", true);
      }
    }
  });
})();