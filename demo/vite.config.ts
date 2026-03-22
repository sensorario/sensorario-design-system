import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@design-system": path.resolve(__dirname, ".."),
        },
    },
    server: {
        fs: {
            allow: [path.resolve(__dirname, "..")],
        },
    },
});
