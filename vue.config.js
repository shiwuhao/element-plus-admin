const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
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
