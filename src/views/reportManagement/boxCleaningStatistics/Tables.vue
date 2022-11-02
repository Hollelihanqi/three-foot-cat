<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">导出报表</el-button>
      <el-button type="primary" @click="handlePrint">打印报表</el-button>
    </div>
    <BaseTable :columns="columns" :table-data="store.list">
      <!-- <template #action="scope">
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">查看</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">删除</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
      </template> -->
    </BaseTable>
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
const handleDetail = (row: any) => {}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}
onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "工号",
    slot: "number"
  },
  {
    label: "打扫包厢数量",
    prop: "systemName"
  },
  {
    label: "操作",
    slot: "action"
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
