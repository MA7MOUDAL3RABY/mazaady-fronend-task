<template>
  <div>
    <v-layout>
      <v-app-bar color="white">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
          <NuxtImg class="logo w-full" src="/assets/logo.svg" />
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <NuxtImg src="/assets/icons/magnify.svg" />
        </v-btn>

        <v-btn icon>
          <NuxtImg src="/assets/icons/bill.svg" />
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
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