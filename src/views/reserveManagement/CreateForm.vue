<template>
  <div class="my-form-box">
    <el-form
      ref="formInstance"
      :hide-required-asterisk="false"
      :model="formModel"
      :rules="rules"
      label-width="100px"
      class="my-form"
    >
      <el-row>
        <el-col :span="12">
          <BaseSelect v-model="formModel.room" :options="roomList" prop="sourceCode" label="选择包厢" />
        </el-col>
        <el-col :span="12">
          <BaseFormItem v-model="formModel.moduleCode" :disabled="isReadonly" prop="moduleCode" label="预约人数" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <BaseFormItem v-model="formModel.moduleName" prop="moduleName" label="预约人" />
        </el-col>
        <el-col :span="12">
          <BaseFormItem label="预约时间">
            <el-date-picker v-model="formModel.moduleName" type="datetime" />
          </BaseFormItem>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <BaseFormItem v-model="formModel.moduleName" prop="moduleName" label="联系电话" />
        </el-col>
        <el-col :span="12">
          <BaseFormItem v-model="formModel.moduleName" prop="moduleName" label="销售技师" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <BaseFormItem v-model="formModel.moduleUrl" type="textarea" prop="menuTag" label="备注" />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, reactive } from "vue"
import BaseFormItem from "@/components/BaseFormItem.vue"
import BaseSelect from "@/components/BaseSelect.vue"
import { useReserveManagementStore } from "@/store/modules/useReserveManagement"

const store = useReserveManagementStore()
const formInstance = ref()
const props = defineProps({
  modalShow: {
    type: Boolean,
    default: false
  },
  isReadonly: {
    type: Boolean,
    default: false
  }
})
const roomList = ref([])
const emits = defineEmits(["on-close"])
const rules = {
  applicationCode: [{ required: true, message: "请选择", trigger: ["blur", "change"] }],
  moduleName: [{ required: true, message: "不能为空", trigger: "blur" }],
  moduleCategory: [{ required: true, message: "请选择", trigger: ["blur", "change"] }],
  moduleCode: [{ required: true, message: "不能为空", trigger: "blur" }]
}
const formModel = ref<FormModelProps>({})
interface FormModelProps {
  [propsName: string]: any
}

// 重置表单
const resetForm = () => {
  formModel.value = {}
  formInstance.value.resetFields()
  formInstance.value.clearValidate()
}

// 取消事件
const onCancel = () => {
  resetForm()
  emits("on-close")
}

// 点击编辑时，用于form value 的回显
const setFormModel = (values: any) => {
  formModel.value = values
}

// 表单提交
const onSubmit = () => {
  formInstance.value.validate(async (valid: boolean) => {
    if (valid) {
      const id = formModel.value.id
      const moduleName = formModel.value.moduleName
      const applicationCode = formModel.value.applicationCode
      const moduleCategory = formModel.value.moduleCategory
      const moduleCode = formModel.value.moduleCode
      const moduleUrl = formModel.value.moduleUrl
      if (props.isReadonly) {
        // 编辑
        const params = {
          moduleCategory,
          moduleName,
          moduleUrl
        }
        // store.handleModuleAction({ id }, { ...params }, "put").finally(() => {
        //   onCancel()
        // })
      } else {
        //新增
        const params = {
          applicationCode,
          moduleCategory,
          moduleName,
          moduleUrl,
          moduleCode
        }
        // store.handleModuleAction({}, params, "post").finally(() => {
        //   onCancel()
        // })
      }
    } else {
      console.log("error submit!!")
      return false
    }
  })
}

watch(
  () => store.details,
  (newValue) => {
    setFormModel(newValue)
  }
)
watch(
  () => props.modalShow,
  () => {
    resetForm()
  }
)
</script>
<style lang="scss" scoped>
.my-form-box {
  @extend .df;
  @extend .fdc;
  @extend .aic;
  @extend .jcc;
}
.my-form {
  width: 100%;
}
.autolist-item {
  @extend .df;
  & > div {
    margin-right: 10px;
  }
}
</style>
