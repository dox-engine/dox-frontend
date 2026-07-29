/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Configuring resolve object for resolving
// Route aliases in project to shorten the
// Path and importing modules using relative path
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        tailwindcss(),
    ],
    test: {
        globals: true,
    },
    resolve: {
        alias: {
            "@/client": path.resolve(__dirname, "./src/client"),
        },
    },
});