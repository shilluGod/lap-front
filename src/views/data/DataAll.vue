<template>
  <div>
    <div style="display: flex;justify-content: space-between">
      <div>
        <el-input style="width: 300px;margin-right: 10px" prefix-icon="el-icon-search"
                  placeholder="请输入乡村名称进行搜索"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <!--<el-button type="primary">
          <i class="fa fa-angle-double-down" aria-hidden="true"></i>
          高级搜索
        </el-button>-->
      </div>
    </div>
    <!--<el-row>
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px'}" shadow="hover">
          <img src="@/assets/2.png" alt="" style="width: 100%;display: block">
          <div style="padding: 14px;">
            <span>常口村</span>
            <div>
              <span style="font-size: 13px;color: #999">福建省三明市</span>
              <el-button type="text" class="button" @click="dialogTableVisible = true">详情</el-button>
              &lt;!&ndash;详情页面,表格内容&ndash;&gt;
              <el-dialog :visible.sync="dialogTableVisible" center>
                <el-table :data="gridData"  @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column property="mold" label="类型" width="150"></el-table-column>
                  <el-table-column property="explain" label="说明" width="200"></el-table-column>
                  <el-table-column
                      prop="tag"
                      label="状态"
                      width="100"
                      :filters="[{ text: '未上传', value: '未上传' }, { text: '已完成', value: '已完成' }]"
                      :filter-method="filterTag"
                      filter-placement="bottom-end">
                    <template slot-scope="scope">
                      <el-tag
                          :type="scope.row.tag === '未上传' ? 'info' : 'success'"
                          disable-transitions>{{ scope.row.tag }}
                      </el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                      <el-button type="text" size="small">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-dialog>
              <el-button type="text" class="button" style="margin-right: 10px">去评价</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>-->

    <div class="country-container">
      <el-card class="country-card" v-for = "(country, index) in countrys" :key="index">
        <div style="background: blue">
          <img src="@/assets/1.png" alt="" style="width: 100%;display: block">
        </div>
        <br>
        <div class="countryInfo-container">
          <el-row type="flex" align="bottom">
            <el-col :span="14">
              <div>
              <div>{{country.countryName}}</div>
              <div>{{country.province}}省{{country.city}}市</div>
            </div>
            </el-col>


            <el-col :span="10">
              <div>
                <el-button type="text" class="button">详情</el-button>
                <el-button type="text" class="button" style="margin-right: 10px">去评价</el-button>
              </div>
            </el-col>
          </el-row>

        </div>
      </el-card>
    </div>

    <!--第二行-->
    <!--<el-row>
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px'}" shadow="hover">
          <img src="@/assets/1.png" alt="" style="width: 100%;display: block">
          <div style="padding: 14px;">
            <span>常口村</span>
            <div>
              <span style="font-size: 13px;color: #999">福建省三明市</span>
              <el-button type="text" class="button">详情</el-button>
              <el-button type="text" class="button" style="margin-right: 10px">去评价</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>-->
    <!--页码设置-->
    <!--<div class="pageView">
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100">
      </el-pagination>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "DataAll",
  data() {
    return {
      countrys: [],
      keywords: '',


      currentPage4: 4,
      gridData: [{
        mold: '山体位图',
        explain: '对山体图的介绍',
        tag: '未上传'
      }, {
        mold: '山体图层',
        explain: '对山体图层的介绍',
        tag: '已完成'
      }, {
        mold: '山体矢量图',
        explain: '对山体矢量的介绍',
        tag: '已完成'
      }, {
        mold: '山体高层模型图',
        explain: '对山体高层模型图的介绍',
        tag: '未上传'
      }, {
        mold: '乡村路网图',
        explain: '对乡村路网的介绍',
        tag: '未上传'
      }, {
        mold: '乡村植物数据表',
        explain: '对乡村植物的介绍',
        tag: '已完成'
      }],
      dialogTableVisible: false,
    }
  },

  mounted() {
    this.initCountrys();
  },

  methods: {

    initCountrys() {
      this.getRequest('/countryData/all/?keywords' + this.keywords).then(resp=> {
        if (resp) {
          this.countrys = resp;
        }
      })
    },




    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      console.log(row);
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style scoped>

.country-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
}

.country-card {
  width: 300px;
  margin-bottom: 20px;
}

.countryInfo-container {
  font-size: 14px;
}

.el-card {
  margin-top: 20px;
}

.button {
  float: right;
  padding: 0;
}

.pageView {
  margin: 30px;
  text-align: center;
}
</style>
