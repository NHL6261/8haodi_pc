<template>
  <div id="comprehensive_container">
    <div class="comprehenive_header">
      <p>综合零售系统</p>
    </div>
    <div class="comprehenive_bottom">
      <div class="left_img">
        <img src="../assets/images/后台系统.png" alt />
      </div>
      <div class="right_content">
        <div class="right_content_header">
          <p>综合零售系统具有强大的后台管理功能,连通线上线下,提升管理效率,达到商品,库存,会员,财务等全面数字化管理， 更方便公司的统一精细化管理</p>
        </div>
        <div class="right_content_main">
          <div class="icon_title">
            <img class="img_01" src="../assets/images/商品管理.png" alt="此图片暂时无法显示" />
            <!-- style="" -->
            <span>商品管理</span>
          </div>
          <div class="icon_title">
            <img class="img_02" src="../assets/images/库存管理.png" alt />
            <span>库存管理</span>
          </div>
          <div class="icon_title">
            <img class="img_03" src="../assets/images/采购管理.png" alt />
            <span>采购管理</span>
          </div>
          <div class="icon_title">
            <img class="img_04" src="../assets/images/销售管理.png" alt />
            <span>销售管理</span>
          </div>
          <div class="icon_title">
            <img class="img_05" src="../assets/images/促销管理.png" alt />
            <span>促销管理</span>
          </div>
        </div>
        <div class="jiange0"></div>
        <div class="right_content_main">
          <div class="icon_title">
            <img class="img_06" src="../assets/images/财务i管理.png" alt />
            <span>财务管理</span>
          </div>
          <div class="icon_title">
            <img class="img_07"  src="../assets/images/会员管理.png" alt />
            <span>会员管理</span>
          </div>
          <div class="icon_title">
            <img class="img_08" src="../assets/images/icon.png" alt />
            <span>报表管理</span>
          </div>
          <div class="icon_title">
            <img class="img_09" src="../assets/images/系统管理.png" alt />
            <span>系统管理</span>
          </div>
          <div class="icon_title">
            <img class="img_10" src="../assets/images/广告管理.png" alt />
            <span>广告管理</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
#comprehensive_container {
  width: 100%;
  height: 692px;
  background-color: #fff7ef;
}
.comprehenive_header {
  width: 100%;
  height: 134px;
  text-align: center;
}
.comprehenive_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  padding-top: 83px;
}
.comprehenive_bottom {
  width: 100%;
  height: 385px;
  margin-top: 96px;
  padding: 0 324px 77px 276px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.comprehenive_bottom .left_img {
  width: 688px;
  height: 385px;
}
.comprehenive_bottom .left_img > img {
  width: 688px;
  height: 385px;
}
.comprehenive_bottom .right_content {
  width: 541px;
  height: 245px;
  display: flex;
  flex-direction: column;
}
.comprehenive_bottom > .right_content > .right_content_header {
  height: 66px;
}
.comprehenive_bottom > .right_content >.right_content_header > p {
  font-size: 18px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  color: #6d6c6b;
  line-height: 24px;
  text-align: left;
}
.comprehenive_bottom > .right_content > .right_content_main {
  height: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  line-height: 180px;
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
// .comprehenive_bottom > .right_content > .right_content_main .icon_title img {
// }
.comprehenive_bottom > .right_content > .right_content_main .icon_title span {
  display: block;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  color: rgba(35, 35, 35, 1);
  line-height: 39px;
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_01{
  width: 43px; 
  height: 51px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_02{
  width: 48px;
  height: 53px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_03{
  margin-top: 5px;
  width: 50px;
  height: 50px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_04{
  margin-top: 6px;
  width: 49px;
  height: 44px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_05{
  margin-top: 8px; 
  width: 55px; 
  height: 38px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_06{
  width: 45px; 
  height: 48px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_07{
  width: 57px; 
  height: 48px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_08{
  width: 41px; 
  height: 50px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_09{
  width: 51px; 
  height: 52px
}
.comprehenive_bottom > .right_content > .right_content_main .icon_title .img_10{
  width: 51px; 
  height: 52px
}
.jiange0 {
  width: 541px;
  height: 50px;
}
</style>
