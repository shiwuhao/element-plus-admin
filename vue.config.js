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
    proxy: {
      '/backend': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/mock'
        // }
      }
    },
    // before:require('./mock/server')
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
