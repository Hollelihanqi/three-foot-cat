<template>
  <div class="view-w">
    <BaseTable :columns="columns" :data="tableData" />
  </div>
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

onMounted(() => {})

const columns = [
  { label: "包厢号", prop: "" },
  { label: "所在区域", prop: "" },
  { label: "床位数量", prop: "" },
  { label: "当前技师数量", prop: "" },
  { label: "技师号", prop: "" },
  { label: "当前状态", prop: "" },
  { label: "备注信息", prop: "" },
  { label: "预计服务结束时间", prop: "" }
]
</script>
<style lang="scss" scoped>
.view-w {
}
</style>
