<template>
  <div>
    <div>
      <!--<el-upload
              action="/system/file/upload"
              :headers="headers"
              :data="file"
              :show-file-list="false"
              :on-success="onSuccess">
          <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
      </el-upload>-->
      <el-upload
          class="upload-demo"
          ref="upload"
          :headers="headers"
          :data="file"
          action="/util/fileShare/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
          :on-success="onSuccess">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      </el-upload>
    </div>
    <div class="ecManaMain">
      <el-table
          :data="fileShare"
          border
          stripe
          size="small"
          style="width: 70%">
        <el-table-column
            prop="id"
            label="编号"
            width="50">
        </el-table-column>
        <el-table-column
            prop="filename"
            label="文件名称"
            width="100">
        </el-table-column>
        <el-table-column
            prop="groupname"
            label="组名"
            width="100">
        </el-table-column>
        <el-table-column
            prop="remotename"
            label="远程文件名"
            width="220">
        </el-table-column>
        <el-table-column
            prop="filePath"
            label="地址"
            width="220">
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleDownload(scope.$index, scope.row)">下载
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>

</template>

<script>
export default {
  name: "UtilFileShare",
  data() {
    return {
      headers: {
        Authorization: window.sessionStorage.getItem('tokenStr')
      },
      file: null,
      ec: {
        file: ''
      },
      fileShare: [],
      dialogVisible: false,
      updatePos: {
        name: ''
      },
      multipleSelection: [],
    }
  },
  mounted() {
    this.initFileShare();
  },
  methods:{
    submitUpload(){
      this.$refs.upload.submit();
    },
    onSuccess(){
      this.initFileShare();
    },
    initFileShare(){
      this.getRequest('/util/fileShare/').then(resp => {
        if (resp) {
          this.fileShare = resp;
        }
      })
    },
    handleDelete(index, data) {
      this.$confirm('此操作将永久删除该【' + data.filename + '】文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteRequest('/util/fileShare/'+data.id).then(resp=>
        {
          if (resp){
            this.initFileShare();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
  }
}
</script>

<style scoped>
.ecManaMain {
  margin-top: 20px;
}

.button_right {
  justify-content: right;
}
</style>

