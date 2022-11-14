<template>
  <div class="view-w">
    <el-card>
      <template #header>
        <span>店铺基础信息配置</span>
      </template>
      <el-form ref="ruleFormRef" :model="store.formModel" :rules="rules" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="店铺名称">
              <el-input v-model="store.formModel.name" placeholder="" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="店铺电话">
              <el-input v-model="store.formModel.name" placeholder="" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="店铺地址">
              <el-input v-model="store.formModel.name" placeholder="" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="经度">
              <el-input v-model="store.formModel.name" placeholder="" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="纬度">
              <el-input v-model="store.formModel.name" placeholder="" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button>获取经纬度</el-button>
            <el-button>地图预览</el-button>
          </el-col>
          <el-col :span="8">
            <el-form-item label="营业统计时间">
              <el-time-select
                v-model="store.formModel.value"
                start="08:30"
                step="00:15"
                end="18:30"
                placeholder="Select time"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务开始时间">
              <el-time-select
                v-model="store.formModel.value"
                start="08:30"
                step="00:15"
                end="18:30"
                placeholder="Select time"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务结束时间">
              <el-time-select
                v-model="store.formModel.value"
                start="08:30"
                step="00:15"
                end="18:30"
                placeholder="Select time"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="门面图">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                <template #tip>
                  <div class="el-upload__tip">建议尺寸1600*900</div>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="店内图">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                <template #tip>
                  <div class="el-upload__tip">建议尺寸750*440</div>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="连锁门店图">
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                <template #tip>
                  <div class="el-upload__tip">建议尺寸750*440</div>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleSubmit(ruleFormRef)">保存</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import { useStoreManagementStore } from "@/store/modules/useStoreManagement"
import { Plus } from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"
import type { FormInstance, FormRules, UploadProps } from "element-plus"

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  dname: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
  dcode: [{ required: true, message: "请输入部门编码", trigger: "blur" }]
})
const store = useStoreManagementStore()
const imageUrl = ref("")
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
const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      store.createAction()
    } else {
      console.log("error submit!", fields)
    }
  })
}
</script>
<style lang="scss" scoped>
.view-w {
  .el-form {
    background: #fff;
    padding: 16px;
  }
}
</style>
