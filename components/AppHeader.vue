<template>
  <div>
    <v-layout>
      <v-app-bar color="white">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
          <NuxtImg class="app__logo" src="/assets/logo.svg" />
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <NuxtImg class="app__icon" src="/assets/icons/magnify.svg" />
        </v-btn>

        <v-btn icon>
          <NuxtImg class="app__icon" src="/assets/icons/bill.svg" />
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <v-btn class="gradient-btn">
          <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />Add new product
        </v-btn>
      </v-app-bar>
    </v-layout>
  </div>
</template>  

<script>
export default {};
</script>

<style>
</style>