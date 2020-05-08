<template>
  <div id="footer_swiper">
    <!-- 头部信息 -->
    <div class="footer_top">
      <!-- 最左侧图片区域 -->
      <div class="footer_left_img">
        <img src="../assets/images/logo.png" alt />
      </div>
      <!-- 中间详情区域 -->
      <div class="footer_center_detail">
        <p>北京地址：北京市丰台区金茂广场3号楼1001室</p>
        <p>合肥地址：安徽省合肥市包河区滨湖金融港B3座501室</p>
        <p>北京电话：010-64222400 / 合肥电话：400-818-5900</p>
        <p>公司邮箱：8haodi@8haodi.com</p>
      </div>
      <!-- 最右侧二维码扫描区域 -->
      <div class="footer_right_qr">
        <div class="Android_content">
          <div class="Android_top"></div>
          <span>安卓下载</span>
        </div>
        <div class="Android_content">
          <div class="Android_top"></div>
          <span>Ios下载</span>
        </div>
        <div class="Android_content">
          <div class="Android_top"></div>
          <span>微信公众号</span>
        </div>
        <div class="Android_content" :style="'margin-right:0px'">
          <div class="Android_top"></div>
          <span>微博官方号</span>
        </div>
      </div>
    </div>
    <!-- 中间的线 -->
    <div class="footer_center_line"></div>
    <!-- 底部备注信息 -->
    <div class="footer_remarks">
      <p>© 8haodi.com. All Rights Reserved. 京ICP备16001304号</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#footer_swiper {
  width: 100%;
  height: 152px;
  background-color: #444444;
}
.footer_top {
  width: 100%;
  height: 113.5px;
  padding: 0px 175px 0px 177px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.footer_left_img {
  width: 113.5px;
  height: 63px;
  margin-top: 18px;
  margin-right: 12px;
}
.footer_left_img > img {
  width: 113.5px;
  height: 63px;
}
.footer_center_detail {
  margin-top: 24px;
  margin-right: 12px;
}
.footer_center_detail > p {
  font-size: 10px;
  font-family: "SourceHanSansCN-Normal";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 19px;
}
.footer_right_qr {
  display: flex;
  margin-top: 23.5px;
}
.Android_content {
  margin-right: 7.5px;
}
.Android_top {
  width: 60px;
  height: 60px;
  background-color: #fff;
}
.Android_content > span {
  display: block;
  color: #ffffff;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 20px;
}
.footer_center_line {
  width: 100%;
  height: 2px;
  background-color: #606060;
}
.footer_remarks {
  width: 100%;
  height: 36.5px;
  text-align: center;
  line-height: 36.5px;
}
.footer_remarks > p {
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(125, 125, 125, 1);
}
</style>
