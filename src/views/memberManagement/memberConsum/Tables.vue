<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">导出报表</el-button>
      <!-- <BaseButton class="new-add-btn" @click="handlePrint">打印报表</BaseButton> -->
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
        <!-- <yto-button style="color: #2c3cd8" type="text" @click="handleDetails(scope.index, scope.row)">详情</yto-button>
        <i class="yto-icon-minus vhi" />
        <yto-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.index, scope.row)">编辑</yto-button>
        <i class="yto-icon-minus vhi" />
        <yto-button style="color: #ff1212" type="text" @click="handleDelete(scope.index, scope.row)">删除</yto-button> -->
      </template>
    </BaseTable>
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseButton from "@/components/BaseButton.vue"
import { useReserveOrderStore } from "@/store/modules/useReserveOrder"
const store = useReserveOrderStore()

// 导出报表
const handleExport = () => {}

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

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "时间",
    slot: "number"
  },
  {
    label: "姓名",
    prop: "systemName"
  },
  {
    label: "卡类型",
    prop: "systemCode"
  },
  {
    label: "手机号",
    prop: "name"
  },
  {
    label: "实体卡号",
    prop: "code"
  },
  {
    label: "卡号",
    prop: "url"
  },
  {
    label: "操作人",
    prop: "url"
  },
  {
    label: "操作类型",
    prop: "url"
  },
  {
    label: "余额",
    prop: "url"
  },
  {
    label: "操作",
    slot: "action",
    width: 120
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
