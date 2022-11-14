<template>
  <div class="view-w">
    <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="100px">
      <el-form-item label="日期选择">
        <el-date-picker v-model="store.formModel.value1" type="date" placeholder="Pick a day" />
        <span>（清除所选日期前数据）</span>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-checkbox-group v-model="store.formModel.type">
          <el-checkbox label="营业数据" name="type" />
          <el-checkbox label="会员卡购卡消费数据(保留会员卡信息)" name="type" />
          <el-checkbox label="会员卡信息" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="本账号密码">
        <el-input v-model="store.formModel.name" placeholder="" />
      </el-form-item>
      <el-form-item label="注册账号">
        <el-input v-model="store.formModel.name" placeholder="" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="store.formModel.name" placeholder="" />
        <el-button>获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认清除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import { useClearDataStore } from "@/store/modules/useClearData"
import type { FormInstance, FormRules } from "element-plus"
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = useClearDataStore()
</script>
<style lang="scss" scoped>
.view-w {
  .el-form {
    background: #fff;
    padding: 16px;
  }
}
</style>
