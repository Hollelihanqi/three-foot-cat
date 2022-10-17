<template>
  <div class="view-w">
    <Filter />
    <Tables />
  </div>
</template>

<script lang="ts" setup>
import Tables from "./Tables.vue"
import Filter from "./Filter.vue"
</script>
<style lang="scss" scoped>
.view-w {
  @extend .df;
  @extend .fdc;
}
</style>
