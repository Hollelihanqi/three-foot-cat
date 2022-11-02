<template>
  <div class="view-w">
    <el-form :model="store.queryParams" :rules="rules">
      <el-form-item label="短信模式">
        <el-radio-group v-model="store.queryParams.resource">
          <el-radio label="关闭" />
          <el-radio label="代扣发送" />
          <el-radio label="用户自己消费发送" />
          <el-radio label="会员卡扣费就发" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="剩余条数">
        <el-input v-model="store.queryParams.name" placeholder="" />
      </el-form-item>
      <el-form-item label="累计冲值条数">
        <el-input v-model="store.queryParams.name" placeholder="" />
      </el-form-item>
      <el-form-item label="充值金额">
        <el-input v-model="store.queryParams.name" placeholder="" />
      </el-form-item>
      <el-form-item label="充值条数">
        <el-input v-model="store.queryParams.name" placeholder="" />
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
import { useMemberListStore } from "@/store/modules/useMemberList"
const store = useMemberListStore()
const rules = {}
</script>
<style lang="scss" scoped>
.view-w {
  .el-form {
    background: #fff;
    padding: 16px;
  }
}
</style>
