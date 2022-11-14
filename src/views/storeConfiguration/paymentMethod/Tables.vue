<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
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
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">收银或充卡时隐藏</el-button>
        <!-- <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">修改</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button> -->
      </template>
    </BaseTable>
  </div>
  <BaseDialog
    v-model="modalShow"
    w="50%"
    title="添加支付方式"
    @on-cancel="handleCancel(ruleFormRef)"
    @on-ok="handleOk(ruleFormRef)"
  >
    <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="80px">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="方式名称">
            <el-input v-model="store.formModel.name" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="顺序号">
            <el-input v-model="store.formModel.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="0px">
            <el-switch v-model="store.formModel.value" size="large" inactive-text="是否记录营业收入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="0px">
            <el-switch v-model="store.formModel.value" size="large" inactive-text="是否记录资金收入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label-width="0px">
            <el-switch v-model="store.formModel.value" size="large" inactive-text="是否可用" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref, onActivated, reactive } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import { usePaymentMethodStore } from "@/store/modules/usePaymentMethod"
import type { FormInstance, FormRules } from "element-plus"
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = usePaymentMethodStore()
const modalShow = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)

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
const handleOk = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      store.createAction()
    } else {
      console.log("error submit!", fields)
    }
  })
}
const handleCancel = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  formEl.clearValidate()
  store.formModel = {}
}
onActivated(() => {
  store.getListAction()
})
const columns = [
  {
    label: "序号",
    slot: "number"
  },
  {
    label: "支付方式",
    prop: "systemName"
  },
  {
    label: "是否记录营业收入",
    prop: "systemCode"
  },
  {
    label: "是否记录资金收入",
    prop: "name"
  },
  {
    label: "是否可用",
    prop: "code"
  },
  {
    label: "收银或充卡时是否使用",
    prop: "url"
  },
  {
    label: "顺序",
    prop: "url"
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
</style>
