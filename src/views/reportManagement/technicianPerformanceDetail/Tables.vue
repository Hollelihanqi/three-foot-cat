<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">导出报表</el-button>
      <el-button type="primary" @click="handlePrint">打印报表</el-button>
    </div>
    <BaseTable :columns="columns" :table-data="store.list" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import { useMemberListStore } from "@/store/modules/useMemberList"
const store = useMemberListStore()

// 导出报表
const handleExport = () => {}

// 打印报表
const handlePrint = () => {}

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "工号(姓名)",
    slot: "number"
  },
  {
    label: "业绩类型",
    prop: "systemName"
  },
  {
    label: "结算时间",
    prop: "systemCode"
  },
  {
    label: "安排时间",
    prop: "name"
  },
  {
    label: "详情",
    prop: "code"
  },
  {
    label: "提成",
    prop: "url"
  },
  {
    label: "提成总计",
    prop: "url"
  }
]
</script>

<style lang="scss" scoped>
.table-top-box {
  @extend .df;
  gap: 16px;
  // justify-content: flex-end;
  padding-bottom: 16px;
}
.table-box {
  flex: 1;
  height: 0;
  background: #fff;
  padding: 16px 16px 0 16px;
  @extend .df;
  @extend .fdc;
  .table-w {
    height: 0;
    flex: 1;
  }
}
.handle-action-cell {
  .el-button {
    min-width: auto;
  }
  .vhi {
    transform-origin: center;
    transform: rotate(90deg);
  }
}
</style>
