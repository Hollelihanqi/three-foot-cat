<template>
  <div class="table-box">
    <div class="table-top-box">
      <el-button type="primary" @click="handleClick(0)">新增</el-button>
      <el-button type="primary" @click="handleClick(1)">技师职称管理</el-button>
      <el-button type="primary" @click="handleClick(2)">技师标签管理</el-button>
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
        <el-button style="color: #2c3cd8" @click="handleBind(scope.row)">绑定</el-button>
        <el-button style="color: #2c3cd8" @click="handleUNBind(scope.row)">解绑</el-button>
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
    title="新增"
    @on-cancel="handleCancel(ruleFormRef)"
    @on-ok="handleOk(ruleFormRef)"
  >
    <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="80px">
      <el-row :gutter="16">
        <el-col :span="12">
          <el-form-item label="技师工号">
            <el-input v-model="store.formModel.name" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号">
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
          <el-form-item label="技师类型">
            <el-select style="width: 100%" v-model="store.formModel.name" placeholder="请选择">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="技师职称">
            <el-select style="width: 100%" v-model="store.formModel.name" placeholder="请选择">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="技术分">
            <el-input v-model="store.formModel.name" placeholder="" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="技师标签">
            <el-select style="width: 100%" multiple v-model="store.formModel.name" placeholder="请选择">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="服务项目">
            <el-select style="width: 100%" multiple v-model="store.formModel.name" placeholder="请选择">
              <el-option label="男" value="0" />
              <el-option label="女" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="入行时间">
            <el-input v-model="store.formModel.name" placeholder="" />
            <span>年</span>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="头像上传">
            <el-upload
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
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
import { useTechnologistManagementStore } from "@/store/modules/useTechnologistManagement"
import type { FormInstance, FormRules, UploadProps } from "element-plus"
import { ElMessage } from "element-plus"
import { Plus } from "@element-plus/icons-vue"
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = useTechnologistManagementStore()
const modalShow = ref(false)
const modalShow1 = ref(false)
const modalShow2 = ref(false)
const modalShow3 = ref(false)
const modalShow4 = ref(false)
const modalShow5 = ref(false)
const modalShow6 = ref(false)
const modalShow7 = ref(false)
const imageUrl = ref("")
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
// 绑定
const handleBind = (row: any) => {}
const handleUNBind = (row: any) => {}
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
const handleAvatarSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!")
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!")
    return false
  }
  return true
}
onActivated(() => {
  store.getListAction()
})
const columns = [
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
    label: "技师等级",
    prop: "name"
  },
  {
    label: "服务项目",
    prop: "name"
  },
  {
    label: "鲜花数量",
    prop: "name"
  },
  {
    label: "打赏数量",
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
