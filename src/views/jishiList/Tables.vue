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
import { useJishiListStore } from "@/store/modules/useJishiList"

const store = useJishiListStore()
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
    label: "技师",
    prop: "applicationName"
  },
  {
    label: "包厢",
    prop: "applicationCode"
  },
  {
    label: "类别",
    prop: "moduleName"
  },
  {
    label: "安排项目",
    prop: "moduleCode"
  },
  {
    label: "安排人员",
    prop: "moduleUrl"
  },
  {
    label: "起钟时间",
    prop: "moduleCategoryStr"
  },
  {
    label: "下钟时间",
    prop: "moduleCategoryStr"
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
