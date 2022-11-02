<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">交接并打印</el-button>
    </div>
    <BaseTable :columns="columns" :table-data="store.list">
      <template #header>
        <div>
          <span>开始时间：</span>
          <span>2022-10-26 00:00</span>
          <span>结束时间：</span>
          <span>2022-10-26 00:00</span>
          <span>操作人员：</span>
          <span>15990311521</span>
        </div>
      </template>
    </BaseTable>
    <BaseTable :columns="columns1" :table-data="store.list" />
    <BaseTable :columns="columns2" :table-data="store.list" />
    <BaseTable :columns="columns3" :table-data="store.list" />
    <BaseTable :columns="columns4" :table-data="store.list" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import { useMemberListStore } from "@/store/modules/useMemberList"
const store = useMemberListStore()

// 导出报表
const handleExport = () => {}

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "结账笔数",
    slot: "number"
  },
  {
    label: "项目钟数",
    prop: "systemName"
  },
  {
    label: "总计",
    prop: "systemCode"
  },
  {
    label: "营业额",
    prop: "name"
  },
  {
    label: "资金收入",
    prop: "code"
  },
  {
    label: "待收金额",
    prop: "url"
  }
]
const columns1 = [
  {
    label: "服务",
    slot: "number"
  },
  {
    label: "数量",
    prop: "systemName"
  },
  {
    label: "金额¥",
    prop: "systemCode"
  }
]
const columns2 = [
  {
    label: "商品",
    slot: "number"
  },
  {
    label: "数量",
    prop: "systemName"
  },
  {
    label: "金额¥",
    prop: "systemCode"
  }
]
const columns3 = [
  {
    label: "收款方式",
    slot: "number"
  },
  {
    label: "金额¥",
    prop: "systemName"
  },
  {
    label: "占比",
    prop: "systemCode"
  }
]
const columns4 = [
  {
    label: "充卡信息",
    slot: "number"
  },
  {
    label: "金额",
    prop: "systemName"
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
