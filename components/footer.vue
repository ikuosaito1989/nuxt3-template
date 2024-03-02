<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div class="pt-0">The nuxt3 template.</div>

    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>
