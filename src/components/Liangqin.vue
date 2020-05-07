<template>
  <div id="laingqin_container">
      <!-- 详情页区域 -->
      <div class="edition_heart">
          <!-- 头部header区域 -->
        <div class="edition_header">
            <p>朗勤心选App</p>
        </div>
        <!-- 中间详情简介区域 -->
        <div class="edition_details">
            <p>朗勤心选是八号地为手机用户推出的满足生活消费和线上购物需求的软件，为消费者提供原产地甄选的健康食材和品质商品,致力于为消费者提供迅速、便捷的线上线下一体式购物体验。</p>
        </div>
        <!-- 图片 -->
        <div class="img_container">
            <!-- 手机图片切换区域 -->
            <div class="mobile">
                <img src="../assets/images/mobilecase.png" alt="此图片无法显示">
            </div>
            <!-- 右边icon区域 -->
            <div class="icon_content">
                <div class="icon_title">
                    <img src="../assets/images/home.png" alt="">
                    <p>商城首页</p>
                </div>
                 <div class="icon_title">
                    <img src="../assets/images/huodong.png" alt="">
                    <p>活动专区</p>
                </div>
                 <div class="icon_title">
                    <img src="../assets/images/character.png" alt="">
                    <p>用户主页</p>
                </div>
                 <div class="icon_title">
                    <img src="../assets/images/youhuiquan.png" alt="">
                    <p>优惠券</p>
                </div>
                 <div class="icon_title">
                    <img src="../assets/images/cart_2.png" alt="">
                    <p>购物车</p>
                </div>
                 <div class="icon_title">
                    <img src="../assets/images/shangpin.png" alt="">
                    <p>商品详情</p>
                </div>
            </div>
        </div>
        <!-- 底部隔阂区域 -->
        <div class="white_content"></div>
      </div>
      <!-- 线上线下急速配送 -->
      <div class="delivery_container">
          <div class="jiange"></div>
          <div class="delivery_header">
              <p>线上线下急速配送</p>
          </div>
          <div class="map_content">
              <div class="map_detail">
                  <img src="../assets/images/map.png" alt="">
              </div>
              <div class="explain">
                  <div class="distributed">
                      <img src="../assets/images/store.png" alt="此图片无法显示">
                      <p class="first">门店及库房数</p>
                      <p class="last">400+</p>
                  </div>
                  <div class="distributed">
                      <img src="../assets/images/users.png" alt="此图片无法显示">
                      <p class="first">用户量</p>
                      <p class="last">60万+</p>
                  </div>
                  <div class="distributed">
                      <img src="../assets/images/chengshijianshe.png" alt="此图片无法显示">
                      <p class="first">地级市数</p>
                      <p class="last">80+</p>
                  </div>
              </div>
          </div>
      </div>
      <!-- 收银系统页面 -->
      <Cash></Cash>
      <!-- 八号地自营产品 -->
      <Operated></Operated>
      <!-- 物流公司信息 -->
      <Logistics_company></Logistics_company>
  </div>
</template>

<script type="text/ecmascript-6">
import Cash from './Cash'
import Operated from './Operated'
import Logistics_company from './Logistics_company'
  export default {
      components:{
          Cash,
          Operated,
          Logistics_company
      }
  }
</script>

<style lang="stylus" scoped>
#laingqin_container
    width 100%
    overflow hidden
    .edition_heart
        width 100%
        .edition_header
            margin-top 70px
            >p
              margin-left 558px
              font-weight 400
              color #000000
              font-size 50px
              font-family "SourceHanSansCN-Regular"
        .edition_details
            width 831px
            height 182px
            margin-left 558px
            >p 
              font-size 33.33px
              font-weight 400
              font-family "SourceHanSansCN-Regular"  
              color #000000
        .img_container
            margin-top 20px
            display flex
            justify-content space-between
            .mobile
                width 317px
                height 680px
                margin-left 570px
                >img 
                    width 317px
                    height 680px
            .icon_content
                margin-right 660px
                line-height 96px
                .icon_title
                    width 190px
                    display flex
                    align-items: center
                    >img 
                        width 41px
                        height 46px
                    >p
                        font-weight 400
                        font-family "SourceHanSansCN-Medium"
                        font-size 33.33px
        .white_content
            width 100%
            height 50px
            background-color #fff
    .delivery_container
        width 100%
        height 600px
        background-color #FFAD60
        .jiange
            width 100%
            height 10px
        .delivery_header
            text-align center
            >p  
                font-size:50px;
                font-family:"SourceHanSansCN-Regular"
                font-weight:400
                color:rgba(255,255,255,1)
        .map_content
            display flex
            justify-content space-between
            .map_detail
                margin-top 20px 
                margin-left 350px
            .explain
                margin-top 129px
                margin-right 520px
                display flex
                justify-content space-between
                .distributed
                    display: flex
                    flex-direction: column
                    align-items center
                    line-height 60px
                    >img 
                        width 59px
                        height 59px
                    .first
                        font-family "SourceHanSansCN-Regular"
                        font-weight 400
                        font-size 20.83px
                        color #fff
                    .last
                        font-family "SourceHanSansCN-Medium"
                        font-size 33.33px
                        color #fff
                        font-size:33px;
                        font-weight:500
                        color:rgba(255,255,255,1)


</style>
