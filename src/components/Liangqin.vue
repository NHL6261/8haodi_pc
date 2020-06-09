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
        <p>朗勤心选是八号地为手机用户推出的满足生活消费和线上购物需求的软件, 为消费者提供原产地甄选的健康食材和品质商品。致力于为消费者提供迅速、便捷的线上线下一体式购物体验。</p>
      </div>
      <!-- 图片 -->
      <div class="img_container">
        <!-- 手机图片切换区域 -->
        <div class="mobile">
          <img src="../assets/images/mobilecase.png" alt="此图片无法显示" />
        </div>
        <div class="title_icon">
          <ul class="title_swiper">
            <li
              class="title_child"
              v-for="(item,index) in imgUrl"
              :key="index"
              @mouseenter="showtime(index)"
              @mouseleave="cancel(index)"
            >
              <img name="discoloration" :src="item.icon" alt="此图片暂时无法显示" />
              <p ref="title_setting" :class="{active: index === imgSrc }">{{item.title}}</p>
            </li>
          </ul>
        </div>
        <img class="imgSize" :src="imgUrl[imgSrc].img" alt="此图片暂时无法显示" />
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
          <img class="img_setting" src="../assets/images/map.png" alt="此图片暂时无法显示" />
        </div>
        <div class="explain">
          <div class="distributed">
            <img class="img_three" src="../assets/images/store.png" alt="此图片无法显示" />
            <p class="first">门店及库房数</p>
            <p class="last">400+</p>
          </div>
          <div class="distributed">
            <img class="img_one" src="../assets/images/users.png" alt="此图片无法显示" />
            <p class="subscribers">用户量</p>
            <p class="last">60万+</p>
          </div>
          <div class="distributed">
            <img class="img_two" src="../assets/images/chengshijianshe.png" alt="此图片无法显示" />
            <p class="first">地级市数</p>
            <p class="last" style="margin-left: 10px">80+</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 收银系统页面 -->
    <keep-alive>
      <Cash></Cash>
    </keep-alive>
    <!-- 四张图片区域 -->
    <keep-alive>
      <four></four>
    </keep-alive>
    <!-- 自营产品区域 -->
    <keep-alive>
      <proprietary></proprietary>
    </keep-alive>
    <!-- 物流区域 -->
    <keep-alive>
      <logistics></logistics>
    </keep-alive>
    <!-- 乳产品 -->
    <keep-alive>
      <dairy></dairy>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
// import isshow from '../utils/'
import Cash from "./Cash";
import four from "./four_pictures";
import proprietary from "./Proprietary_goods";
import logistics from "./Logistics_detail";
import dairy from "./Dairy_Factory";
import imgData from "../assets/data/imgdata.json";
import img from '../utils/img'
export default {
  components: {
    Cash,
    four,
    proprietary,
    logistics,
    dairy,
    imgSerialnumber: 0
  },
  data() {
    return {
      imgUrl: [], //图片的地址
      imgSrc: 0,
      isShowImg: true,
      only:'',
    };
  },
  created() {
    this.imgUrl = img.img();
  },
  mounted(){
     let imgSrc = this.imgSrc;
     let imgUrl = this.imgUrl;
     discoloration[imgSrc].src = imgUrl[imgSrc].hoverImg
  },
  methods: {
    showtime(index) {
      this._index = index
      this.imgSrc = index;
      let _imgUrl = this.imgUrl;
      let _imgSrc = this.imgSrc;
      // 判断前两个 
      !!(index === 0) && (discoloration[_imgSrc].src = _imgUrl[_imgSrc].hoverImg)
      if(index !== 0){
        discoloration[0].src = _imgUrl[0].icon
      } 
      !!(index === 1) && (discoloration[_imgSrc].src = _imgUrl[_imgSrc].hoverImg)
      if(index !== 1){
        discoloration[1].src = _imgUrl[1].icon
      } 
      !!(index === 2) && (discoloration[_imgSrc].src = _imgUrl[_imgSrc].hoverImg)
      if(index !== 2){
        discoloration[2].src = _imgUrl[2].icon
      } 
      !!(index === 3) && (discoloration[_imgSrc].src = _imgUrl[_imgSrc].hoverImg)
      if(index !== 3){
        discoloration[3].src = _imgUrl[3].icon
      } 
      !!(index === 4) && (discoloration[_imgSrc].src = _imgUrl[_imgSrc].hoverImg)
      if(index !== 4){
        discoloration[4].src = _imgUrl[4].icon
      } 
      !!(index === 5) && (discoloration[_imgSrc].src = _imgUrl[_imgSrc].hoverImg)
      if(index !== 5){
        discoloration[5].src = _imgUrl[5].icon
      } 
    },
    cancel(index) {
      this.isShowImg = true;
      let _imgUrl = this.imgUrl;
      let _imgSrc = this.imgSrc;
     
      // discoloration[_imgSrc].src = _imgUrl[_imgSrc].icon;

    }

  }
};
</script>

