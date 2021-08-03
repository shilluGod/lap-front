<template>
  <div>
    <div style="display: flex; justify-content: center;margin-top: 10px">        <!--shillu: 这就居中了，回头再来看看-->
      <el-input v-model="keywords" placeholder="通过用户民搜索用户..." prefix-icon="el-icon-search" style="width: 400px;margin-top: 10px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="doSearch" size="small">搜索</el-button>
    </div>
    <div style="margin: 10px auto; width: 1000px;">
      <div>
        <el-table
            :data="users"
            border
            stripe
            size="small"
            style="width: 70%">
          <el-table-column
              prop="id"
              label="编号"
              width="55">
          </el-table-column>
          <el-table-column
              prop="name"
              label="名称"
              width="120">
          </el-table-column>
          <el-table-column
              prop="username"
              label="用户名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="phone"
              label="联系方式"
              width="120">
          </el-table-column>
          <el-table-column
              prop="remark"
              label="备注"
              width="120">
          </el-table-column>
          <el-table-column
              label="状态"
              width="80">
            <div>
              <el-switch
                  v-model="users.enabled"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  @change="enabledChange(users)">
              </el-switch>
            </div>
          </el-table-column>
          <el-table-column
              label="操作">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  type="danger"
                  @click="deleteUser(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SysUsers",
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
