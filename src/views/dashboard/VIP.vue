<template>
  <v-row justify="center">
    <v-dialog class="my-v-dialog" v-model="modelValue" scrollable persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">会员卡购买</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="姓名" required />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="手机号码" hint="请输入会员手机号码" />
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="[
                    '1000酬宾卡',
                    '实充',
                    '12888送5888',
                    '8888送3888',
                    '5888送2388',
                    '3888送1288',
                    '2888送688',
                    '1588送288',
                    '19999送9999',
                    '十三万送5200'
                  ]"
                  label="会员卡类型"
                  required
                />
              </v-col>
              <v-col cols="4">
                <v-text-field label="实体卡号" />
              </v-col>
              <v-col cols="4">
                <v-text-field label="实体卡内码" />
              </v-col>
              <v-col cols="4">
                <v-select :items="consumptionValidateType" label="消费验证方式" required />
              </v-col>
              <v-col cols="4">
                <v-text-field label="会员卡密码" />
              </v-col>
              <v-col cols="4">
                <v-select :items="yesNoShortNote" label="是否接收短信通知" required />
              </v-col>
              <v-col cols="6">
                <v-text-field disabled label="卡面额" />
              </v-col>
              <v-col cols="6">
                <v-text-field disabled label="赠送金额" />
              </v-col>
              <v-col cols="12">
                <v-select :items="yesNoShortNote" label="推荐人" />
              </v-col>
              <v-col cols="12">
                <v-text-field :items="yesNoShortNote" label="备注" />
              </v-col>
              <v-col cols="4">
                <v-text-field label="实收金额" disabled required />
              </v-col>
              <v-col cols="4">
                <v-text-field label="卡上增加金额" disabled required />
              </v-col>
              <v-col cols="4">
                <v-select :items="yesNoShortNote" label="支付方式" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn size="large" variant="outlined" @click="handleCancel"> 取消 </v-btn>
          <v-btn size="large" variant="tonal" @click="handleOk"> 确定 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted } from "vue"

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const consumptionValidateType = [
  { title: "不开启验证", value: 0 },
  { title: "开启短信验证", value: 1 },
  { title: "开启密码验证", value: 2 }
]
const yesNoShortNote = [
  { title: "重置消费接收短信通知", value: 0 },
  { title: "不接受短信通知", value: 1 }
]
const formModels = ref({})
const emits = defineEmits(["update:modelValue"])
// modal 关闭时的回调函数
const handleCancel = () => {
  emits("update:modelValue", false)
}
const handleOk = () => {}

onMounted(() => {})
</script>
<style lang="scss" scoped></style>
