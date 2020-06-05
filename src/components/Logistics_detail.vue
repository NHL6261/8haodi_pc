<template>
  <div id="logistics_container">
    <div class="logistics_img">
      <img src="../assets/images/bahaodicangchu.png" alt="此图片暂时无法显示" />
    </div>
    <div class="logistics_text">
      <div class="position_text">
        <p>南京八号地物流公司</p>
        <p>南京八号地物流公司在我国各大城市设立食品连锁门店300余家，提供优质、安全、放心的食品品牌。</p>
        <div class="line_container"></div>
        <div class="timer">
          <p>2016.09.20</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scpoed>
#logistics_container {
  width: 100%;
  height: 715px;
  position: relative;
}
.logistics_img {
  width: 1315px;
  height: 500px;
  position: absolute;
  right: 0;
  top: 11%;
}
.logistics_img > img {
  width: 1315px;
  height: 500px;
}
.logistics_text {
  width: 675px;
  height: 271px;
  background-color:rgba(255,255,255,0.7);
  position: absolute;
  left: 16%;
  top: 27%;
  padding: 31px 44px 56px 93px;
  box-sizing: border-box;
  text-align: left;
}
.logistics_text > p:nth-child(1) {
  width: 366px;
  height: 40px;
  font-size: 40px;
  font-family: "Source Han Sans CN";
  font-weight: bold;
  color: rgba(68, 68, 68, 1);
  line-height: 97px;
  letter-spacing: 8px;
}
.logistics_text > p:nth-child(2) {
  width: 538px;
  height: 111px;
  font-size: 25px;
  font-family: "Source Han Sans CN";
  font-weight: bold;
  color: rgba(68, 68, 68, 1);
  margin-top: 53px;
}
.line_container {
  width: 117px;
  height: 8px;
  background: #ffad60;
  position: absolute;
  top: -3%;
  left: 14%;
}
.timer > p {
  width: 222px;
  height: 33px;
  font-size: 42px;
  font-family: " Source Han Sans CN";
  font-weight: bold;
  color: #444;
  position: absolute;
  left: 14%;
  top: -30%;
}
.position_text{
  width: 100%;
  height: 100%;
}
.position_text > p:nth-child(1) {
  position: absolute;
  left: 94px;
  top: 31px;
  font-size: 40px;
  font-family: "Source Han Sans CN";
  font-weight: bold;
  color: #444444;
}
.position_text > p:nth-child(2) {
  position: absolute;
  left: 93px;
  top: 124px;
  width: 538px;
  height: 111px;
  font-size: 25px;
  line-height: 39px;
  font-family: "Source Han Sans CN";
  color: #444444;
  font-weight: 500;
}
</style>
