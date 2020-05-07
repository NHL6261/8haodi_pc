<template>
  <div id="cash_container">
      <div class="jiange"></div>
      <div class="cash_header">
          <p>云服务收银系统</p>
      </div>
      <div class="jiange"></div>
      <div class="warehouse">
          <img src="../assets/images/warehouse.png" alt="">
      </div>
      <div class="">
      </div>
      <div class="warehouse_text">
          <p class="warehouse_text1">岗位分配</p>
          <p class="warehouse_text2">供应链</p>
          <p class="warehouse_text3">质量审核</p>
      </div>
      <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Operated from './Operated'
  export default {
    components: {
        Operated
    },
  }
</script>

<style lang="stylus" scoped>
#cash_container
    width 100%
    height 1000px
    background-color #fff
    .jiange
        width 100%
        height 20px
    .cash_header
        width 100%
        margin-left 559px
        >p
            font-size 50px
            color rgba(68,68,68,1);
            font-weight 400
            font-family "SourceHanSansCN-Regular"
    .warehouse
        width 100%
        height 185px
        margin-top 20px
        background-color red
        text-align center
        >img 
            width 331px
            height 185px
    .warehouse_text
        position relative
        .warehouse_text1,.warehouse_text2,.warehouse_text3
            font-size 25px
            font-family "SourceHanSansCN-Regular"
            font-weight 400
            color:rgba(125,125,125,1)
        .warehouse_text1
            position absolute
            left 1130px
            top -160px
        .warehouse_text2
            position absolute
            left 50%
            top 7px
            transform translate(-50%)
        .warehouse_text3
            position absolute
            left 37%
            top -100px
            transform translate(-37%)
</style>
