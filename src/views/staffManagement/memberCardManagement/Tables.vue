<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleCreate">创建</el-button>
    </div>
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
    >
      <template #action="scope">
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">编辑</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
        <i class="el-icon-minus vhi" />
      </template>
    </BaseTable>
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import { useReserveOrderStore } from "@/store/modules/useReserveOrder"
const store = useReserveOrderStore()

// 创建
const handleCreate = () => {}

// 打印报表
const handlePrint = () => {}
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.setQueryParamsAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.setQueryParamsAction({ pageNum: 1, pageSize: num })
  }
}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "卡名称",
    slot: "number"
  },
  {
    label: "顺序卡",
    slot: "number"
  },
  {
    label: "卡类型",
    prop: "systemName"
  },
  {
    label: "售卡金额",
    prop: "systemCode"
  },
  {
    label: "赠送金额",
    prop: "name"
  },
  {
    label: "有效日期",
    prop: "name"
  },
  {
    label: "次数",
    prop: "name"
  },
  {
    label: "技师提成",
    prop: "name"
  },
  {
    label: "状态",
    prop: "name"
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
  justify-content: flex-end;
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
