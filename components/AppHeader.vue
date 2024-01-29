<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const drawer = ref(false);
const menuItems = [
  {
    url: "/",
    text: "Home"
  },
  {
    text: "Blog",
    name: "/blog"
  },
  {
    text: "Gifts",
    name: "/gifts"
  }
];
const { mobile } = useDisplay();
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
<template>
  <div class="container">
    <v-layout>
      <v-app-bar color="white">
        <template v-slot:prepend>
          <v-app-bar-nav-icon class="d-flex d-md-none" @click="toggleDrawer">
            <NuxtImg class="app__icon" src="/assets/icons/bars.svg" />
          </v-app-bar-nav-icon>
        </template>

        <div class="cursor-pointer">
          <NuxtLink :to="'/'">
            <NuxtImg class="app__logo" src="/assets/logo.svg" />
          </NuxtLink>
        </div>

        <v-list v-if="!mobile">
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-title>
              <NuxtLink :to="item.url">{{ item.text }}</NuxtLink>
            </v-list-item-title>
          </v-list-item>
        </v-list>

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

        <v-btn class="gradient-btn mx-4" v-if="!mobile" :to="'/new-product'">
          <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />Add new product
        </v-btn>
        <template v-if="!mobile">
          <v-btn icon>
            <NuxtImg class="mx-4 app__icon__small" src="/assets/icons/lang.svg" />
          </v-btn>
          <v-divider :color="'success'" inset vertical></v-divider>
          <v-btn class="bold font-18 font-weight-700">EN</v-btn>
        </template>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary>
        <div class="py-5">
          <template v-if="mobile">
            <v-btn class="bold font-18 font-weight-700 mb-4 mx-4">EN</v-btn>
            <!-- <v-btn icon>
              <NuxtImg class="mx-4 app__icon__small" src="/assets/icons/lang.svg" />
            </v-btn>-->
            <!-- <v-divider :color="'success'" inset vertical></v-divider> -->
          </template>
          <v-btn class="gradient-btn mx-4" :to="'/new-product'">
            <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />Add new product
          </v-btn>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item v-for="(item, i) in menuItems" :key="i">
              <NuxtLink :to="item.url">{{item.text}}</NuxtLink>
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>  

<style>
</style>