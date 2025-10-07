import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
//
// https://vite.dev/config/
export default (mode: string) => {
    return defineConfig({
        plugins: [react()],
        css: {
            postcss: {
                plugins: [tailwindcss()],
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    });
};
