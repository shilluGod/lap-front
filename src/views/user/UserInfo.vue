<template>
  <!--个人中心-->
  <div style="overflow:hidden;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{user.username}}</span><span style="font-size: 12px;color: #808080;margin-left: 10px">({{user.name}})</span>
        <el-button @click="handleEdit" style="float: right; padding: 3px 0" type="text" icon="el-icon-edit" title="编辑"></el-button>
      </div>
      <div>
        <!--用户头像-->
        <div class="user_avatar">
          <el-avatar :size="85" :src="user.userFace" title="点击修改用户头像">
            <img :src="user.userFace" class="user_face"/>
          </el-avatar>
        </div>

        <!--用户详细信息-->
        <ul class="user_info_ul">
          <li>性别：<el-tag size="small">{{user.gender == 1 ? '男' : '女'}}</el-tag></li>
          <li>电话号码：<el-tag size="small">{{user.phone}}</el-tag></li>
          <li>年龄：<el-tag size="small">{{user.age}}</el-tag></li>
          <li>角色：<el-tag v-for="(item,i) in user.roles" :key="i" type="success" size="small">{{item.name}}</el-tag></li>
          <li>权限：<el-tag v-for="(item,i) in user.authorities" :key="i" type="warning" size="small">{{item.authority}}</el-tag></li>
        </ul>
      </div>
      <!--<el-button @click="updatePwd" type="danger" size="small" style="float: right">修改密码</el-button>-->
    </el-card>

    <!--修改用户信息对话框-->
    <el-dialog
        title="编辑用户信息"
        :visible.sync="UserDialogVisible"
        width="30%">
      <div>
        <el-form :model="updateUser" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="登录姓名:" prop="username">
            <el-input v-model="updateUser.username" size="small"></el-input>
          </el-form-item>
          <el-form-item label="用户姓名:" prop="name">
            <el-input v-model="updateUser.name" size="small"></el-input>
          </el-form-item>
          <el-form-item label="备注:" prop="remark">
            <el-input v-model="updateUser.age" size="small"></el-input>
          </el-form-item>
          <el-form-item label="电话号码:" prop="telephone">
            <el-input v-model="updateUser.telephone" size="small"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="UserDialogVisible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="userDialogSubmit" size="small">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data(){
    return {
      user: {},
      updateUser: {},
      UserDialogVisible: false,
      rules: {
        username:[{required:true,message:"请输入登录名",trigger:"change"}],
        name:[{required:true,message:"请输入用户名",trigger:"change"}],
        age:[{required:true,message:"请输入备注",trigger:"change"}],
        telephone:[{required:true,message:"请输入联系电话",trigger:"change"}],
      }
    }
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    //初始化数据
    getUserInfo(){
      this.getRequest('/user/info').then(resp => {
        if(resp){
          this.user = resp;
        }
      })
    },
    //修改用户信息
    handleEdit(){

      this.getRequest('/user/info').then(resp => {
        if(resp){
          this.updateUser = resp;
          this.UserDialogVisible = true;
        }
      })

    },
    //提交用户信息
    userDialogSubmit(){
      this.$refs['ruleForm'].validate(valid => {
        if(valid){
          this.putRequest('/system/user/updateUser',this.updateUser).then(resp => {
            if(resp){
              this.UserDialogVisible = false;
              this.getUserInfo();
            }
          })
        }
      })
    },
    //修改密码
    updatePwd(){

    }
  }
}
</script>

<style scoped>
/*用户信息卡片*/
.box-card{
  width: 600px;
  margin: 30px auto;
  padding: 10px;
}

/*展示用户具体信息ul*/
.user_info_ul{
  list-style: none;
}
.user_info_ul li{
  margin-bottom: 20px;
}

.user_avatar{
  cursor: pointer;
  display: flex;
  justify-content: center;
}
/*用户头像*/
.user_face{
}
</style>

