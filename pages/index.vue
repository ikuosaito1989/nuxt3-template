<script setup lang="ts">
// const count = ref(5)
const { data: count } = await useFetch('https://zipcloud.ibsnet.co.jp/api/search')
</script>

<template>
  <section>
    <p>Main Content.</p>
  </section>
</template>

<style lang="scss" scoped>
.index {
  .index__header {
    color: $primary;
  }
}
</style>
