import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    glsl({
      include: /\.(glsl|wgsl|vert|frag|vs|fs)$/i, // {FilterPattern | undefined} - File paths/extensions to import
    }),
  ],
});
