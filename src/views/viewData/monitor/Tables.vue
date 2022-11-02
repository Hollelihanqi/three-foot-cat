<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">打印报表</el-button>
      <el-button type="primary" @click="handlePrint">导出报表</el-button>
    </div>
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
    >
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
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.setQueryParamsAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.setQueryParamsAction({ pageNum: 1, pageSize: num })
  }
}
// 查看
const handleDetail = (row: any) => {}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}
// 导出报表
const handleExport = () => {}

// 打印报表
const handlePrint = () => {}
onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "序号",
    slot: "number"
  },
  {
    label: "技师",
    prop: "systemName"
  },
  {
    label: "包厢",
    prop: "systemCode"
  },
  {
    label: "安排时间",
    prop: "name"
  },
  {
    label: "类型",
    prop: "code"
  },
  {
    label: "安排项目",
    prop: "url"
  },
  {
    label: "安排人员",
    prop: "url"
  },
  {
    label: "起钟时间",
    prop: "action"
  },
  {
    label: "下钟时间",
    prop: "action"
  },
  {
    label: "起钟延时",
    prop: "action"
  },
  {
    label: "下钟延时",
    prop: "action"
  },
  {
    label: "状态",
    prop: "action"
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
