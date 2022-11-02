<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleExport">导出报表</el-button>
      <el-button type="primary" @click="handlePrint">打印报表</el-button>
    </div>
    <BaseTable :columns="columns" :table-data="store.list" />
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

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "ID",
    slot: "number"
  },
  {
    label: "卡类型",
    prop: "systemName"
  },
  {
    label: "实体卡号",
    prop: "systemCode"
  },
  {
    label: "客户",
    prop: "name"
  },
  {
    label: "联系方式",
    prop: "code"
  },
  {
    label: "卡的面值",
    prop: "url"
  },
  {
    label: "赠送金额",
    prop: "url"
  },
  {
    label: "卡上增加金额",
    prop: "url"
  },
  {
    label: "余额",
    prop: "url"
  },
  {
    label: "充值时间",
    prop: "url"
  },
  {
    label: "支付方式",
    prop: "url"
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
