<template>
  <el-dialog
    :model-value="modelValue"
    :title="title"
    :width="w"
    custom-class="my-modal"
    @close="handleClose"
    v-bind="$attrs"
  >
    <slot />
    <template #footer v-if="!hideFooter">
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleOk">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType } from "vue"
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  w: {
    type: String,
    default: "800px"
  },
  titleAlign: {
    type: String,
    default: ""
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  hideFooter: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(["update:modelValue", "on-ok", "on-cancel"])

// modal 关闭时的回调函数
const handleClose = () => {
  emits("on-cancel")
  emits("update:modelValue", false)
}
const handleOk = () => {
  emits("on-ok")
}
</script>
<style lang="scss">
.my-modal {
  .el-dialog__header {
    position: relative;
    // height: 48px !important;
    // line-height: 48px;
    // background: $important-color !important;
    // padding: 0 20px;
    // text-align: left;
  }
  .el-dialog__body {
    padding-top: 2px;
  }
  .el-dialog__title {
    // color: #fff !important;
  }
  .el-dialog__close {
    // border-radius: 50%;
    // width: 20px;
    // height: 20px;
    // background: rgba(255, 255, 255, 0.85);
    // @extend .df;
    // @extend .aic;
    // @extend .jcc;
    .icon {
      // color: $important-color;
      font-weight: bold;
    }
  }
  .el-dialog__headerbtn {
    // top: 50%;
    // transform: translateY(-50%);
  }
  .dialog-footer {
    // text-align: center;
  }
}
</style>
