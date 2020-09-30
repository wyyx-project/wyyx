const path = require('path')

module.exports = {
    // 解决路径长的问题
    chainWebpack(config) {
        // 因为这个路径是最开始的，所以这样设置路径
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src/'))
            .set('@a', path.resolve(__dirname, './src/assets'))
            .set('@c', path.resolve(__dirname, './src/components/'))
            .set('@v', path.resolve(__dirname, './src/views'))
            .set('@u', path.resolve(__dirname, './src/utils'))
    },

    // 解决跨域的问题
    devServer: {
        // 代理的地址
        // 反向代理：帮它代理完重新返回
        proxy: {
            // 暗号：当在浏览器地址栏输入/api字符串的时候，http-proxy-middlerware会将请求拦截下来
            '/api': {
                target: 'https://miniapp.you.163.com', // target host
                changeOrigin: true,//二级域名 
                pathRewrite: {//转发地址
                    '^/api': '',// 将/api转化为''中的地址
                }  
            }
        }
    }
}

