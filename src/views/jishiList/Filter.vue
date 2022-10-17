<template>
  <BaseFilterBox>
    <yto-form
      class="filter-form"
      ref="formInstance"
      inline
      :model="store.queryParams"
      label-width="80px"
      inline-message
    >
      <BaseFormItem w="120px" v-model="store.queryParams.keyword" placeholder="请输入包厢号" label="包厢号" />
      <BaseFormItem w="120px" v-model="store.queryParams.keyword" placeholder="请输入技师号" label="技师号" />
      <BaseFormItem>
        <el-date-picker
          v-model="store.queryParams.dateTime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="起钟时间"
          end-placeholder="下钟时间"
        />
      </BaseFormItem>
    </yto-form>
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
import { useJishiListStore } from "@/store/modules/useJishiList"

const store = useJishiListStore()
const moduleQueryParams = reactive({
  applicationCode: ""
})
const formInstance: any = ref(null)

interface ParamsType {
  [propName: string]: any
}

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
