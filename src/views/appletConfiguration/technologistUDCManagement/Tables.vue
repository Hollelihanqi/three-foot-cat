<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">全选上钟</el-button>
    </div>
    <BaseTable
      :columns="columns"
      :table-data="store.list"
      :total="store.listTotal"
      :current-page="store.queryParams.pageNum"
      :page-size="store.queryParams.pageSize"
      :handle-change="handleTableChange"
      @selection-change="handleSelectionChange"
    >
      <template #action="scope">
        <el-popconfirm title="确认?" @confirm="handleConfirm(0, scope.row)">
          <template #reference>
            <el-button style="color: #2c3cd8" size="small">上钟</el-button>
          </template>
        </el-popconfirm>
        <el-popconfirm title="确认?" @confirm="handleConfirm(0, scope.row)">
          <template #reference>
            <el-button style="color: #2c3cd8" size="small">空闲</el-button>
          </template>
        </el-popconfirm>
        <el-popconfirm title="确认?" @confirm="handleConfirm(0, scope.row)">
          <template #reference>
            <el-button style="color: #2c3cd8" size="small">请假</el-button>
          </template>
        </el-popconfirm>
        <!-- <el-button style="color: #2c3cd8" size="small" @click="handleDetail(scope.row)">上钟</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" size="small" @click="handleEdit(scope.row)">空闲</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" size="small" @click="handleDelete(scope.row)">请假</el-button> -->
      </template>
    </BaseTable>
  </div>
</template>
<script lang="ts" setup>
import { ref, onActivated, reactive } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import { useTechnologistUDCManagementStore } from "@/store/modules/useTechnologistUDCManagement"
import type { FormInstance, FormRules } from "element-plus"
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = useTechnologistUDCManagementStore()
const modalShow = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)
const multipleSelection = ref<any[]>([])
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.getListAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.getListAction({ pageNum: 1, pageSize: num })
  }
}
// 查看
const handleDetail = (row: any) => {}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}
const handleConfirm = (idx: number, row: any) => {}
const handleClick = (idx: number) => {
  switch (idx) {
    case 0:
      modalShow.value = true
      break
    case 1:
      modalShow1.value = true
      break
    case 2:
      modalShow1.value = true
      break
    case 3:
      modalShow3.value = true
      break
    case 4:
      modalShow4.value = true
      break
    case 5:
      modalShow5.value = true
      break
    case 6:
      modalShow6.value = true
      break
    case 7:
      modalShow7.value = true
      break
    default:
      break
  }
}
const handleSelectionChange = (val: any[]) => {
  multipleSelection.value = val
}

onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    type: "selection",
    width: 55
  },
  {
    label: "头像",
    prop: "systemName"
  },
  {
    label: "工号",
    prop: "systemCode"
  },
  {
    label: "类型",
    prop: "name"
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
:deep(.bkkf-form-item) {
  .el-form-item__content {
    @extend .df;
    @extend .aic;
    gap: 16px;
    .el-input {
      width: 80px;
    }
  }
}
</style>
