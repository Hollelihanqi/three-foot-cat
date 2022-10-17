<template>
  <v-row justify="center" class="fullsw-row">
    <v-dialog class="my-v-dialog" v-model="modelValue" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title class="my-card-title">
          <span class="text-h5">顾客等钟列表</span>
          <v-btn @click="handleCancel"> 关闭 </v-btn>
        </v-card-title>
        <v-divider />
        <div class="total-box">
          <v-card class="my-totalc my-totalc-1">
            <v-card-text>
              <span>点钟</span>
              <span>1</span>
            </v-card-text>
          </v-card>
          <v-card class="my-totalc my-totalc-2">
            <v-card-text>
              <span>排钟</span>
              <span>1</span>
            </v-card-text>
          </v-card>
          <v-card class="my-totalc my-totalc-3">
            <v-card-text>
              <span>括钟</span>
              <span>1</span>
            </v-card-text>
          </v-card>
          <v-card class="my-totalc my-totalc-4">
            <v-card-text>
              <span>总计</span>
              <span>1</span>
            </v-card-text>
          </v-card>
          <v-checkbox v-model="isAll" label="全部显示" color="success" value="success" hide-details />
        </div>
        <v-row style="padding: 16px">
          <v-col :cols="6">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">房间号</th>
                  <th class="text-left">服务项目</th>
                  <th class="text-left">技师</th>
                  <th class="text-left">预计时间(分)</th>
                  <th class="text-left">状态</th>
                  <th class="text-left">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.calories }}</td>
                  <td>
                    <v-btn flat color="secondary">换技师</v-btn>
                    <v-btn flat color="error">删除</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
          <v-col :cols="6">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">技师</th>
                  <th class="text-left">性别</th>
                  <th class="text-left">分组</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted } from "vue"
import BaseTable from "@/components/BaseTable.vue"
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const tableData: any = ref([])
const formModels = ref({})
const isAll = ref(false)
const emits = defineEmits(["update:modelValue"])
// modal 关闭时的回调函数
const handleCancel = () => {
  emits("update:modelValue", false)
}
const handleOk = () => {}
</script>
<style lang="scss" scoped>
.my-card-title {
  @extend .df;
  @extend .aic;
  gap: 20px;
}
.total-box {
  @extend .df;
  @extend .aic;
  gap: 16px;
  padding: 16px;
}
.my-totalc {
  .v-card-text {
    width: 160px;
    @extend .df;
    @extend .aic;
    @extend .jcc;
    gap: 16px;
    & > span:last-child {
      font-size: 26px;
      font-weight: bold;
    }
  }
}
.my-totalc-1 {
  background: rgba(46, 156, 101, 1);
}
.my-totalc-2 {
  background: rgba(221, 34, 85, 1);
}
.my-totalc-3 {
  background: rgba(235, 187, 31, 1);
}
.my-totalc-4 {
  background: radial-gradient(at 10% 10%, #6ae0e0 0%, #ffaeb3 48%, #f26f99 100%);
}
</style>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
.v-dialog--fullscreen .v-overlay__content > .v-card {
  overflow: hidden;
}
</style>
