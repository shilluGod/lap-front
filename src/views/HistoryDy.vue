<template>
  <div style="background: #FAFAFD">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


    <div>
      <div style="text-align: center">
        <p>乡村1的一些介绍</p>
      </div>
      <el-row :gutter="24" type="flex" justify="center" align="middle">
        <el-col :span="4">
        </el-col>
        <el-col :span="16">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>

    </div>
    <div>
      <div style="text-align: center">
        <p>乡村1的一些介绍</p>
      </div>
      <el-row :gutter="24" type="flex" justify="center" align="middle">
        <el-col :span="4">
        </el-col>

        <el-col :span="16">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :span="4">
        </el-col>
      </el-row>
    </div>
    <div>
      <div style="text-align: center">
        <p>乡村1的一些介绍</p>
      </div>
      <el-row :gutter="24" type="flex" justify="center" align="middle">
        <el-col :span="4">
        </el-col>

        <el-col :span="16">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
              <img src="@/assets/11.png" alt=""  style="width: 100%">
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :span="4">
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
export default {
  name: "HistoryDy",
  data() {

  },
  mounted() {

  },

}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
