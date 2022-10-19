<template>
  <div class="table-box">
    <div class="table-top-box">
      <BaseButton type="plain" @click="handleExport">导出报表</BaseButton>
      <BaseButton class="new-add-btn" @click="handlePrint">打印报表</BaseButton>
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
import BaseButton from "@/components/BaseButton.vue"
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
    label: "系统名称",
    prop: "systemName"
  },
  {
    label: "系统编码",
    prop: "systemCode"
  },
  {
    label: "应用名称",
    prop: "name"
  },
  {
    label: "应用编码",
    prop: "code"
  },
  {
    label: "路径",
    prop: "url"
  },
  {
    label: "应用分类",
    prop: "category"
  },
  {
    label: "调用者",
    className: "caller-cell",
    slot: "callerCount"
  },
  {
    label: "服务接口",
    prop: "actionCount",
    className: "service-api-cell",
    slot: "actionCount"
  },
  {
    label: "主机IP",
    className: "host-cell",
    slot: "hostCount"
  },
  {
    label: "接入状态",
    slot: "moduleJoined"
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
