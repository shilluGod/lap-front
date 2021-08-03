<template>
<div>
<!--步骤条-->
  <el-steps :active="active" finish-status="success" align-center>
    <el-step title="选择乡村"></el-step>
    <el-step title="指标选取"></el-step>
    <el-step title="指标计算"></el-step>
    <el-step title="生成报告"></el-step>
  </el-steps>
<!--  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
<!--选择乡村-->
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px"
           class="formView">
  <el-form-item label="所在城市" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择">
<!--      <el-option label="区域一" value="shanghai"></el-option>-->
<!--      <el-option label="区域二" value="beijing"></el-option>-->
      <el-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange">
      </el-tree>
    </el-select>
  </el-form-item>
    <el-form-item label="具体地址" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
name: "EvaPer",
  data() {
    return {
      active: 0,
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ]
      },
      props: {
        label: 'name',
        children: 'zones'
      },
      count: 1
    };
  },
  methods: {
    // next() {
    //   if (this.active++ > 2) this.active = 0;
    // }
  }
}
</script>

<style scoped>
.el-steps{
  padding: 20px;
}
.formView{
  width: 30%;
}
</style>
