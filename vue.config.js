const path = require("path");
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src/components/"))
      .set("assets", path.resolve(__dirname, "./src/assets/"))
      .set("views", path.resolve(__dirname, "./src/views/"));
  },
  devServer: {
    proxy: {
      '/ajax/cateLists': {
        target: 'https://m.gome.com.cn/index.php',
        changeOrigin: true
      },
      '/search': {
        target: 'https://m.gome.com.cn/index.php',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true
      },
      "/ajax/kitchen" : {
        target : 'http://localhost:9002',
        changeOrigin: true
      },
      "/ajax/telphone": {
        target: 'http://localhost:9001',
        changeOrigin: true
      }
    }
  }
};
