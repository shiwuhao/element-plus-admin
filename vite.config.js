/* eslint-disable */
import legacyPlugin from '@vitejs/plugin-legacy';
import {viteMockServe} from 'vite-plugin-mock';
import * as path from 'path';
import vuePlugin from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
// @see https://cn.vitejs.dev/config/
export default ({
                  command,
                  mode
                }) => {
  let rollupOptions = {};


  let optimizeDeps = {};


  let alias = {
    '@': path.resolve(__dirname, './src'),
    'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
  }

  let proxy = {
    // '/backend': {
    //   "target": "http://localhost:8090",
    //   "changeOrigin": true
    // },
  }

  let define = {
    'process.env.NODE_ENV': '"development"',
  }

  let esbuild = {
    "compilerOptions": {
      "target": "ES2019"
    }
  }

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias,
      extensions: ['.vue', '.js']
    },
    define: define,
    server: {
      // 代理
      proxy,
    },
    build: {
      target: 'esnext',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'build', // 产出目录
      rollupOptions,
    },
    esbuild,
    optimizeDeps,
    plugins: [
      legacyPlugin({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        injectCode: `
        import { setupProdMockServer } from './mock/index';
        setupProdMockServer();
      `,
      }),
      vuePlugin(),
      viteSvgIcons({
        // 配置路劲在你的src里的svg存放文件
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
        scss: {
          additionalData:  '@import "./src/styles/common.scss";'
        }
      }
    },
  }
}