<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-radio-group v-model="view">
        <el-radio-button label="0">表单</el-radio-button>
        <el-radio-button label="1">图标</el-radio-button>
      </el-radio-group>
      <el-button type="primary" @click="handleExport">打印报表</el-button>
    </div>
    <div class="table-header-box">
      <p>迷鹿空间营业表</p>
      <div>
        <span>开始时间：</span>
        <span>2022-10-26 00:00</span>
        <span>结束时间：</span>
        <span>2022-10-26 00:00</span>
        <span>操作人员：</span>
        <span>15990311521</span>
      </div>
    </div>
    <BaseTable :columns="columns" :table-data="tableData">
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
const view = ref("0")
// 导出报表
const handleExport = () => {}

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "",
    prop: "name"
  },
  {
    label: "美团",
    prop: "p1"
  },
  {
    label: "会员卡(净值)",
    prop: "p2"
  },
  {
    label: "pos机",
    prop: "p3"
  },
  {
    label: "抖音支付",
    prop: "p4"
  },
  {
    label: "啥都换",
    prop: "p5"
  }
]
const tableData = [
  {
    name: "消费",
    p1: "417",
    p2: "5256",
    p3: "2186",
    p4: "1472",
    p5: "34234"
  },
  {
    name: "售卡",
    p1: "417",
    p2: "5256",
    p3: "2186",
    p4: "1472",
    p5: "34234"
  },
  {
    name: "合计",
    p1: "417",
    p2: "5256",
    p3: "2186",
    p4: "1472",
    p5: "34234"
  }
]
const columns1 = [
  {
    label: "出勤分类",
    slot: "number"
  },
  {
    label: "S级",
    prop: "systemName"
  },
  {
    label: "A级",
    prop: "systemCode"
  },
  {
    label: "总出勤",
    prop: "systemCode"
  },
  {
    label: "总人均",
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
