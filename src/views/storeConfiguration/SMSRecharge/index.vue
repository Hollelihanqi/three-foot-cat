<template>
  <div class="view-w">
    <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="100px">
      <el-form-item label="短信模式">
        <el-radio-group v-model="store.formModel.resource">
          <el-radio label="关闭" />
          <el-radio label="代扣发送" />
          <el-radio label="用户自己消费发送" />
          <el-radio label="会员卡扣费就发" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="剩余条数">
        <el-input v-model="store.formModel.name" placeholder="" />
      </el-form-item>
      <el-form-item label="累计冲值条数">
        <el-input v-model="store.formModel.name" placeholder="" />
      </el-form-item>
      <el-form-item label="充值金额">
        <el-input v-model="store.formModel.name" placeholder="" />
      </el-form-item>
      <el-form-item label="充值条数">
        <el-input v-model="store.formModel.name" placeholder="" />
      </el-form-item>
      <el-form-item label="应付金额">
        <div>
          <span>200</span>
          <span>元</span>
        </div>
      </el-form-item>
      <el-form-item label="充值方式">
        <el-button type="primary" size="small">微信</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认充值</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import { useSMSRechargeStore } from "@/store/modules/useSMSRecharge"
import type { FormInstance, FormRules } from "element-plus"
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = useSMSRechargeStore()
</script>
<style lang="scss" scoped>
.view-w {
  .el-form {
    background: #fff;
    padding: 16px;
  }
}
</style>
