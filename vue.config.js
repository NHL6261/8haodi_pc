// pc适配方案库 lib-flexible 和 postcss-px2rem 原理:将原尺寸进行10等分 1920 / 10 = 192
const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  remUnit: 192 //1920px
  // remPrecision: 5
});
module.exports = {
  devServer: {
    open: true,
    port: 8989,
    proxy: {
      "/api": {
        target: "http://192.168.1.254:9062",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
};
