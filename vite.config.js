/* @REF https://vitejs.dev/config/#conditional-config */
import { defineConfig } from "vite";

/* github pages用 */
const outDir = "docs";
const base = "/caleidoscopio/";
const config = {
  base,
  build: {
    outDir,
  }
};
export default defineConfig(config);