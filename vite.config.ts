import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sequra_frontend_challenge/",
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "SeQura Widget",
      formats: ["umd"],
      fileName: (format) => `sequra-widget.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
