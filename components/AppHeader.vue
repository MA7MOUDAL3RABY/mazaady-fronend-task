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
        <v-divider color="FFEAD2" class="mx-2" inset vertical></v-divider>

        <v-btn icon>
          <NuxtImg class="app__icon" src="/assets/icons/bill.svg" />
        </v-btn>
        <v-divider color="FFEAD2" class="mx-2" inset vertical></v-divider>

        <v-avatar class="mx-2">
          <NuxtImg src="/assets/avatars/hala_ahmed.svg" alt="John" />
        </v-avatar>

        <v-btn class="gradient-btn mx-4" :to="'new-product'">
          <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />Add new product
        </v-btn>

        <v-btn icon>
          <NuxtImg class="mx-4" src="/assets/icons/lang.svg" />
        </v-btn>
        <v-divider color="FFEAD2" class="mx-2" inset vertical></v-divider>
        <v-btn text class="bold font-18 font-weight-700">EN</v-btn>
      </v-app-bar>
    </v-layout>
  </div>
</template>  

<script>
export default {};
</script>

<style>
</style>