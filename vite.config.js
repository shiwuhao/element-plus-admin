import path from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {viteMockServe} from "vite-plugin-mock";


export default defineConfig(({command}) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
      extensions: ['.vue', '.js'],
    },
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        injectCode: `
        import { setupProdMockServer } from './mock/index.js';
        setupProdMockServer();
      `,
      }),
    ],
  }
});
