<template>
  <div id="List_content">
    <div class="header_container">
      <ul class="swipper">
        <li @mouseleave="move" :class="{ active: $route.path === '/home' }" @click="goPath('/home')">
          首页
          <div class="hover_show"></div>
        </li>
        <li @mouseleave="move" :class="{ active: $route.path === '/heart' }" @click="goPath('/heart')">
          心选App
          <div class="hover_show"></div>
        </li>
        <li @mouseleave="move" :class="{ active: $route.path === '/cash' }" @click="goPath('/cash')">
          云服务收银系统
          <div class="hover_show"></div>
        </li>
        <li @mouseleave="move" :class="{ active: $route.path === '/self' }" @click="goPath('/self')">
          自营产品
          <div class="hover_show"></div>
        </li>
        <li
          @mouseenter="transfer"
          :class="{ active: $route.path === '/join' }"
          @click="goPath('/join')"
        >
          加入我们
          <div class="hover_show"></div>
        </li>
        <li @mouseleave="move" :class="{ active: $route.path === '/about' }" @click="goPath('/about')">
          关于我们
          <div class="hover_show"></div>
        </li>
      </ul>
      <div id="hover_container" v-show="isShow" @mouseleave="move">
        <p :class="{ unselected: $route.path === '/join' }" @click="goPath('/join')">员工招聘</p>
        <p :class="{ selected: $route.path === '/b2bpages'}" @click="goPath('/b2bpages')">B2B代理</p>
      </div>
      <div :class="{ test_data: $route.path === '/b2bpages' }"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      show_container: false,
      isShow: false
    };
  },
  mounted() {
    if (this.$route.path !== "/join") {
      this.isShow = false;
    }
  },
  methods: {
    goPath(path) {
      path !== this.$route.path && this.$router.push(path);
      if(this.$route.path !== '/join'){
        this.isShow = false
      }else if(this.$route.path !== '/b2bpages'){
        this.isShow = false
      }
    },
    transfer() {
      this.isShow = true;
    },
    move() {
      this.isShow = false;
    }
  },
  watch: {
  //   goPath(path) {
  //     path !== this.$route.path && this.$router.push(path);
  //     if (this.$route.path === '/join' || this.$route.path ===) {
  //       this.isShow = false;
  //     }
  //   }
  // }
  }
};
</script>

<style lang="stylus" scoped>
#List_content {
  .header_container {
    position: absolute;
    right: 355px;
    top: 25px;
  }

  .swipper {
    width: 100%;
    display: flex;
    position: relative;

    >li {
      font-size: 21px;
      font-family: 'MicrosoftYaHei';
      font-weight: 400;
      color: #FFF;
      margin-left: 24px;
      cursor: pointer;
      line-height: 40px;
      position: relative;

      &.active {
        border-radius: 2px;
        border-bottom: 4px solid #ffad60;
      }
    }

    .first_title {
      margin-left: 0;
    }
  }

  .hover_show {
    width: 100%;
    height: 4px;
    background-color: #ffad60;
    position: absolute;
    left: 0;
    top: 39.5px;
    visibility: hidden;
    border-radius: 2px;
  }

  .swipper >li:hover .hover_show {
    visibility: visible;
  }

  .header_container .show_container {
    width: 85px;
    height: 84px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0 4px 4px 4px;
    position: absolute;
    left: 1%;
    top: 120%;
  }

  .container_show .b2b_region >p {
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    color: rgba(255, 173, 96, 1);
    width: 100%;
    height: 40px;
    background-color: yellow;
  }

  .container_show .hiring >p {
    width: 100%;
    height: 40px;
    background-color: red;
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    color: rgba(35, 35, 35, 1);
  }

  #hover_container {
    position: absolute;
    left: 71.5%;
    top: 110%;
    text-align: center;
    cursor: pointer;
    background-color: #fff;

    > &.setting_color {
      color: red !important;
    }
  }

  #hover_container >p:nth-child(1) {
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    color: rgba(35, 35, 35, 1);
    margin: 12px 12px 13px 7px;
    box-sizing: border-box;

    &.unselected {
      color: #FFAD60;
      font-size: 16px;
    }
  }

  #hover_container >p:nth-child(2) {
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    font-weight: 400;
    color: rgba(35, 35, 35, 1);
    margin: 0px 12px 13px 7px;
    box-sizing: border-box;

    &.selected {
      color: rgba(255, 173, 96, 1);
    }
  }

  .hover_showtimer {
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    right: -3%;
    top: 65%;
    visibility: hidden;
    line-height: 35px;
  }

  .header_container >#hover_container:hover .hover_showtimer {
    visibility: visible;
  }

  .staff {
    width: 61px;
    height: 15px;
    margin-top: 18px;
  }

  .proxy {
    width: 64px;
    height: 20px;
    background-color: red;
  }

  .test_data {
    width: 85px;
    height: 5px;
    border-radius: 2px;
    border-bottom: 4px solid #ffad60;
    position: absolute;
    right: 16%;
    top: 96%;
  }
}
</style>
