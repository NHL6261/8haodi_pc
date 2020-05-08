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
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './Footer'
export default {
  components:{
    Footer
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
.interval {
  width: 100%;
  height: 30px;
}
</style>
