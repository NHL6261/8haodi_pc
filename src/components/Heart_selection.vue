<template>
  <div id="heart_header">
    <!-- 心选App banner区域 -->
    <div class="heart_banner">
      <!-- 左边八号地图片 -->
      <div class="heart_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <!-- 间隔区域 -->
      <div class="interval"></div>
      <!-- 心选App title -->
      <div class="heart_title">
        <span>心选App</span>
      </div>
      <!-- 心选App detail -->
      <div class="heart_detail">
        <span>放心购 用心选</span>
      </div>
      <!-- 下载页面 -->
      <div class="heart_download">
        <div class="heart_swipper">
          <div class="download_content">
            <!-- <img src="../assets/images/anzhuo.png" alt=""> -->
          </div>
          <span>安卓下载</span>
        </div>
        <div class="heart_swipper">
          <div class="download_content">
            <!-- <img src="../assets/images/anzhuo.png" alt=""> -->
          </div>
          <span>iOS下载</span>
        </div>
      </div>
    </div>
    <!-- 中间内容区域 -->
    <div class="heart_white"></div>
    <!-- 中间左边灰色区域 -->
    <div class="gray_zone">
      <div class="title">
        <p>朗勤心选App</p>
      </div>
      <div class="center_title">
        <span>优势1：限时特价产品 优惠券开心领</span>
        <span>优势2：产品种类齐全 稀缺产品大库直发</span>
        <span>优势3：购物领商分 现金即时兑换</span>
        <span>优势4：线下门店库房择优配送</span>
      </div>
    </div>
    <!-- 三张照片区域 -->
    <div class="three_photos">
      <div class="first_img">
        <img src="../assets/images/homepage_2.png" alt />
      </div>
      <div class="second_img">
        <img src="../assets/images/home_page.png" alt />
      </div>
      <div class="last_img">
        <img src="../assets/images/eight_classify.png" alt />
      </div>
    </div>
    <div class="four_pictures_container">
      <div class="jiange"></div>
      <div class="four_pictures_img">
        <img src="../assets/images/coupon_recieve.png" alt />
        <img src="../assets/images/info_detail.png" alt />
        <img src="../assets/images/classify.png" alt />
        <img src="../assets/images/mine.png" alt />
      </div>
    </div>
    <!-- 闪电配送 -->
    <Lighting></Lighting>
    <!-- 我们的优势 -->
    <Advantage></Advantage>
    <!-- 间隔 -->
    <div class="jiange2"></div>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Lighting from "./Lightning_delivery";
import Footer from "./Footer";
import Advantage from "./Advantage";
export default {
  components: {
    Footer,
    Lighting,
    Advantage
  }
};
</script>

<style lang="less" scoped>
#heart_header {
  width: 100%;
}
.heart_banner {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/appbanner.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
}
.heart_img {
  width: 108px;
  height: 60px;
  margin-left: 373px;
}
.heart_img > img {
  width: 108px;
  height: 60px;
  margin-top: 4px;
}
.heart_title {
  text-align: center;
}
.heart_title > span {
  font-size: 100px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
}
.heart_detail {
  text-align: center;
}
.heart_detail > span {
  width: 459px;
  height: 65px;
  font-size: 67px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.heart_download {
  width: 100%;
  height: 236px;
  padding: 0px 637px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.heart_download > .heart_swipper {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.heart_download > .heart_swipper > span {
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  top: 12px;
}
.heart_download > .heart_swipper > .download_content {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
}
.heart_white {
  width: 100%;
  height: 337px;
  background-color: #fff;
  position: relative;
}
.gray_zone {
  width: 1066px;
  height: 420px;
  background: #e1e1e1;
  position: absolute;
  right: 0;
  top: 85%;
  transform: translateY(-6%);
}
.gray_zone > .title {
  width: 1066px;
}
.gray_zone > .center_title {
  width: 450px;
  height: 163px;
  margin-left: 199px;
}
.gray_zone > .center_title > span {
  display: block;
  font-size: 25px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(125, 125, 125, 1);
}
.gray_zone > .title > p {
  font-size: 50px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  margin: 82px 493px 24px 255px;
  box-sizing: border-box;
}
.three_photos > .first_img {
  width: 316px;
  height: 680px;
  position: absolute;
  left: 350px;
  top: 720px;
}
.three_photos > .second_img {
  width: 316px;
  height: 680px;
  position: absolute;
  left: 580px;
  top: 720px;
}
.three_photos > .second_img > img {
  width: 316px;
  height: 680px;
}
.three_photos > .last_img > img {
  width: 436px;
  height: 220px;
}
.three_photos > .last_img {
  width: 316px;
  height: 680px;
  position: absolute;
  left: 520px;
  top: 934px;
}
.three_photos > .first_img > img {
  width: 316px;
  height: 680px;
}
.four_pictures_container {
  width: 100%;
  height: 1148px;
  background-color: #ededed;
}
.four_pictures_img {
  width: 100%;
  height: 617px;
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
  padding: 0 350px 0 349px;
  box-sizing: border-box;
}
.four_pictures_img > img {
  width: 286px;
  height: 617;
}
.interval {
  width: 100%;
  height: 30px;
}
.jiange {
  width: 100%;
  height: 465px;
}
.jiange2 {
  width: 100%;
  height: 38px;
  background-color: #fff;
}
</style>
