<template>
  <div id="fixed_container">
    <div :class="fixed === true ? 'fixedBtn' : ''">
      <div id="List_content">
        <div class="header_container">
          <ul class="swipper">
            <li :class="{ active: $route.path === '/home' }" @click="goPath('/home')">
              首页
              <div class="hover_show"></div>
            </li>
            <li :class="{ active: $route.path === '/heart' }" @click="goPath('/heart')">
              心选App
              <div class="hover_show"></div>
            </li>
            <li :class="{ active: $route.path === '/cash' }" @click="goPath('/cash')">
              云服务收银系统
              <div class="hover_show"></div>
            </li>
            <li :class="{ active: $route.path === '/self' }" @click="goPath('/self')">
              自营产品
              <div class="hover_show"></div>
            </li>
            <li :class="{ active: $route.path === '/join' }" @click="goPath('/join')">
              加入我们
              <div class="hover_show"></div>
            </li>
            <li :class="{ active: $route.path === '/about' }" @click="goPath('/about')">
              关于我们
              <div class="hover_show"></div>
            </li>
          </ul>
          <div class="hover_container">
            <el-col :span="4">
              <div class="hover_showtimer">
                <p
                  :class="{ unselected: $route.path === '/b2bpages' }"
                  @click="goPath('/join')"
                >员工招聘</p>
                <p
                  :class="{ selected: $route.path === '/b2bpages' }"
                  @click="goPath('/b2bpages')"
                >B2B代理</p>
              </div>
            </el-col>
          </div>
          <div :class="{ test_data: $route.path === '/b2bpages' }"></div>
        </div>
      </div>
      <div class="fixed_logo">
        <img src="../assets/images/logo_black.png" alt />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import page from "./Page_list";
export default {
  components: {
    page
  },
  data() {
    return {
      fixed: false,
      show_container: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.fixedActiveBtn);
  },
  methods: {
    fixedActiveBtn() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop >= 90 ? (this.fixed = true) : (this.fixed = false);
    },
    goPath(path) {
      path !== this.$route.path && this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
#fixed_container {
  width: 100%;
  .fixedBtn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    z-index: 100;

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
          color: #000;
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
        border-radius: 2px;
        background-color: #ffad60;
        position: absolute;
        left: 0;
        top: 39.5px;
        z-index: 500;
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

      .hover_container {
        width: 90px;
        height: 40px;
        position: absolute;
        left: 71%;
        top: 55%;
        text-align: center;
        cursor: pointer;
      }

      .hover_showtimer {
        width: 96px;
        height: 84px;
        background-color: #fff;
        border-radius: 2px;
        position: absolute;
        right: -3%;
        top: 65%;
        display: none;
        line-height: 35px;
      }

      .hover_showtimer >p:nth-child(1) {
        font-size: 16px;
        font-family: 'Microsoft YaHei';
        font-weight: 400;
        color: rgba(255, 173, 96, 1);

        &.unselected {
          color: #232323;
          font-size: 16px;
        }
      }

      .hover_showtimer >p:nth-child(2) {
        font-size: 16px;
        font-family: 'Microsoft YaHei';
        font-weight: 400;
        color: rgba(35, 35, 35, 1);
        &.selected {
          color: rgba(255, 173, 96, 1);
        }
      }

      .header_container >.hover_container:hover .hover_showtimer {
        display: block;
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
  }

  .fixed_logo {
    width: 108px;
    height: 60px;
    margin-left: 373px;
    margin-top: 4px;
  }

  .fixed_logo > img {
    width: 108px;
    height: 60px;
  }

  .test_data {
    width: 100%;
    height: 5px;
    border-radius: 2px;
    border-bottom: 4px solid #ffad60;
    position: absolute;
    right: 16%;
    top: 96%;
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
}
</style>
