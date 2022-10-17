<template>
  <!-- <v-row justify="center">
    <v-dialog class="my-v-dialog" v-model="modelValue" scrollable persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">当前挂账列表</span>
        </v-card-title>
        <v-card-text style="width: 50rem">
          <BaseTable :columns="columns" :data="tableData"></BaseTable>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn size="large" variant="outlined" @click="handleCancel"> 取消 </v-btn>
          <v-btn size="large" variant="tonal" @click="handleOk"> 确定 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row> -->
  <BaseDialog w="70%" v-model="modelValue" title="当前挂账列表" hideFooter>
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
  { label: "客户姓名", prop: "" },
  { label: "手机号码", prop: "" },
  { label: "挂账金额", prop: "" },
  { label: "欠款天数", prop: "" },
  { label: "原包厢/手牌", prop: "" },
  { label: "备注", prop: "" },
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
