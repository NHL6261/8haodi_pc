<template>
  <el-col :span="24">
    <div id="banner_content">
      <!-- header区域 -->
      <div class="page_list">
        <!-- 列表区域 -->
        <div class="page_header">
          <!-- 图片区域 -->
          <div class="img_content">
            <img src="../assets/images/logo.png" alt="此图片暂时无法显示" />
          </div>
        </div>
        <!-- 八号地图片区域 -->
        <div class="img_container">
          <img src="../assets/images/logo_text.png" alt="此图片暂时无法显示" />
        </div>
        <!-- 种子的魅力 -->
        <div class="seed">
          <span>不辜负每一份信任</span>
        </div>
        <!-- Android and Ios  -->
        <div class="btn_setting">
          <div class="btn_download">
            <button>
              <div class="btn_title">
                <img src="../assets/images/anzhuo.png" alt="此图片无法显示" />
                <span>安卓下载</span>
              </div>
              <!-- 鼠标移入显示区域 -->
              <div class="qr_show1">
                <img src="../assets/images/anzhuoFillet.png" alt="此图片无法显示" />
              </div>
            </button>
            <button>
              <div class="btn_title">
                <img src="../assets/images/iconfontapple2.png" alt="此图片无法显示" />
                <span>iOS下载</span>
              </div>
              <!-- 鼠标移入显示区域 -->
              <div class="qr_show2">
                <img src="../assets/images/iosFillet.png" alt="此图片无法显示" />
              </div>
            </button>
          </div>
        </div>
        <!-- 新用户区域 -->
        <div class="new_user">
          <div class="user_title">
            <p>新用户可享100减30</p>
          </div>
        </div>
        <!-- 天天好惊喜 -->
        <div class="surprise">
          <div class="surprise_content">
            <p>App每日享专属特价商品 优惠惊喜享不停</p>
          </div>
        </div>
      </div>
      <!-- 中间良勤心选App区域 -->
      <keep-alive>
        <Liangqin></Liangqin>
      </keep-alive>
      <keep-alive>
        <Footer></Footer>
      </keep-alive>
      <div class="jiange"></div>
    </div>
  </el-col>
</template>

<script type="text/ecmascript-6">
import Footer from "./Footer";
import Liangqin from "./Liangqin";
export default {
  components: {
    Footer,
    Liangqin
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>#banner_content {
  width: 100%;
  overflow: hidden;

  .page_list {
    width: 100%;
    height: 650px;
    background: url('../assets/images/banner.png');
    background-repeat: no-repeat;
    background-size: 100% 650px;

    .page_header {
      width: 100%;
      height: 104px;
      padding-left: 373px;
      padding-right: 355px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      .img_content {
        width: 108px;
        height: 60px;

        >img {
          width: 100%;
          height: 100%;
          margin-top: 4px;
        }
      }

      .list_content {
        margin-top: 25px;
        box-sizing: border-box;

        .swiper_content {
          display: flex;
          justify-content: space-between;

          >li {
            font-size: 21px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: #FFFFFF;
            margin-left: 24px;
            cursor: pointer;
          }

          .cancel {
            margin-left: 0px;
          }
        }
      }
    }

    .img_container {
      width: 100%;

      >img {
        margin-left: 520px;
        width: 551px;
        height: 129px;
      }
    }

    .seed {
      width: 100%;

      >span {
        display: block;
        font-size: 66.67px;
        color: #FFFFFF;
        font-family: 'SourceHanSansCN-Regular';
        font-weight: 400;
        margin-left: 520px;
        letter-spacing: 9px;
      }
    }

    .btn_setting {
      margin-left: 520px;
      margin-top: 47px;
      position: relative;

      .btn_download {
        width: 447px;
        height: 50px;
        display: flex;
        justify-content: space-between;

        >button:nth-child(1), >button:nth-child(2) {
          width: 200px;
          height: 50px;
          margin: 0;
          padding: 0;
          border: 1px solid transparent;
          outline: none;
          border-radius: 10px;
          background-color: #FFAD60;

          .btn_title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            margin-bottom: 2px;

            >img {
              width: 28px;
              height: 31px;
              margin-left: 28px;
            }

            >span {
              font-size: 25px;
              font-family: 'SourceHanSansCN-Normal';
              font-weight: Normal;
              color: #fff;
              margin-right: 25px;
            }
          }

          .qr_show1, .qr_show2 {
            width 200px
            height 180px
            position: absolute;
            top: 101%;
            display: none;
            z-index: 10;
            background: rgba(0,0,0,.1)
            border-top-left-radius 10px
            border-top-right-radius 10px
          }
        }
      }
    }

    .qr_show1 >img {
      width: 150px;
      height: 150px;
      margin-top 13.8px
    }

    .qr_show2 >img {
      width: 150px;
      height: 150px;
      margin-top 14px
    }

    .btn_setting >.btn_download >button:nth-child(1):hover .qr_show1 {
      display: block;
    }

    .btn_setting >.btn_download >button:nth-child(2):hover .qr_show2 {
      display: block;
    }

    .new_user {
      width: 100%;
      height: 60px;
      margin: 60px 638px 80px 690px;
      position: relative;

      .user_title {
        width: 656px;
        height: 60px;
        background-color: #fff;
        border-radius: 35px;
        text-align: center;
        line-height: 60px;
        >p {
          color: #FFAD60;
          font-size: 42px;
          font-family: 'Source Han Sans CN';
          font-weight: bold;
          color: rgba(255, 173, 96, 1);
          letter-spacing: 8px;
        }
      }
    }

    .surprise {
      .surprise_content {
        width: 100%;
        height: 37px;
        position: relative;
        >p {
          text-align: center;
          font-weight: 400;
          color: #FFFFFF;
          font-size: 27px;
          font-family: 'Source Han Sans CN';
          color: rgba(255, 255, 255, 1);
          position: absolute;
          left: 37%;
          bottom: 151%;
          letter-spacing: 4px;
          margin-left: 1.3%;
        }
      }
    }
  }
}
</style>
