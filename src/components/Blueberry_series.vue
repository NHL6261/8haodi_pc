<template>
  <div id="blueberry_container">
    <!-- One hundred and sixty-three -->
    <div class="sixty_three"></div>
    <div class="blueberry_main">
      <div class="top_img">
        <img src="../assets/images/蓝莓标题.png" alt />
      </div>
      <div class="bottom_text">
        <p>源自大兴安岭的野生蓝莓;匠心秘制,蜂蜜滋润果肉,入口酸甜美味。蓝莓黑木耳果糕,甄选新鲜木耳,补充人体每日所需微量元素;蓝莓与黑木耳的互相结合,健康美味随心享,分享快乐,分享甜蜜。</p>
      </div>
    </div>
    <div class="blueberry_img">
      <div class="left_img">
        <div class="left_top_img">
          <img class="size" src="../assets/images/蓝莓1.png" alt />
        </div>
        <div class="left_bottom_img">
          <img class="change" src="../assets/images/蓝莓3.png" alt />
        </div>
      </div>
      <div class="left_img">
        <div class="left_top_img">
          <img class="imgsize" src="../assets/images/蓝莓2.png" alt />
        </div>
        <div class="left_bottom_img">
          <img src="../assets/images/蓝莓4.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#blueberry_container {
  width: 100%;
  height: 800px;
  background-color: #444444;
  position: relative;
}
.blueberry_main {
  width: 100%;
  height: 637px;
  padding: 0 351px 163px 93px;
  box-sizing: border-box;
}
.blueberry_main > .top_img > img {
  width: 1034px;
  height: 159px;
}
.sixty_three {
  width: 100%;
  height: 163px;
}
.bottom_text {
  width: 514px;
  height: 194px;
  margin-left: 309px;
}
.bottom_text > p {
  font-size: 29px;
  font-family: "Source Han Sans CN";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 38px;
  margin-top: 30px;
  letter-spacing: 8px;
  text-indent: 30px;
}
.blueberry_img {
  width: 576px;
  height: 474px;
  position: absolute;
  right: 353px;
  top: 20%;
  display: flex;
  justify-content: space-between;
}
.left_img {
  width: 260px;
  height: 474px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.left_img > .left_top_img > .size {
  width: 260px;
  height: 302px;
}
.left_img > .left_top_img > .imgsize{
  width: 260px;
  height: 130px;
}
.left_img > .left_bottom_img > .change {
  width: 260px;
  height: 130px;
}
.left_bottom_img > img {
  margin-top: 30px;
  width: 260px;
  height: 302px;
}
</style>
