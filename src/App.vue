<template>
  <div>
    <router-view></router-view>
    <Page_list v-show="$route.meta.isShowList"></Page_list>
    <fixed v-show="$route.meta.isShowList" :page="'Page_list'"></fixed>
  </div>
</template>

<script type="text/ecmascript-6">
import Page_list from "./components/Page_list";
import fixed from "./components/Fixed";
export default {
  components: {
    Page_list,
    fixed
  },
  mounted() {
    this.setting_clienWidth();
  },
  methods: {
    setting_clienWidth: function() {
      // this.screenWidth = document.body.clientWidth;
      // this.screenHeight = document.body.clientHeight;
      // window.onresize = () => {
      //   return (() => {
      //     let _screenWidth = document.body.clientWidth;
      //     let _screenHeight = document.body.clientHeight;
      //     if(_screenWidth < 1020 ){
      //       let _size = 800
      //       document.body.style.width = _size
      //     }
      //   })();
      // };
    }
  },
  watch: {
    $route: function(to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
