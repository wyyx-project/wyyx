const path = require('path')
module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src/'))
      .set('@c', path.resolve(__dirname, './src/components/'))
      .set('@u', path.resolve(__dirname, './src/utils'))
      .set('@v', path.resolve(__dirname, './src/views'))
      .set('@a', path.resolve(__dirname, './src/assets'))
      .set('@p', path.resolve(__dirname, './src/api/'))
  },

  // development server
  devServer: {
    // 反向代理: http-proxy-middleware
    proxy: {
      // 暗号: 当在浏览器地址栏里输入/api字符串的时候，http-proxy-middleware会将请求拦下来
      '/miniapp': {
        target: 'https://miniapp.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/miniapp': '' // /api/mmdb/movie/v2/list/hot.json -> /mmdb/movie/v2/list/hot.json
        },
      },
      '/api': {
        // target: 'https://wx.maoyan.com',
        target: 'https://miniapp.you.163.com', // target host
        changeOrigin: true, //二级域名 
        pathRewrite: { //转发地址
          '^/api': '', // 将/api转化为''中的地址
        }
      }
    }
  }
}
