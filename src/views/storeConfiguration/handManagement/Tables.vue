<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
      <el-button type="primary" @click="handleClick(1)">浴资参数设置</el-button>
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
        <el-button style="color: #2c3cd8" type="text" @click="handleDetail(scope.row)">查看</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleEdit(scope.row)">修改</el-button>
        <i class="el-icon-minus vhi" />
        <el-button style="color: #2c3cd8" type="text" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </BaseTable>
  </div>
  <BaseDialog
    v-model="modalShow"
    w="50%"
    title="添加"
    @on-cancel="handleCancel(ruleFormRef)"
    @on-ok="handleOk(ruleFormRef)"
  >
    <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="80px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="手牌号码">
            <el-input v-model="store.formModel.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手牌ID">
            <el-input v-model="store.formModel.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">
            <el-select style="width: 100%" v-model="store.formModel.name" placeholder="请选择">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="顺序号">
            <el-input v-model="store.formModel.name" placeholder="" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
  <BaseDialog v-model="modalShow1" w="60%" title="浴资参数设置">
    <el-form :model="store.formModel" :rules="rules">
      <el-row :gutter="8">
        <el-col :span="6">
          <el-card style="height: 100%">
            <template #header>
              <div class="card-header">
                <span>自动计算浴资</span>
              </div>
            </template>
            <el-form-item class="label-vertical">
              <span class="sub-feadback">开启后，手牌开牌后，自动添加浴资项目。</span>
              <el-switch v-model="store.formModel.delivery" />
            </el-form-item>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="height: 100%">
            <template #header>
              <div class="card-header">
                <span>浴资项目</span>
              </div>
            </template>
            <el-form-item class="label-vertical">
              <span class="sub-feadback">自动添加的浴资项目</span>
              <el-select v-model="store.formModel.name" placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="height: 100%">
            <template #header>
              <div class="card-header">
                <span>计算周期</span>
              </div>
            </template>
            <el-form-item class="label-vertical">
              <span class="sub-feadback">浴资计算周期，单位分钟</span>
              <el-input type="number" v-model="store.formModel.name" />
            </el-form-item>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="height: 100%">
            <template #header>
              <div class="card-header">
                <span>延迟添加浴资</span>
              </div>
            </template>
            <el-form-item class="label-vertical">
              <span class="sub-feadback">开牌后延迟 x 分钟后自动添加浴资项目</span>
              <el-input type="number" v-model="store.formModel.name" />
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin-top: 18px">
        <el-col :span="12">
          <el-form-item label="增加过夜费的时间点">
            <el-time-picker v-model="store.formModel.value1" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="增加的过夜费项目">
            <el-select v-model="store.formModel.name" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <BaseTable
            :columns="columns1"
            :table-data="store.list"
            :total="store.listTotal"
            :current-page="store.formModel.pageNum"
            :page-size="store.formModel.pageSize"
            :handle-change="handleTableChange"
            @selection-change="handleSelectionChange"
          >
            <template #header>
              <div>需要免商品的项目</div>
            </template>
          </BaseTable>
        </el-col>
      </el-row>
    </el-form>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref, onActivated, reactive } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import { useHandManagementStore } from "@/store/modules/useHandManagement"
import type { FormInstance, FormRules } from "element-plus"
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
interface User {
  date: string
  name: string
  address: string
}

const store = useHandManagementStore()
const modalShow = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)
const activeName = ref("0")
const multipleSelection = ref<User[]>([])
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
// 多选
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
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
    label: "所属部门",
    prop: "systemName"
  },
  {
    label: "项目类别",
    prop: "systemCode"
  },
  {
    label: "项目名称",
    prop: "systemCode"
  },
  {
    label: "门市价（元）",
    prop: "systemCode"
  },
  {
    label: "一个钟时长（分钟）",
    prop: "systemCode"
  },
  {
    label: "顺序",
    prop: "systemCode"
  },
  {
    label: "操作",
    slot: "action"
  }
]
const columns1 = [
  {
    type: "selection"
  },
  {
    label: "类别",
    slot: "number"
  },
  {
    label: "项目名称",
    prop: "systemName"
  },
  {
    label: "单价",
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
.p-item {
  @extend .df;
  @extend .fdc;
  @extend .aic;
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
