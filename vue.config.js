// pc适配方案库lib-flexible 和 postcss-px2rem 原理:将原尺寸进行10等分 1920 / 10 = 192
const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  remUnit: 192 //1920px
  // remPrecision: 5
});
module.exports = {
  devServer: {
    open: true,
    port: 8888
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
};
