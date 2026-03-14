import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from "path";

// https://vite.dev/config/
export default defineConfig({
    base: '/portfolioreact/',
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["import", "legacy-js-api"],
                additionalData: `
                    @import "@/styles/_fonts.scss";
                    @import "@/styles/_vars.scss";
                    @import "@/styles/_mixins.scss";
                    @import "@/styles/_reset.scss";
                    @import "@/styles/_utils.scss";
                `,
            },
        },
    },
    build: {
        outDir: 'dist'
    }
});
