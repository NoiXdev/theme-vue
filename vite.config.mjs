import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from "@tailwindcss/vite";
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [tailwindcss(), vue(), dts()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        open: '/playground/index.html'
    },
    build: {
        outDir: 'dist',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'NoixThemeVue',
            fileName: (format) => `noix-theme-vue.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})