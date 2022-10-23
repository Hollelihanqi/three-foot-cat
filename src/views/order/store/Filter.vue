<template>
  <BaseFilterBox>
    <el-form class="filter-form" ref="formInstance" inline :model="store.queryParams" label-width="80px" inline-message>
      <BaseFormItem>
        <el-date-picker
          v-model="store.queryParams.dateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </BaseFormItem>
      <BaseFormItem w="120px" v-model="store.queryParams.keyword" placeholder="请输入技师编号" />
      <BaseSelect v-model="store.queryParams.category" :options="STATUS" prop="category" />
    </el-form>
    <div class="action-btn">
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleSubmit">查询</el-button>
    </div>
  </BaseFilterBox>
</template>
<script lang="ts" setup>
import { ref, reactive, onActivated, watch } from "vue"
import BaseFilterBox from "@/components/BaseFilterBox.vue"
import BaseFormItem from "@/components/BaseFormItem.vue"
import BaseSelect from "@/components/BaseSelect.vue"
import { useStoreOrderStore } from "@/store/modules/useStoreOrder"
const store = useStoreOrderStore()
interface ParamsType {
  [propName: string]: any
}
const moduleQueryParams = reactive({
  applicationCode: ""
})
const formInstance: any = ref(null)

const STATUS = [
  { label: "全部", value: 0 },
  { label: "仅撤销订单", value: 1 }
]

// 查询提交
const handleSubmit = () => {
  store.getListAction()
}
// 重置
const handleReset = () => {
  store.setQueryParamsAction({ action: "reset" })
}

watch(
  () => store.queryParams.applicationCode,
  (newValue) => {
    store.queryParams.moduleCode = ""
    moduleQueryParams.applicationCode = newValue
  }
)
</script>

<style lang="scss" scoped>
.filter-form {
  @extend .df;
  @extend .aic;
  gap: 24px;
}
.action-btn {
  margin-left: 24px;
}
</style>
