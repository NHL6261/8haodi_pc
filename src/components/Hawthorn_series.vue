<template>
  <div id="hawthorn_content">
    <!-- 左侧区域 -->
    <div class="left_content">
      <div class="left_img">
        <div class="shanzha_one">
          <img src="../assets/images/山楂1.png" alt />
        </div>
        <div class="shanzha_two">
          <img src="../assets/images/山楂2.png" alt />
        </div>
      </div>
      <div class="right_img">
        <img src="../assets/images/山楂3.png" alt />
      </div>
    </div>
    <!-- 右侧区域 -->
    <div class="right_content">
      <!-- header图片 -->
      <div class="header_img">
        <img src="../assets/images/山楂标题.png" alt />
      </div>
      <!-- 文本区域 -->
      <div class="bottom_text">
        <p>好味道源自好原料,用心挑选个大饱满山楂,果肉细腻无渣;山楂系列产品经十几道制作工艺制作而成,只为保留纯正口感;酸甜可口,儿时的味道油然而生;唇齿留香,代代传承的味蕾记忆。</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#hawthorn_content {
  width: 100%;
  height: 827px;
  padding: 208px 202px 189px 350px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left_content {
  width: 557px;
  height: 430px;
  display: flex;
  justify-content: space-between;
}
.left_content > .left_img {
  width: 180px;
  height: 430px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.left_content > .left_img .shanzha_one >img{
  width: 180px;
  height: 180px;
}

.left_content > .left_img .shanzha_two >img{
  width: 180px;
  height: 180px;
}
.left_content >.right_img >img{
  width: 300px;
  height: 430px;
}
.right_content {
  width: 812px;
}
.right_content > .header_img >img{
  width: 812px;
  height: 158px;
}
.bottom_text > p {
  width: 514px;
  height: 194px;
  font-size: 29px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 42px;
  margin: 20px 0 0 98px;
  text-indent: 25px;
  letter-spacing: 5px;
}
</style>
