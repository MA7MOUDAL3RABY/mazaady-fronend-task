<script setup>
import { ref } from "vue";
import { useDisplay, useLocale } from "vuetify";
const { mobile } = useDisplay();
const { locale, setLocale } = useI18n();
const { current } = useLocale();

function changeLocale(locale) {
  current.value = locale;
  setLocale(locale);
}

const drawer = ref(false);
const menuItems = [
  {
    url: "/",
    text: "menu.home"
  },
  {
    text: "menu.blog",
    url: "/blog"
  },
  {
    text: "menu.gifts",
    url: "/gifts"
  }
];
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

        <div class="app__navbar__menu" v-if="!mobile">
          <ul class="app__navbar__menu menu__items" v-if="!mobile">
            <li class="menu__item" v-for="(item, i) in menuItems" :key="i">
              <NuxtLink :to="item.url">{{ $t(item.text) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon>
          <NuxtImg class="app__icon" src="/assets/icons/magnify.svg" />
        </v-btn>
        <v-divider color="FFEAD2" class="d-none d-md-block mx-2" inset vertical></v-divider>

        <v-btn icon>
          <NuxtImg class="app__icon" src="/assets/icons/bill.svg" />
        </v-btn>
        <v-divider color="FFEAD2" class="d-none d-md-block mx-2" inset vertical></v-divider>

        <v-avatar class="mx-2">
          <NuxtImg src="/assets/avatars/hala_ahmed.svg" alt="John" />
        </v-avatar>

        <v-btn class="bg-gradient mx-4" v-if="!mobile" :to="'/new-product'">
          <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />
          {{ $t('add_new_product') }}
        </v-btn>
        <template v-if="!mobile">
          <img class="mx-4 app__icon__small" src="/assets/icons/lang.svg" />
          <v-divider inset vertical></v-divider>
          <v-btn
            class="bold font-18 font-weight-700 mx-4"
            v-if="locale == 'ar'"
            @click="changeLocale('en')"
          >En</v-btn>
          <v-btn
            class="font-18 font-weight-700 mx-4"
            v-if="locale == 'en'"
            @click="changeLocale('ar')"
          >غ</v-btn>
        </template>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary v-if="mobile">
        <div class="py-5">
          <template v-if="mobile">
            <v-btn
              class="bold font-18 font-weight-700 mb-4 mx-4"
              v-if="locale == 'ar'"
              @click="changeLocale('en')"
            >English</v-btn>
            <v-btn
              class="bold font-18 font-weight-700 mb-4 mx-4"
              v-if="locale == 'en'"
              @click="changeLocale('ar')"
            >Arabic</v-btn>
          </template>
          <v-btn class="bg-gradient mx-4" :to="'/new-product'">
            <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />
            {{$t('add_new_product')}}
          </v-btn>

          <v-divider class="my-5"></v-divider>

          <div class="app__navbar__menu">
            <ul class="app__navbar__menu menu__items mobile__menu">
              <li class="menu__item" v-for="(item, i) in menuItems" :key="i">
                <NuxtLink :to="item.url">{{ $t(item.text) }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>  

<style>
</style>