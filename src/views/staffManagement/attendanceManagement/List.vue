<template>
  <div class="view-w">
    <Filter />
    <Tables class="my-table" />
  </div>
</template>

<script lang="ts" setup>
import Tables from "./Tables.vue"
import Filter from "./Filter.vue"
</script>
<style lang="scss" scoped>
.my-table {
  padding: 26px 16px 0 16px;
}
</style>
