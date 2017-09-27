<template>
  <div id="hello">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="数字,范围在0-100" prop="a">
        <el-input v-model="ruleForm.a" type="number"></el-input>
      </el-form-item>
      <el-form-item label="千分位">
        <p>{{ruleForm.b | formatMoney}}</p>
      </el-form-item>
      <el-form-item label="千分位保留几位小数">
        <p>{{ruleForm.b | formatCurrency(4,ruleForm.b)}}</p>
      </el-form-item>
      <el-form-item label="数字" prop="b">
        <el-input v-model="ruleForm.b" type="number"></el-input>
      </el-form-item>
      <el-form-item label="数字失去焦点时保留两位小数" prop="c">
        <el-input v-model="ruleForm.c" type="number" @blur="saveDec({form:'ruleForm',prop:'c',dec:2})"></el-input>
      </el-form-item>
      <el-form-item label="数字失去焦点时保留四位小数" prop="c">
        <el-input v-model="ruleForm.d" type="number" @blur="saveDec({form:'ruleForm',prop:'d',dec:4})"></el-input>
      </el-form-item>
      <el-form-item label="时间戳转换" prop="e">
        <p v-text="ruleForm.e"></p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import * as fetch from '../common/fetch.js'
console.log(fetch)
export default {
  data() {

    return {
      ruleForm: {
        a: '',
        b: 11111111,
        c: 1505890311,
        d: 1505890311,
        e: 1505890311
      },
      rules: {
        a: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { validator: this.rangeCheck, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          fetch.get('/getSave',{"a":"1"},function (params) {
            console.log(params)
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    saveDec(obj) {
      let target = this[obj.form][obj.prop];
      this[obj.form][obj.prop] = Number(target).toFixed(obj.dec);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted(){
    this.ruleForm.e = this.formatDate(this.ruleForm.e);
  }
}
</script>