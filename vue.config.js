const path = require('path')
module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src/'))
      .set('@c', path.resolve(__dirname, './src/components'))
      .set('@u', path.resolve(__dirname, './src/utils'))
      .set('@v', path.resolve(__dirname, './src/views'))
      .set('@a', path.resolve(__dirname, './src/assets'))
      .set('@s', path.resolve(__dirname, '/src/store'))
      .set('@r', path.resolve(__dirname, '/src/router'))

  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // /api/mmdb/movie/v2/list/hot.json -> /mmdb/movie/v2/list/hot.json
        }
      } 
    }
  },
}