<template>
  <div class="filter-box">
    <slot />
    <div class="action-btn">
      <slot name="action" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.filter-box {
  position: relative;
  @extend .df;
  @extend .aic;
  background: #fff;
  padding: 12px 16px;
  margin-bottom: 8px;
  width: 100%;
  .el-form {
    flex: 1;
  }
  .el-form-item {
    margin-bottom: 0 !important;
  }
}
.action-btn {
  @extend .df;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 16px;
}
</style>
