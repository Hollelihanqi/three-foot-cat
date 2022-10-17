<template>
  <div class="table-box">
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
      v-bind="$attrs"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import { useReserveManagementStore } from "@/store/modules/useReserveManagement"

const store = useReserveManagementStore()
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
    label: "订单号",
    slot: "number"
  },
  {
    label: "套餐",
    prop: "applicationCode"
  },
  {
    label: "购买时间",
    prop: "moduleName"
  },
  {
    label: "消费时间",
    prop: "moduleCode"
  },
  {
    label: "消费数量",
    prop: "moduleUrl"
  },
  {
    label: "客户",
    prop: "moduleCategoryStr"
  },
  {
    label: "验证码",
    prop: "moduleCategoryStr"
  }
]
</script>

<style lang="scss" scoped>
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
