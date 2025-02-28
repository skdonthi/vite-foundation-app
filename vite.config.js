import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import { createHtmlPlugin } from 'vite-plugin-html';
import vitePluginCopy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';
import sass from 'sass';

// Get the theme name from command-line argument
const theme = process.env.THEME;
if (!theme) {
    console.error('❌ No theme specified. Use `npm run build:theme-a`');
    //process.exit(1);
}

// Resolve the theme-specific directories
const themeSrc = path.resolve(__dirname, 'src', theme);
const themeDist = path.resolve(__dirname, 'dist', theme.split('-')[1]);
const templatesDir = path.resolve(themeSrc, 'html');
const jsFile = path.resolve(themeSrc, 'js/main.js');

// Get all HTML files from templates/
const htmlFiles = fs.readdirSync(templatesDir)
    .filter(file => file.endsWith('.html'))
    .reduce((entries, file) => {
        const name = path.parse(file).name;
        entries[name] = path.resolve(templatesDir, file);
        return entries;
    }, {});

export default defineConfig({
    root: themeSrc, // Set the root to the theme directory
    build: {
        outDir: themeDist, // Output to the specific theme directory
        emptyOutDir: true, // Empty the output directory before build
        rollupOptions: {
            input: { ...htmlFiles, main: jsFile }, // Include main JS file and all HTML
            output: {
                entryFileNames: 'bundle.min.js', // Bundle JS into a single minified file
                assetFileNames: 'bundle.min.js', // Hash assets for cache-busting
            },
            plugins: [terser()], // Minify JS
        },
        commonjsOptions: {
            include: [/node_modules/]
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
        postcss: {
            plugins: [autoprefixer(), cssnano()],
        },
    },
    plugins: [
        createHtmlPlugin({
            inject: { data: { theme } },
            minify: false, // Keep HTML files non-minified
        }),
        vitePluginCopy({
            targets: [
                { src: `${themeSrc}/fonts`, dest: themeDist }, // Copy fonts
                { src: `${themeSrc}/imag`, dest: themeDist }, // Copy images
                { src: `${themeSrc}/iconfont`, dest: themeDist }, // Copy iconfont
            ],
            hook: 'writeBundle',
        }),
    ],
    esbuild: {
        minify: true, // Minify the JS with esbuild
    },
    optimizeDeps: {
        exclude: ['sass']
    },
});
