<script setup lang="ts">
const count = ref(5)
</script>

<template>
  <div>
    <NuxtWelcome />
    <div>count: {{ count }}</div>
  </div>
</template>
