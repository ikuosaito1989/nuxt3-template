<script setup lang="ts">
const count = ref(5)
</script>

<template>
  <AppAlert> This is an auto-imported component </AppAlert>
  <div>count: {{ count }}</div>
</template>

<style lang="scss" scoped>
.index {
  .index__header {
    color: $primary;
  }
}
</style>
