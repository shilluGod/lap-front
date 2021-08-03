<template xmlns:z-index="http://www.w3.org/1999/xhtml">
  <div>
    <!-- 头部区域 + 轮播图 -->
    <div>
      <!--<div class="header_c" style="margin-left: 20px;background: #5daf34">
        景观参数化设计
        <el-button type="text" style="float: right;padding-top: 30px">注册</el-button>
        <span style="float: right;padding: 2px;color: #409EFF">|</span>
        <el-button type="text" style="float: right;padding-top: 30px" @click="dialogFormVisible = true">登录</el-button>
        <div class="loginContainer">
        <el-dialog :visible.sync="dialogFormVisible" width="500px" center>
          <el-form :rules="rules"
                   v-loading="loading"
                   element-loading-text="正在登录"
                   element-loading-spinner="el-icon-loading"
                   element-loading-background="rgba(0, 0, 0, 0.8)"
                   ref="loginForm"
                   :model="loginForm">
            <h2 class="loginTitle">系统登录</h2>
            <el-form-item prop="username">
              <el-input type="text" auto-complete="false"  v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width: 250px;margin-right: 5px;"></el-input>
              <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>
            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
          </el-form>
        </el-dialog>
        </div>
      </div>-->

      <!-- 表头 -->
      <!--<div>
        <el-row :gutter="20" style="z-index: 1000; position: absolute; white-space: nowrap;">
          <el-col :span="5" style="background: #3a8ee6">
            <div>
              <img src="@/assets/12.png" style="max-width: 100%; max-height: 100%">
            </div>
          </el-col>
          <el-col :span="10" style="background: #303133">
          </el-col>
          <el-col :span="5" style="background: #dd6161">
            &lt;!&ndash;<div style="position: absolute; white-space: nowrap; background: #5daf34">
              <el-button type="text" style="float: right;padding-top: 30px">注册</el-button>
              <span style="float: right;padding: 2px;color: #409EFF">|</span>
              <el-button type="text" style="float: right;padding-top: 30px" @click="dialogFormVisible = true">登录
              </el-button>

              <div class="loginContainer">
                <el-dialog :visible.sync="dialogFormVisible" width="500px" center>
                  <el-form :rules="rules"
                           v-loading="loading"
                           element-loading-text="正在登录"
                           element-loading-spinner="el-icon-loading"
                           element-loading-background="rgba(0, 0, 0, 0.8)"
                           ref="loginForm"
                           :model="loginForm">
                    <h2 class="loginTitle">系统登录</h2>
                    <el-form-item prop="username">
                      <el-input type="text" auto-complete="false" v-model="loginForm.username"
                                placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-input type="password" auto-complete="false" v-model="loginForm.password"
                                placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                      <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码"
                                style="width: 250px;margin-right: 5px;"></el-input>
                      <img :src="captchaUrl" @click="updateCaptcha">
                    </el-form-item>
                    <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
                    <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
                  </el-form>
                </el-dialog>
              </div>
            </div>&ndash;&gt;
          </el-col>
        </el-row>
      </div>-->

      <!-- 表头 -->
      <div>
        <el-row :gutter="24">
          <el-col :span="6" style="z-index: 1000; position: absolute; white-space: nowrap;">
            <div>
              <img src="@/assets/12.png" style="max-width: 100%; max-height: 100%">
            </div>
          </el-col>
          <el-col :span="7" :offset="16" style="z-index: 1000; position: absolute; white-space: nowrap;">
            <div>
            <el-button type="text" style="float: right;padding-top: 30px">注册</el-button>
            <span style="float: right;padding: 25px;color: #409EFF;">|</span>
            <el-button type="text" style="float: right;padding-top: 30px" @click="dialogFormVisible = true">登录
            </el-button>
          </div>
          </el-col>
        </el-row>

        <!-- 登陆注册弹窗 -->
        <div class="loginContainer">
          <el-dialog :visible.sync="dialogFormVisible" width="500px" center>
            <el-form :rules="rules"
                     v-loading="loading"
                     element-loading-text="正在登录"
                     element-loading-spinner="el-icon-loading"
                     element-loading-background="rgba(0, 0, 0, 0.8)"
                     ref="loginForm"
                     :model="loginForm">
              <h2 class="loginTitle">系统登录</h2>
              <el-form-item prop="username">
                <el-input type="text" auto-complete="false"  v-model="loginForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width: 250px;margin-right: 5px;"></el-input>
                <img :src="captchaUrl" @click="updateCaptcha">
              </el-form-item>
              <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
              <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
            </el-form>
          </el-dialog>
        </div>

        <!-- 轮播图 -->
        <el-carousel :interval="5000" arrow="always" :height="bannerHeight+'px'" style="border: 1px solid white;">
          <el-carousel-item v-for="item in 4" :key="item">
            <el-row :gutter="20">   <!--原来是12-->
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height:340px;margin-bottom: 20px;">
                <img ref="bannerHeight" src="@/assets/11.png" alt="" @load="imgLoad" style="width: 100%">
                <img ref="bannerHeight" src="@/assets/11.png" alt="" @load="imgLoad" style="width: 100%">
                <img ref="bannerHeight" src="@/assets/11.png" alt="" @load="imgLoad" style="width: 100%">
                <img ref="bannerHeight" src="@/assets/11.png" alt="" @load="imgLoad" style="width: 100%">
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 介绍区域 -->
    <div>
      <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="4">
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" style="text-align: left">
            <!--&lt;!&ndash;文字居中还得是 text-align: center &ndash;&gt;-->
            <p style="font-family: Arial;font-size: 35px"><strong><i>为什么选择参数化设计平台？</i></strong></p>
            <p style="font-family: Arial;font-size: 30px"><strong>整合您已经使用的技术</strong></p>
            <p style="font-family: 微软雅黑;font-size: 20px">开箱即用地使用流行的框架和工具。</p>
            <p style="font-family: 微软雅黑;font-size: 20px">专注于构建功能，而不是自己配置不同的组件。</p>
            <p style="font-family: 微软雅黑;font-size: 20px">整合了WebGis组件，提供完善的Gis组件。</p>
            <p style="font-family: 微软雅黑;font-size: 20px">专注于构建功能，而不是增加使用成本</p>
          </div>
        </el-col>
        <el-col :span="2">
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple" style="text-align: center">
            <img src="@/assets/icon1.png" alt="">
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple" style="text-align: center">
            <img src="@/assets/icon2.png" alt="">
          </div>
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="4">
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" style="text-align: left">
            <!--&lt;!&ndash;文字居中还得是 text-align: center &ndash;&gt;-->
            <p style="font-family: Arial;font-size: 30px"><strong>提供完备的乡村评价</strong></p>
            <p style="font-family: 微软雅黑;font-size: 20px">针对任何风格迥异的乡村，</p>
            <p style="font-family: 微软雅黑;font-size: 20px">提供一套完善的评价模式，</p>
            <p style="font-family: 微软雅黑;font-size: 20px">综合客观的参数与Gis的结合来达到可靠的结果</p>
            <p style="font-family: Arial;font-size: 30px"><strong>在线生成评价结果</strong></p>
            <p style="font-family: 微软雅黑;font-size: 20px">即时生成评价结果，以及评价建议，</p>
            <p style="font-family: 微软雅黑;font-size: 20px">为乡村提供完善的评价体系外，针对各个乡村形成优化建议</p>
          </div>
        </el-col>
        <el-col :span="2">
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple" style="text-align: center">
            <img src="@/assets/icon3.png" alt="">
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple" style="text-align: center">
            <img src="@/assets/icon4.png" alt="">
          </div>
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>
    </div>

    <br>
    <br>
    <br>

    <!-- 具体详情 -->
    <div style="background: #FAFAFD">
      <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="3">
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="text-align: center">
            <!--&lt;!&ndash;文字居中还得是 text-align: center &ndash;&gt;-->
            <p style="font-family: Arial;font-size: 36px"><strong><i>构建乡村数据</i></strong></p>
          </div>
        </el-col>
        <el-col :span="1">
        </el-col>
        <el-col :span="9">
          <div class="grid-content bg-purple" style="text-align: center">
            <img src="@/assets/icon5.png" alt="">
          </div>
        </el-col>
        <el-col :span="3">
        </el-col>
      </el-row>

      <br>
      <br>
      <br>


      <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="3">
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="text-align: center">
            <!--&lt;!&ndash;文字居中还得是 text-align: center &ndash;&gt;-->
            <p style="font-family: Arial;font-size: 36px"><strong><i>乡村评价系统</i></strong></p>
            <p style="font-family: 微软雅黑;font-size: 26px">多种评价模式</p>
            <p style="font-family: 微软雅黑;font-size: 26px">多种评价指标</p>
            <p style="font-family: 微软雅黑;font-size: 26px">多种评价参数</p>
          </div>
        </el-col>
        <el-col :span="1">
        </el-col>
        <el-col :span="9">
          <div class="grid-content bg-purple" style="text-align: center">
            <img src="@/assets/icon6.png" alt="">
          </div>
        </el-col>
        <el-col :span="3">
        </el-col>
      </el-row>


      <br>
      <br>
      <br>

      <!-- 参数化评价 -->
      <div style="font-family: Arial;font-size: 36px;text-align: center">
        <p><strong><i>参数化评价</i></strong></p>
      </div>
      <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="3">
        </el-col>
        <el-col :span="4">
          <el-card style="background: white; text-align: center">
            <img src="@/assets/icon8.png" style="max-height: 50%; max-width: 50%;text-align: center">

            <br>

            <div style="padding: 14px;">
              <div style="font-family: Arial;font-size: 23px;text-align: center">
                <p><strong>指标</strong></p>
              </div>



              <div style="font-family: Arial;font-size: 16px;text-align: center">
                <p>指标是针对乡村而演化的几个重点评价方向，其中包括山体、水质、文化以及景观等。</p>
              </div>


              <div class="bottom clearfix" style="text-align: center">
                <el-button>开始</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card style="background: #1B2448; text-align: center">
            <img src="@/assets/icon9.png" style="max-height: 50%; max-width: 50%;text-align: center">

            <br>

            <div style="padding: 14px;">
              <div style="font-family: Arial;font-size: 23px;text-align: center;color: white">
                <p><strong>评价报告</strong></p>
              </div>



              <div style="font-family: Arial;font-size: 16px;text-align: center;color: white">
                <p>针对乡村特性生成评价报告的结果，以及评价建议，为乡村提供完善的评价体系外，针对各个乡村形成优化建议。</p>
              </div>


              <div class="bottom clearfix" style="text-align: center">
                <el-button>生成</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card style="background: white; text-align: center">
            <img src="@/assets/icon3.png" style="max-height: 50%; max-width: 50%;text-align: center">

            <br>

            <div style="padding: 14px;">
              <div style="font-family: Arial;font-size: 23px;text-align: center">
                <p><strong>WebGIS</strong></p>
              </div>



              <div style="font-family: Arial;font-size: 16px;text-align: center">
                <p>WebGIS是指工作在Web网上的GIS,是传统的GIS在网络上的延伸和发展，具有传统GIS的特点，可以实现空间数据的检索、查询、制图输出、编辑等GIS基本功能。</p>
              </div>


              <div class="bottom clearfix" style="text-align: center">
                <el-button>学习</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="3">
        </el-col>
      </el-row>


      <br>
      <br>
      <br>
    </div>


    <!-- footer -->
    <el-row :gutter="20" type="flex" justify="center" align="middle">
      <div class="grid-content" style="text-align: center">   <!--&lt;!&ndash;文字居中还得是 text-align: center &ndash;&gt;-->
        <p style="font-family: Arial;font-size: 20px"><strong>天津城建大学</strong></p>
      </div>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" align="middle">
      <div class="grid-content" style="text-align: center">   <!--&lt;!&ndash;文字居中还得是 text-align: center &ndash;&gt;-->
        <p style="font-family: Arial;font-size: 15px">@2021 Tianjin Chengjian University</p>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      bannerHeight: "",
      imgUrls: [
        {id: 0, idView: require('@/assets/11.png')},
        {id: 1, idView: require('@/assets/11.png')},
        {id: 2, idView: require('@/assets/11.png')},
        {id: 3, idView: require('@/assets/11.png')},
        {id: 4, idView: require('@/assets/11.png')},
      ],

      dialogFormVisible: false,
      captchaUrl: '/captcha?time=' + new Date(),
      loginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      loading: false,
      checked: true,
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
      }
    }
  },
  mounted() {
    this.imgLoad();
    window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.bannerHeight[0].height;
      this.imgLoad();
    }, false)
  },
  methods: {
    updateCaptcha() {
      this.captchaUrl = '/captcha?time' + new Date();
    },
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        console.log(this.$refs.bannerHeight[0].height);
      })
    },
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.postRequest('/login', this.loginForm).then(resp => {
            // alert(JSON.stringify(resp));
            if (resp) {
              this.loading = false;
              //存储用户token
              const tokenStr = resp.object.tokenHead + resp.object.token;
              window.sessionStorage.setItem('tokenStr', tokenStr);
              //页面跳转
              let path = this.$route.query.redirect;
              this.$router.replace((path == '/' || path == undefined) ? '/home' : path);
            }
          })
        } else {
          this.$message.error('请输入所有字段');
          return false;
        }
      });
    }
  }
}
</script>

<style>
/*layout布局*/
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  /*background: #d3dce6;*/
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}


.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}


.loginContainer {
  line-height: 40px;
}

.loginTitle {
  margin: 0 auto 5px auto;
  text-align: center;
}

.loginRemember {
  text-align: left;
  margin: 0;
}

.el-form-item__content {
  display: flex;
  align-items: center;
}

/*版心*/
/*.innerCenter{*/
/*  width: 1140px;*/
/*  margin: 0 auto;*/
/*}*/
.header {
  height: 68px;
  border-bottom: 1px solid #E2E2E2;
  box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background-color: #f4f4f5;
}

h3 {
  margin: 0;
}

.header_c {
  height: 68px;
  width: 1140px;
  line-height: 68px;
  font-size: 20px;
  font-family: 华文楷体;
  margin: 0 auto;
}

.banner {
  height: 600px;
  position: relative;
}

.banner ul li a img {
  width: 100%;
  height: 600px;
}

.banner ul {
  margin-block-start: 0;
  margin-block-end: 0;
}

.banner ul li {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.banner ul li.cur {
  display: block;
}
</style>
