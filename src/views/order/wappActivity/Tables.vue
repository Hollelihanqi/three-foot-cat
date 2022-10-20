<template>
  <div class="table-box">
    <!-- <div class="table-top-box">
      <BaseButton type="plain" @click="handleExport">导出报表</BaseButton>
      <BaseButton class="new-add-btn" @click="handlePrint">打印报表</BaseButton>
    </div> -->
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
import BaseButton from "@/components/BaseButton.vue"
import { useWappActivityOrderStore } from "@/store/modules/useWappActivityOrder"
const store = useWappActivityOrderStore()

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
    label: "ID",
    prop: "id",
    width: 60
  },
  {
    label: "客户",
    prop: "systemName"
  },
  {
    label: "人数",
    prop: "systemCode"
  },
  {
    label: "到店时间",
    prop: "name"
  },
  {
    label: "技术",
    prop: "code"
  },
  {
    label: "房间",
    prop: "url"
  },
  {
    label: "服务项目",
    prop: "category"
  },
  {
    label: "折后价",
    className: "caller-cell",
    slot: "callerCount"
  },
  {
    label: "门市价",
    prop: "actionCount",
    className: "service-api-cell",
    slot: "actionCount"
  },
  {
    label: "支付类型",
    className: "host-cell",
    slot: "hostCount"
  },
  {
    label: "类型",
    prop: "category"
  },
  {
    label: "状态",
    prop: "category"
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
