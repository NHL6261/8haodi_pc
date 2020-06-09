<template>
  <div id="win_container">
    <div class="input_container">
      <div class="input_header">
        <p>新零售时代我们携手共赢加入我们 共同成长</p>
      </div>
      <div class="input_statistics">
        <el-form
          :model="JoinForm"
          :rules="Join_Rules"
          ref="JoinForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="姓名:" prop="fName">
            <el-input v-model="JoinForm.fName" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系电话:" prop="fPhone">
            <el-input v-model="JoinForm.fPhone" placeholder="请输入您的联系电话"></el-input>
          </el-form-item>
          <el-form-item label="申请选项:" prop="fPost" :style="'width:100%'">
            <el-select v-model="JoinForm.fPost" placeholder="请输入您的申请选项">
              <el-option label="自营产品代理" value="自营产品代理"></el-option>
              <el-option label="云服务收银系统及App商城代理" value="云服务收银系统及App商城代理"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="输入城市:" prop="post">
            <el-input v-model="JoinForm.fCity" placeholder="请输入您的城市"></el-input>
          </el-form-item>
          <el-form-item label="留言:" prop="personal_profile">
            <el-input type="textarea" v-model="JoinForm.text"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <!-- Grow together -->
            <!-- Testing_data = true -->
            <el-button type="warning" size="medium" @click="growtogether">立即申请</el-button>
            <p class="contact">您的信息将被严格保密，信息提交后，客服会近期与您联系，请留意接听电话</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Message } from "element-ui";
export default {
  data() {
    //   自定义验证规则
    var Name = (rule, value, callback) => {
      const regNmae = /^[\u4e00-\u9fa5]{2,12}$/;
      if (regNmae.test(value)) {
        return callback();
      } else {
        callback(new Error("请输入正确的姓名!"));
      }
    };
    var Post = (rule, value, callback) => {
      const regNmae = /^[\u4e00-\u9fa5]$/;
      if (regNmae.test(value)) {
        return callback();
      } else {
        callback(new Error("请选择正确的申请选项!"));
      }
    };
    var checkMobil = (rule, value, callback) => {
      // 验证手机号的正则表达式
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        return callback();
      } else {
        callback(new Error("请输入正确的手机号!"));
      }
    };
    return {
      JoinForm: {
        fName: "", // 姓名
        fPost: "", // 岗位选择
        fPhone: "", //电话
        fCity: "", //城市选择
        text: "", //个人简介
        fType: 1
      },
      Testing_data: false,
      // 获取登录信息
      UserInfo: [], // 用户登录正确
      SavaToken: "", // 保存token
      // 表单的验证规则
      Join_Rules: {
        // 姓名验证
        fName: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { validator: Name, trigger: "blur" }
        ],
        // 用户密码验证
        fPhone: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          { validator: checkMobil, trigger: "blur" }
        ],
        // 申请选项验证
        fPost: [
          { required: true, message: "请输入您的申请选项", trigger: ["blur",'change'] },
        ]
      }
    };
  },
  methods: {
    growtogether() {
      let { fName, fPhone, fCity, fPost, text, fType } = this.JoinForm;
      // 前端验证
      this.$refs.JoinForm.validate(async valid => {
        if (!valid) {
          Message.error("请检查您的信息准确性!");
        } else {
          const loading = this.$loading({
            lock: true,
            text: "正在提交申请,请耐心等待",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          let result = await this.$HTTP.getGrowInfo({
            fName,
            fPhone,
            fCity,
            fPost,
            text,
            fType
          });
          if (result.status === 200) {
            loading.close();
            Message.success("提交成功!");
            this.$refs.JoinForm.resetFields()
            this.JoinForm.fCity = ''
            this.JoinForm.text = ''
          } else {
            Message.error("网络开小差了~");
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#win_container {
  width: 100%;
  height: 700px;
  background-image: url("../assets/images/申请背景-pc.png");
  background-size: 100% 700px;
}
.input_container {
  width: 100%;
  height: 100%;
}
.input_header {
  width: 100%;
  height: 121px;
  padding: 86px 0 0 0;
  box-sizing: border-box;
  text-align: center;
}
.input_header > p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.input_statistics {
  width: 100%;
  height: 500px;
  padding: 68px 680px 77px 557px;
  box-sizing: border-box;
}
.el-select {
  width: 100%;
}
.btns {
  width: 100%;
  text-align: center;
}
.contact {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.el-form-item__label {
  width: 104px;
  height: 24px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
