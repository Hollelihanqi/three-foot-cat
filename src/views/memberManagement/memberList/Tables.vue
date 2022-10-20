<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary">新办会员卡</el-button>
      <el-button type="primary">续充会员卡</el-button>
      <el-button type="primary">退款</el-button>
      <el-button type="primary">挂失</el-button>
      <el-button type="primary">注销</el-button>
      <el-button type="primary">转账</el-button>
      <el-button type="primary">老卡导入模板</el-button>
      <el-button type="primary">上传老卡文件</el-button>
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
import { useMemberListStore } from "@/store/modules/useMemberList"
const store = useMemberListStore()

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
    label: "姓名",
    slot: "number"
  },
  {
    label: "卡类型",
    prop: "systemName"
  },
  {
    label: "手机号",
    prop: "systemCode"
  },
  {
    label: "会员卡号",
    prop: "name"
  },
  {
    label: "实体卡号",
    prop: "code"
  },
  {
    label: "会员卡余额",
    prop: "url"
  },
  {
    label: "剩余次数(次卡)",
    prop: "url"
  },
  {
    label: "状态",
    slot: "action"
  },
  {
    label: "最后一次充卡时间",
    slot: "action"
  },
  {
    label: "备注",
    slot: "action"
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
