<template>
  <div class="table-box">
    <div class="table-top-box">
      <v-btn color="success" @click="handleRefresh">刷新</v-btn>
      <v-btn color="primary" @click="handleAdd">新增</v-btn>
    </div>
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
      v-bind="$attrs"
    >
      <template #number="scope">
        <span v-if="scope.index < 9">0{{ scope.index + 1 }}</span>
        <span v-else>{{ scope.index + 1 }}</span>
      </template>
      <template #action="scope">
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.index, scope.row)">编辑</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #ff1212" type="text" @click="handleDelete(scope.index, scope.row)">删除</el-button>
      </template>
    </BaseTable>
  </div>
  <BaseDialog v-model="cdislogShow" :title="isReadonly ? '编辑' : '新增'" w="60%">
    <CreateForm :modal-show="cdislogShow" :is-readonly="isReadonly" @on-close="cdislogShow = false" />
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref, onActivated } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import CreateForm from "./CreateForm.vue"
import { useReserveManagementStore } from "@/store/modules/useReserveManagement"

const cdislogShow = ref(false)
const isReadonly = ref(false)
const store = useReserveManagementStore()
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.setQueryParamsAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.setQueryParamsAction({ pageNum: 1, pageSize: num })
  }
}

// 新增
const handleAdd = () => {
  cdislogShow.value = true
}
// 刷新
const handleRefresh = () => {}
// 编辑
const handleEdit = (idx: number, row: any) => {
  // dislogShow.value = true
  // isReadonly.value = true
  // store.getModuleDetailsAction({ id: row.id })
}

// 点击 delete icon
const handleDelete = (idx: number, row: any) => {}
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
    label: "预约人",
    prop: "applicationCode"
  },
  {
    label: "联系电话",
    prop: "moduleName"
  },
  {
    label: "人数",
    prop: "moduleCode"
  },
  {
    label: "包厢",
    prop: "moduleUrl"
  },
  {
    label: "销售员工",
    prop: "moduleCategoryStr"
  },
  {
    label: "预约技师",
    prop: "moduleCategoryStr"
  },
  {
    label: "预约时间",
    prop: "moduleCategoryStr"
  },
  {
    label: "预约类型",
    prop: "moduleCategoryStr"
  },
  {
    label: "备注",
    prop: "moduleCategoryStr"
  },
  {
    label: "操作",
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
