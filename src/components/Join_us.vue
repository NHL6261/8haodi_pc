<template>
  <div id="join_container">
    <div class="join_banner">
      <div class="join_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <div class="join_title">
        <div class="title_top">
          <p>携手启程 领跑未来</p>
        </div>
        <div class="title_bottom">
          <p>我们提供广阔的成长空间，丰厚的福利待遇，与你来创造新零售领域未来</p>
        </div>
      </div>
    </div>
    <!-- 我们的工作氛围 -->
    <div class="join_atmosphere">
      <div class="atmosphere_header">
        <p>我们的工作氛围</p>
        <p>在八号地大家庭，拥有一流的专业团队，工作上大家充满激情，一起努力，携手共创美好未来</p>
      </div>
      <div class="atmposphere_main">
        <div class="passion">
          <div class="passion_icon">
            <div class="icon">
              <img class="img_01" src="../assets/images/激情.png" alt />
            </div>
          </div>
          <div class="passion_title">
            <p>激情</p>
          </div>
        </div>
        <div class="passion">
          <div class="passion_icon">
            <div class="icon">
              <img class="img_02" src="../assets/images/协作.png" alt />
            </div>
          </div>
          <div class="passion_title">
            <p>协作</p>
          </div>
        </div>
        <div class="passion">
          <div class="passion_icon">
            <div class="icon">
              <img class="img_03" src="../assets/images/高效.png" alt />
            </div>
          </div>
          <div class="passion_title">
            <p>高效</p>
          </div>
        </div>
        <div class="passion">
          <div class="passion_icon">
            <div class="icon">
              <img class="img_04" src="../assets/images/创新.png" alt />
            </div>
          </div>
          <div class="passion_title">
            <p>创新</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 我们的工作环境 -->
    <keep-alive>
      <Working></Working>
    </keep-alive>
  </div>
  
</template>

<script type="text/ecmascript-6">
import Working from "./Working";
export default {
  components: {
    Working,
  }
};
</script>

<style lang="less" scoped>
#join_container {
  width: 100%;
}
.join_banner {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/员工招聘-banner.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
}
.join_img {
  width: 108px;
  height: 60px;
  margin-left: 373px;
}
.join_img > img {
  width: 108px;
  height: 60px;
  margin-top: 4px;
}
.join_title {
  width: 100%;
  height: 127px;
  margin-top: 180px;
  text-align: center;
}
.title_top > p {
  font-size: 72px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 5px;
}
.title_bottom > p {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.join_atmosphere {
  width: 100%;
  height: 620px;
  background-color: #fff;
}
.atmosphere_header {
  width: 100%;
  height: 200px;
  text-align: center;
  position: relative;
}
.atmposphere_main {
  width: 100%;
  height: 400px;
  padding: 0px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.atmposphere_main > .passion {
  width: 306px;
  height: 400px;
  background-image: url("../assets/images/激情背景.png");
  background-size: 306px 400px;
  background-repeat: no-repeat;
}
.atmposphere_main > .passion:nth-child(2) {
  background-image: url("../assets/images/协作-背景.png");
   background-size: 306px 400px;
}
.atmposphere_main > .passion:nth-child(3) {
  background-image: url("../assets/images/高效-背景.png");
   background-size: 306px 400px;
}
.atmposphere_main > .passion:nth-child(4) {
  background-image: url("../assets/images/创新-背景.png");
   background-size: 306px 400px;
}
.atmposphere_main > .passion .passion_icon > .icon {
  width: 306px;
  height: 324px;
  position: relative;
}
.atmposphere_main > .passion .passion_icon > .icon > img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.atmposphere_main > .passion .passion_icon > .icon > .img_01 {
  width: 106px;
  height: 129px;
}
.atmposphere_main > .passion .passion_icon > .icon > .img_02 {
  width: 129px;
  height: 128px;
}
.atmposphere_main > .passion .passion_icon > .icon > .img_03{
  width: 126px;
  height: 127px;
}
.atmposphere_main > .passion .passion_icon > .icon > .img_04{
  width: 114px;
  height: 123px;
}
.atmposphere_main > .passion .passion_title {
  text-align: center;
}
.atmposphere_main > .passion .passion_title > p {
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.atmposphere_main > .cooperation {
  width: 306px;
  height: 400px;
  background-image: url("../assets/images/协作-背景.png");
  background-repeat: no-repeat;
}
.atmposphere_main > .efficient {
  width: 306px;
  height: 400px;
  background-image: url("../assets/images/高效-背景.png");
  background-repeat: no-repeat;
}
.atmposphere_main > .innovation {
  width: 306px;
  height: 400px;
  background-image: url("../assets/images/创新-背景.png");
  background-repeat: no-repeat;
}
.atmosphere_header p:nth-child(1) {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  line-height: 24px;
  position: absolute;
  left: 50%;
  bottom: 39%;
  transform: translate(-50%);
}
.atmosphere_header p:nth-child(2) {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(96, 96, 96, 1);
  line-height: 30px;
  position: absolute;
  left: 50%;
  bottom: 11%;
  transform: translate(-50%);
}
</style>
