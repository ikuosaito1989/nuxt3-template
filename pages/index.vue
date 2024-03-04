<script setup lang="ts">
const zipcode = ref('')
const rules = ref([
  (value: string) => {
    if (!value.length) {
      return '郵便番号を入力してください'
    }
    return true
  },
])

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
    <div>住所：{{ address }}</div>
    <v-text-field v-model="zipcode" :rules="rules" label="Zip Code"></v-text-field>
    <v-btn prepend-icon="$vuetify" @click="fetch">検索</v-btn>
    <v-btn prepend-icon="$vuetify" @click="refresh()">初期化 </v-btn>
  </section>
</template>

<style lang="scss" scoped>
.index {
  .index__header {
    color: $primary;
  }
}
</style>
