<template>
  <v-app class="tw-font-mono">
    <v-layout class="rounded rounded-md">
      <Header></Header>
      <v-layout fill-height class="rounded rounded-md h-screen">
        <v-main class="d-flex align-center justify-center">
          <slot />
        </v-main>
      </v-layout>
    </v-layout>
    <Footer></Footer>
  </v-app>
</template>
