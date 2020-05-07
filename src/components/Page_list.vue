<template>
  <div id="List_content">
    <div class="header_container">
      <ul class="swipper">
        <li :class="{ active: $route.path === '/home'}"  @click="goPath('/home')">首页</li>
        <li @click="goPath('/heart')">心选App</li>
        <li @click="goPath('/cash')">云服务收银系统</li>
        <li @click="goPath('/self')">自营产品</li>
        <li @click="goPath('/join')">加入我们</li>
        <li @click="goPath('/about')">关于我们</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{

      }
    },
    methods:{
      goPath(path){
        path !== this.$route.path &&  this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
#List_content
  .header_container
     position absolute
     right 355px
     top 25px
    .swipper
      display flex
      >li
        font-size 21px
        font-family "MicrosoftYaHei"
        font-weight 400
        color #FFF
        margin-left 24px
        cursor pointer
        &.active
          height 4px
          background-color #FFAD60
          border-radius 5px
      .first_title
        margin-left 0
</style>
