<template>
  <div id="footer_container">
    <div class="total_container">
      <div class="top_container">
        <div class="left_logo">
          <img src="../assets/images/logo.png" alt="此图片暂时无法显示" />
        </div>
        <div class="center_text">
          <p>北京地址：北京市丰台区金茂广场3号楼1001室</p>
          <p>合肥地址：安徽省合肥市包河区滨湖金融港B3座501室</p>
          <p>北京电话：010-64222400/合肥电话：400-818-5900</p>
          <p>公司邮箱：8haodi@8haodi.com</p>
        </div>
        <div class="right_qr">
          <div class="big_qr">
            <div class="whilt_container">
              <img src="../assets/footer_images/anzhuo.png" alt="此图片暂时无法显示">
            </div>
            <div class="qr_text">
              <p>安卓下载</p>
            </div>
          </div>
          <div class="big_qr">
            <div class="whilt_container1">
              <img src="../assets/footer_images/ios.png" alt="此图片暂时无法显示">
            </div>
            <div class="qr_text">
              <p>iOS下载</p>
            </div>
          </div>
          <div class="big_qr">
            <div class="whilt_container2">
              <img src="../assets/footer_images/nopublic.jpg" alt="">
            </div>
            <div class="qr_text">
              <p>微信公众号</p>
            </div>
          </div>
          <div class="big_qr" style="margin-right: 0px">
            <div class="whilt_container3">
              <img src="../assets/footer_images/weibo.jpg" alt="">
            </div>
            <div class="qr_text">
              <p>微博官方号</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cernter_container"></div>
      <div class="bottom_container">
        <p>© 8haodi.com. All Rights Reserved. 京ICP备16001304号</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#footer_container {
  width: 100%;
}
.total_container {
  width: 100%;
  height: 304px;
  background-color: #444444;
}
.top_container {
  width: 100%;
  height: 227px;
  padding: 36px 320px 43px 320px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.cernter_container {
  width: 100%;
  height: 4px;
  background-color: #606060;
}
.bottom_container {
  width: 100%;
  height: 73px;
  text-align: center;
  line-height: 73px;
}
.bottom_container > p {
  font-size: 21px;
  font-family:"Source Han Sans CN";
  font-weight: 400;
  color: rgba(125, 125, 125, 1);
}
.left_logo {
  width: 227px;
  height: 126px;
}
.left_logo > img {
  width: 227px;
  height: 126px;
}
.center_text > p {
  font-size: 21px;
  font-family: "Source Han Sans CN";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.right_qr {
  display: flex;
  justify-content: space-between;
}
.big_qr {
  text-align: center;
  margin-right: 16px;
}
.whilt_container,.whilt_container1,.whilt_container2,.whilt_container3{
  width: 100px;
  height: 100px;
  background-color: #ededed;
}
.whilt_container> img, .whilt_container1> img,.whilt_container2>img,.whilt_container3>img {
  width: 100px;
  height: 100px;
}


.qr_text {
  margin-top: 15px;
}
.qr_text > p {
  font-size: 21px;
  font-family: " Source Han Sans CN";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
