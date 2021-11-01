import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {viteMockServe} from "vite-plugin-mock";
import viteSvgIcons from 'vite-plugin-svg-icons';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig(({command}) => {
  return {
    base: '/element-plus-admin',
    resolve: {
      alias: {
        '@': pathResolve('src') + '/',
        "~/": pathResolve('src') + '/',
      },
      extensions: ['.vue', '.js'],
    },
    define: {
      'process.env': {},
      'process.platform': null,
      'process.version': null,
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
      viteSvgIcons({
        iconDirs: [pathResolve('src/assets/svg')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve' || command === 'build',
        injectCode: `
        import { setupProdMockServer } from '/mock/index.js';
        setupProdMockServer();
      `,
      }),
    ],
  }
});
