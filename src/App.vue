<template>
  <div>
    <router-view></router-view>
    <Page_list v-show="$route.meta.isShowList"></Page_list>
  </div>
</template>

<script type="text/ecmascript-6">
import Page_list from './components/Page_list'
  export default {
    components:{
      Page_list
    }
  }
</script>

<style lang="stylus" scoped>

 
</style>
