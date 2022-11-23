<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">导出报表</el-button>
      <el-button type="primary" class="new-add-btn" @click="handlePrint">打印报表</el-button>
    </div>
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import { useStoreOrderStore } from "@/store/modules/useStoreOrder"
const store = useStoreOrderStore()

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
    label: "序号",
    slot: "number",
    width: 60
  },
  {
    label: "流水号",
    prop: "systemName"
  },
  {
    label: "结算时间",
    prop: "systemCode"
  },
  {
    label: "支付包厢号",
    prop: "name"
  },
  {
    label: "支付手牌号",
    prop: "code"
  },
  {
    label: "订单金额",
    prop: "url"
  },
  {
    label: "技师编号",
    prop: "category"
  },
  {
    label: "订单状态",
    className: "caller-cell",
    slot: "callerCount"
  },
  {
    label: "支付类型",
    prop: "actionCount",
    className: "service-api-cell",
    slot: "actionCount"
  },
  {
    label: "收银员",
    className: "host-cell",
    slot: "hostCount"
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
