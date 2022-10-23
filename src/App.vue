<script lang="ts" setup>
import { useAppStore } from "@/store/modules/app"
import zhCn from "element-plus/lib/locale/lang/zh-cn"

const appStore = useAppStore()

/** 初始化主题 */
appStore.initTheme()
/** 将 Element-Plus 的语言设置为中文 */
const locale = zhCn
</script>

<template>
  <router-view />
</template>
<style lang="scss">
#app {
  overflow: hidden;
}
.card-body-inline {
  .el-card__body {
    display: flex;
    gap: 30px;
  }
}
.my-v-dialog {
  .v-label {
    opacity: 1;
  }
}
.el-popper {
  z-index: 666666 !important;
}
.view-w {
  background: transparent;
  width: 100%;
  height: 100%;
  @extend .df;
  @extend .fdc;
  padding: 16px;
}
</style>
