<template>
  <div id="dairy_container">
    <div class="dairy_img">
      <img src="../assets/images/bahaodirupin_xy.png" alt="此图片暂时无法显示" />
    </div>
    <div class="dairy_text">
      <p>八号地乳品厂</p>
      <p>八号地乳品厂,立足于肥沃的东北黑土地之上,依托于云山农场的丰富奶源,注重质量和安全的双重把关，提供优质、健康、美味的牛奶</p>
      <div class="line_container"></div>
      <div class="timer">
        <p>2018.06.15</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#dairy_container {
  width: 100%;
  height: 562px;
  position: relative;
}
.dairy_img {
  width: 1316px;
  height: 500px;
}
.dairy_img > img {
  width: 1316px;
  height: 500px;
}
.dairy_text {
  width: 675px;
  height: 291px;
  background-color:rgba(255,255,255,0.7);
  position: absolute;
  right: 13%;
  top: 14%;
  padding: 32px 93px 81px 25px;
  box-sizing: border-box;
}
.dairy_text > p:nth-child(1) {
  width: 100%;
  height: 40px;
  font-size: 40px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #444;
  line-height: 97px;
  margin-left: 290px;
}
.dairy_text > p:nth-child(2) {
  width: 538px;
  height: 111px;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #444;
  margin-top: 53px;
  text-align: right;
}
.line_container {
  width: 117px;
  height: 8px;
  background: #ffad60;
  position: absolute;
  top: -3%;
  left: 66%;
}
.timer > p {
  width: 222px;
  height: 33px;
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #444444;
  position: absolute;
  left: 50%;
  top: -30%;
}
</style>
