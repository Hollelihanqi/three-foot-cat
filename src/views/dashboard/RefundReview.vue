<template>
  <BaseDialog w="70%" v-model="modelValue" title="退款待审核列表" hideFooter>
    <BaseTable :columns="columns" :data="tableData" />
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
  { label: "订单号", prop: "" },
  { label: "顾客姓名", prop: "" },
  { label: "手机号", prop: "" },
  { label: "开始时间", prop: "" },
  { label: "结束时间", prop: "" },
  { label: "项目", prop: "" },
  { label: "已付(元)", prop: "" },
  { label: "操作", prop: "" }
]
watch(
  () => props.modelValue,
  (newValue) => {
    emits("update:modelValue", newValue)
  }
)
</script>
<style lang="scss" scoped></style>
