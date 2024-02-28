<script setup lang="ts">
const count = ref(5)
</script>

<template>
  <div class="index">
    <h1 class="index__header">Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <div>count: {{ count }}</div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  .index__header {
    color: $primary;
  }
}
</style>
