<template>
  <div class="view-w">
    <el-form :model="store.queryParams" :rules="rules">
      <el-form-item label="日期选择">
        <el-date-picker v-model="store.queryParams.value1" type="date" placeholder="Pick a day" />
        <span>（清除所选日期前数据）</span>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-checkbox-group v-model="store.queryParams.type">
          <el-checkbox label="营业数据" name="type" />
          <el-checkbox label="会员卡购卡消费数据(保留会员卡信息)" name="type" />
          <el-checkbox label="会员卡信息" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="本账号密码">
        <el-input v-model="store.queryParams.name" placeholder="" />
      </el-form-item>
      <el-form-item label="注册账号">
        <el-input v-model="store.queryParams.name" placeholder="" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="store.queryParams.name" placeholder="" />
        <el-button>获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认清除</el-button>
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
