<template>
  <BaseDialog w="500px" v-model="modelValue" title="水吧消息列表" hideFooter>
    <BaseTable :columns="columns" :data="tableData" paginationHide>
      <template #action="scope">
        <el-button link @click="handleProcess">处理</el-button>
      </template>
    </BaseTable>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted, watch } from "vue"
import BaseTable from "@/components/BaseTable.vue"
import BaseDialog from "@/components/BaseDialog.vue"
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const tableData: any = ref([])
const emits = defineEmits(["update:modelValue"])
// modal 关闭时的回调函数
const handleCancel = () => {
  emits("update:modelValue", false)
}
const handleOk = () => {}

onMounted(() => {})
const columns = [
  { label: "包厢", prop: "" },
  { label: "内容", prop: "" },
  { label: "延迟", prop: "" },
  { label: "操作", slot: "action" }
]
const handleProcess = () => {}
watch(
  () => props.modelValue,
  (newValue) => {
    emits("update:modelValue", newValue)
  }
)
</script>
<style lang="scss" scoped></style>
