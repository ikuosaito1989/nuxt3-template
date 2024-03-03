<script setup lang="ts">
const zipcode = ref('')

const { data: postcode, refresh } = await useFetch<PostCode>(
  'https://postcode.teraren.com/postcodes/1000011.json',
)

const fetch = async () => {
  postcode.value = await $fetch<PostCode>(
    `https://postcode.teraren.com/postcodes/${zipcode.value}.json`,
  )
}

const address = computed(() => {
  const v = postcode.value!
  return v.prefecture + v.city + v.suburb
})
</script>

<template>
  <section>
    <p>Main Content.</p>
    <div>{{ address }}</div>
    <input v-model="zipcode" type="text" />

    <button @click="fetch">検索</button>
    <button @click="refresh()">初期化</button>
  </section>
</template>

<style lang="scss" scoped>
.index {
  .index__header {
    color: $primary;
  }
}
</style>
