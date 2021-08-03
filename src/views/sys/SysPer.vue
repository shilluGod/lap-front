<template>
  <div>
    <div class="permissionManaTool" style="display: flex; justify-content: center;margin-top: 10px">
      <el-input size="small" placeholder="请输入角色英文名" v-model="role.name">
        <template slot="prepend">ROLE_</template>
      </el-input>
      <el-input size="small" v-model="role.nameZh" placeholder="请输入角色中文名" @keydown.enter.native = "doAddRole"></el-input>
      <el-button type="primary" size="small" icon="el-icon-plus" @click="doAddRole">添加角色</el-button>
    </div>
    <div class="permissionManaMain">
    <!--<div style="width: 1000px; margin: 30px auto">-->
      <el-collapse v-model="activeName" accordion @change="change">
        <el-collapse-item :title="r.nameZh" :name="r.id" v-for="(r,index) in roles" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>可访问资源</span>
              <el-button style="float: right; padding: 3px 0;color: #ff0000" icon="el-icon-delete"
                         type="text" @click="doDeleteRole(r)"></el-button>
            </div>
            <div>
              <el-tree
                  show-checkbox
                  node-key="id"
                  :key="index"
                  ref="tree"
                  :default-checked-keys="selectedMenus"
                  :data="allMenus" :props="defaultProps">
              </el-tree>
            </div>
            <div style="display: flex;justify-content: flex-end">
              <el-button @click="cancelUpdate">取消修改</el-button>
              <el-button type="primary" @click="doUpdate(r.id,index)">确认修改</el-button>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "SysPer",
  data() {
    return {
      role: {
        name: '',
        nameZh: ''
      },
      activeName: -1,
      roles: [],
      allMenus: [],
      selectedMenus: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  mounted() {
    this.initRoles();
  },
  methods: {
    doDeleteRole(role) {
      this.$confirm('此操作将永久删除该【' + role.nameZh + '】角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteRequest('/system/permission/role/' +
            role.id).then(resp => {
          if (resp) {
            this.initRoles();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    doAddRole() {
      if (this.role.name && this.role.nameZh) {

        this.postRequest('/system/permission/role', this.role).then(resp => {
          if (resp) {
            this.name = '';
            this.nameZh = '';
            this.initRoles();
          }
        })
      } else {
        this.$message.error('字段不能为空!');
      }
    },
    cancelUpdate() {
      this.activeName = -1;
    },
    doUpdate(rid, index) {
      let tree = this.$refs.tree[index];
      let selectedKeys = tree.getCheckedKeys(true);
      let url = '/system/permission/?rid=' + rid;
      selectedKeys.forEach(key => {
        url += '&mids=' + key;
      })
      this.putRequest(url).then(resp => {
        if (resp) {
          // this.initRoles();
          this.activeName = -1;
        }
      })
    },
    change(rid) {
      if (rid) {
        this.initAllMenus();
        this.initSelectedMenus(rid);
      }
    },
    initSelectedMenus(rid) {
      this.getRequest('/system/permission/mid/' + rid).then(resp => {
        this.selectedMenus = resp;
      })
    },
    initAllMenus() {
      this.getRequest('/system/permission/menus').then(resp => {
        this.allMenus = resp;
      })
    },
    initRoles() {
      this.getRequest('/system/permission/').then(resp => {
        if (resp) {
          this.roles = resp;
        }
      })
    }
  }
}
</script>

<style>
.permissionManaTool {
  display: flex;     /*弹性布局*/
  justify-content: flex-start;
}

.permissionManaTool .el-input {
  width: 300px;
  margin-right: 6px;
}

.permissionManaMain {
  width: 1000px;
  margin: 30px auto
  /*这里为什么用margin: auto来居中呢，就是因为width和justify-content: center会冲突*/
}
</style>
