import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: "/sequra_frontend_challenge/",
    define: { "process.env": { ...loadEnv(mode, process.cwd()) } },
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
};
