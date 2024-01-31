
<template>
  <v-card>
    <div class="pa-5">
      <NuxtImg class="w-[100px] h-[100px]" src="/assets/avatars/hala_ahmed.svg" alt="hala_ahmed" />

      <h3 class="font-24 font-weight-700">{{$t(profile.name)}}</h3>
      <p class="font-14 font-weight-400">{{$t(profile.bio)}}</p>
    </div>
    <div class="px-5">
      <div class="flex justify-between align-center gap-2">
        <HomePersonBadge v-for="(item, i) in profile.score" :item="item" :key="i"></HomePersonBadge>
      </div>
    </div>
    <div class="px-5 my-4">
      <v-btn
        class="bg-gradient w-100"
        @click="follow()"
      >{{profile.following ? $t('following') : $t('follow')}}</v-btn>
    </div>
  </v-card>
</template>

<script setup>
import { useProfileStore } from "~/stores/profileStore";
const profile = useProfileStore();
function follow() {
  // return profile.$patch({});
}
</script>

<style>
</style>