<template>
  <BaseDialog w="50%" v-model="modelValue" title="包厢组合" @on-ok="handleOk" @on-cancel="handleCancel">
    <div class="room-list overflow-y-auto">
      <v-item-group :selected="selected" multiple selected-class="bg-primary" @change="handleChange">
        <v-container>
          <v-row>
            <v-col v-for="(item, index) in groupList" :key="index" cols="2">
              <v-item :value="item.value" :selected="item.isSelected" v-slot="{ isSelected, selectedClass, toggle }">
                <v-card :class="['d-flex align-center', selectedClass]" dark width="120" height="120" @click="toggle">
                  <div class="text-h3 flex-grow-1 text-center">
                    {{ isSelected ? "Selected" : "Click Me!" }}
                  </div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted, watch } from "vue"
import BaseDialog from "@/components/BaseDialog.vue"
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const groupList: any = ref([
  { value: 1, isSelected: false },
  { value: 2, isSelected: false },
  { value: 3, isSelected: false },
  { value: 4, isSelected: false },
  { value: 5, isSelected: false },
  { value: 6, isSelected: false },
  { value: 7, isSelected: false },
  { value: 8, isSelected: false },
  { value: 9, isSelected: false },
  { value: 10, isSelected: false },
  { value: 11, isSelected: false },
  { value: 12, isSelected: false },
  { value: 13, isSelected: false },
  { value: 14, isSelected: true }
])
const selected = ref(["1", "2"])
const emits = defineEmits(["update:modelValue"])
// modal 关闭时的回调函数
const handleCancel = () => {
  emits("update:modelValue", false)
}
const handleOk = () => {}
const handleChange = () => {}
onMounted(() => {})
watch(
  () => props.modelValue,
  (newValue) => {
    emits("update:modelValue", newValue)
  }
)
</script>
<style lang="scss" scoped>
.room-list {
  height: 60vh;
}
</style>
