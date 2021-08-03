<template>
  <div>
    <div style="display: flex; justify-content: center;margin-top: 10px">        <!--shillu: 这就居中了，回头再来看看-->
      <el-input v-model="keywords" placeholder="通过用户民搜索用户..." prefix-icon="el-icon-search" style="width: 400px;margin-top: 10px"></el-input>
      <el-button type="primary" icon="el-icon-search" size="mini" @click="doSearch" >搜索</el-button>
    </div>
    <div class="user-container">
      <el-card class="user-card" v-for="(user,index) in users" :key="index">
        <div slot="header" class="clearfix">
          <span>{{user.name}}</span>
          <el-button style="float: right; padding: 3px 0;color: red" type="text" icon="el-icon-delete" @click="deleteUser(user)"></el-button>
        </div>
        <div>
          <div class="img-container">
            <img :src="user.userFace" :alt="user.name" :title="user.name" class="userface-img">
          </div>
        </div>
        <div class="userinfo-container">
          <div>用户名:{{user.name}}</div>
          <div>用户名:{{user.username}}</div>
          <div>手机号码:{{user.phone}}</div>

          <div>用户状态:
            <el-switch
                v-model="user.enabled"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="enabledChange(user)"
                active-text="启动"
                inactive-text="禁用">
            </el-switch>
          </div>
          <div>
            用户角色：
            <el-tag style="margin-right: 4px" type="success" v-for="(role,indexj) in user.roles" :key="indexj">{{role.nameZh}}</el-tag>
            <el-popover
                placement="right"
                title="角色列表"
                width="200"
                trigger="click">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in allRoles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
              <el-button slot="reference" type="text" icon="el-icon-more"></el-button>
            </el-popover>

          </div>
          <div>
            备注: {{user.remark}}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SysUser",
  data(){
    return{
      users:[],
      keywords:'',
      allRoles:[],        // 做到更新获取所有角色，发现后端没做好
    }
  },
  mounted() {
    this.initUsers()
  },
  methods:{
    enabledChange(user){
      this.putRequest('/system/user/',user).then(resp=>{
        if (resp){
          this.initUsers();
        }
      })
    },
    deleteUser(user){
      this.$confirm('此操作将永久删除该【'+user.name+'】 操作员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteUser('/system/user/' + user.id).then(resp=>{
          if (resp){
            this.initUsers();
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    doSearch(){
      this.initUsers();
    },
    initUsers(){
      this.getRequest('/system/user/?keywords=' + this.keywords).then(resp=>{
        if (resp){
          this.users = resp;
        }
      })
    }
  }
}
</script>

<style>
.user-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
}

.user-card {
  width: 350px;
  margin-bottom: 20px;
}

.userface-img {
  width: 72px;
  height: 72px;
  border-radius: 72px;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.userinfo-container{
  font-size: 12px;
  color: #409eff;
}

</style>

