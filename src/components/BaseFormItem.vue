<template>
  <el-form-item :label="label" class="my-form-item" :prop="prop" v-bind="$attrs">
    <el-input v-if="type === 'input' && !slotDefault" placeholder="请输入内容" clearable v-bind="$attrs" />
    <el-select v-if="type === 'select' && !slotDefault" v-bind="$attrs">
      <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value" />
    </el-select>
    <el-input
      v-if="type === 'textarea' && !slotDefault"
      type="textarea"
      resize="none"
      placeholder="请输入"
      v-bind="$attrs"
    />
    <el-switch v-if="type === 'switch' && !slotDefault" active-color="#2c3cd8" v-bind="$attrs" />
    <slot name="autocomplete" />
    <slot />
  </el-form-item>
</template>
<script lang="ts">
import { defineProps, useSlots, PropType, reactive, onMounted, defineComponent } from "vue"

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    formModel: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: "input"
    },
    prop: {
      type: String,
      default: ""
    },
    h: {
      type: String,
      default: ""
    },
    w: {
      type: String,
      default: "220px"
    },
    options: {
      type: Array as PropType<OptionProps[]>,
      default: () => []
    }
  },
  setup(props, context) {
    // 判断 slot 是否有传值
    const slotDefault = !!useSlots().default
    return {
      slotDefault
    }
  },
  data() {
    return {
      styles: {
        height: "32px",
        width: "220px"
      }
    }
  },
  created() {
    if (this.h) {
      this.styles.height = this.h
    }
    if (this.w) {
      this.styles.width = this.w
    }
  }
})
export interface OptionProps {
  label: string
  value: string
}
</script>
<style lang="scss" scoped>
.my-form-item :deep(.el-select-v2__combobox-input),
.my-form-item :deep(.el-textarea__inner) {
  width: v-bind("styles.width");
}

.my-form-item:deep(.el-select-v2__wrapper),
.my-form-item :deep(.el-select-v2__combobox-input),
.my-form-item :deep(.el-input__inner) {
  height: v-bind("styles.height");
  width: v-bind("styles.width");
}
:deep(.el-date-editor:hover),
:deep(.el-input__inner:focus),
:deep(.el-select .el-input__inner:focus),
:deep(.el-select .el-input.is-focus .el-input__inner) {
  // border-color: $important-color;
}
</style>
<style lang="scss">
.el-select-dropdown__item.selected {
  // color: $important-color !important;
}
</style>
