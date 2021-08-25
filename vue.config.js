const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  css: {
    extract: false,//注释css热更新生效
    sourceMap: false,//开启css source maps
    //css预设器配置项
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/common.scss";`//附加数据
      }
    }
  },
  devServer: {
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_API_URL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/mock'
    //     }
    //   }
    // }
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
};