<style lang="stylus" scoped>
#laingqin_container {
  width: 100%;
  overflow: hidden;

  .edition_heart {
    width: 100%;
    position: relative;

    .edition_header {
      margin-top: 70px;

      >p {
        margin-left: 558px;
        font-weight: 400;
        color: #000000;
        font-size: 50px;
        font-family: 'SourceHanSansCN-Regular';
      }
    }

    .edition_details {
      margin-top: 5px;
      width: 831px;
      margin-left: 558px;

      >p {
        font-size: 33.33px;
        font-weight: 400;
        font-family: 'SourceHanSansCN-Regular';
        color: #000000;
        line-height: 50px;
      }
    }

    .img_container {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;

      .mobile {
        width: 355px;
        height: 700px;
        margin-left: 570px;

        >img {
          width: 355px;
          height: 700px;
        }
      }

      .icon_content {
        margin-right: 660px;
        line-height: 96px;

        .icon_title {
          width: 190px;
          display: flex;
          align-items: center;
          background-color: red;
          display: flex;
          justify-content: space-between;

          >img {
            width: 41px;
            height: 46px;
          }

          >p {
            font-size: 33px;
            font-family: 'Source Han Sans CN';
            font-weight: 500;
            color: rgba(125, 125, 125, 1);
            text-align: left;
          }
        }
      }
    }

    .white_content {
      width: 100%;
      height: 50px;
      background-color: #fff;
    }
  }

  .delivery_container {
    width: 100%;
    height: 600px;
    background-color: #FFAD60;

    .jiange {
      width: 100%;
      height: 36px;
    }

    .delivery_header {
      text-align: center;

      >p {
        font-size: 50px;
        font-family: 'SourceHanSansCN-Regular';
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    .map_content {
      display: flex;
      justify-content: space-between;

      .map_detail {
        margin-top: 20px;
        margin-left: 350px;
      }

      .explain {
        margin-top: 110px;
        margin-right: 412px;
        display: flex;
        justify-content: space-between;

        .distributed {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 100px;
          margin-right: 60px;
          display: flex;
          align-items: center;

          >.img_three {
            width: 72px;
            height: 62px;
          }

          .first {
            margin-top: 13px;
            font-family: 'SourceHanSansCN-Regular';
            font-weight: 400;
            font-size: 20.83px;
            color: #fff;
          }
          .subscribers{
            font-size:21px;
            font-family:"Source Han Sans CN";
            font-weight:400;
            color:rgba(255,255,255,1);
            margin-top 19%
          }
          .last {
            font-family: 'SourceHanSansCN-Medium';
            font-size: 33.33px;
            color: #fff;
            font-size: 33px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}

.title_icon {
  margin-right: 628px;
}

.title_swiper {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top 50%
}

.title_child {
  width: 210px;
  height: 51px;
  display: flex;
  align-items: center;
}

 .title_child >.active {
  color #FFAD60
  transform: scale(1.1);
  cursor: pointer;
}
#box:hover>img {
  transform: scale(1.2);
}

.title_child >p {
  font-size: 33px;
  font-family: 'Source Han Sans CN';
  font-weight: 500;
  color: rgba(125, 125, 125, 1);
}

.title_child > img {
  width: 51px;
  height: 51px;
  margin-right: 20px;
}

.delivery_container >.map_content >.map_detail > .img_setting {
  width: 562px;
  height: 462px;
}

.imgSize {
  width: 317px;
  height: 678px;
  position: absolute;
  left: 30.6%;
  top: 30.6%;
  border-radius: 5%;
}

.icon_content >.icon_title p:hover {
  color: #FFAD60;
}

.explain >.distributed >.img_one {
  width: 60;
  height: 58px;
  display: block;
}

.explain >.distributed >.img_two {
  width: 63px;
  height: 61px;
  display: block;
}
</style>
