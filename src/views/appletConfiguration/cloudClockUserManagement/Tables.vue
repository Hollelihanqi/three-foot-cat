<template>
  <div class="table-box">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="云排钟账号管理" name="0" />
      <el-tab-pane label="钟房账号管理" name="1" />
      <el-tab-pane label="水吧账号管理" name="2" />
    </el-tabs>
    <div class="table-top-box" v-if="activeName === '0'">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
    </div>
    <BaseTable v-if="activeName === '0'" :columns="columns" :table-data="store.list" paginationHide>
      <template #action="scope">
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">修改</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">指纹录入</el-button>
      </template>
    </BaseTable>
    <BaseTable v-if="activeName === '1'" :columns="columns1" :table-data="store.list" paginationHide>
      <template #action="scope">
        <el-button style="color: #2c3cd8" type="text" @click="handleClick(1, scope.row)">钟房关联技师</el-button>
      </template>
    </BaseTable>
    <BaseTable v-if="activeName === '2'" :columns="columns2" :table-data="store.list" paginationHide />
  </div>
  <BaseDialog
    v-model="modalShow"
    w="50%"
    title="新建"
    @on-cancel="handleCancel(ruleFormRef)"
    @on-ok="handleOk(ruleFormRef)"
  >
    <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="100px">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="账号">
            <el-input v-model="store.formModel.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="角色">
            <el-select style="width: 100%" v-model="store.formModel.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="昵称">
            <el-input v-model="store.formModel.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密码">
            <el-input v-model="store.formModel.name" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
  <BaseDialog
    v-model="modalShow1"
    w="50%"
    title="钟房关联技师"
    @on-cancel="handleCancel1(ruleFormRef)"
    @on-ok="handleOk1(ruleFormRef)"
  >
    <el-form ref="ruleFormRef1" :model="store.formModel" :rules="rules" label-width="100px">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="账号">
            <div>
              <el-checkbox-group v-model="store.formModel.checkboxGroup1" size="large">
                <el-checkbox-button v-for="item in 30" :key="item" :label="item">
                  {{ item }}
                </el-checkbox-button>
              </el-checkbox-group>
            </div>
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
import { useCloudClockUserManagementStore } from "@/store/modules/useCloudClockUserManagement"
import type { FormInstance, FormRules } from "element-plus"
const ruleFormRef = ref<FormInstance>()
const ruleFormRef1 = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = useCloudClockUserManagementStore()
const modalShow = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)
const activeName = ref("0")
// 分页选择
const handleTableChange = async (type: string, num: number) => {
  type === "page" && store.getListAction({ pageNum: num })
  if (type === "size") {
    //页码重置
    store.getListAction({ pageNum: 1, pageSize: num })
  }
}
// 钟房关联技师
const handleClockRoom = (row: any) => {}
// 查看
const handleDetail = (row: any) => {}
// 修改
const handleEdit = (row: any) => {}
// 删除
const handleDelete = (row: any) => {}
const handleClick = (idx: number, row?: any) => {
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
const handleOk1 = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      store.createAction()
    } else {
      console.log("error submit!", fields)
    }
  })
}
const handleCancel1 = (formEl: FormInstance | undefined) => {
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
    label: "角色",
    slot: "number"
  },
  {
    label: "昵称",
    prop: "systemName"
  },
  {
    label: "账号",
    prop: "systemCode"
  },
  {
    label: "操作",
    slot: "action"
  }
]
const columns1 = [
  {
    label: "角色",
    slot: "number"
  },
  {
    label: "账号",
    prop: "systemName"
  },
  {
    label: "密码",
    prop: "systemCode"
  },
  {
    label: "操作",
    slot: "action"
  }
]
const columns2 = [
  {
    label: "角色",
    slot: "number"
  },
  {
    label: "账号",
    prop: "systemName"
  },
  {
    label: "密码",
    prop: "systemCode"
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
