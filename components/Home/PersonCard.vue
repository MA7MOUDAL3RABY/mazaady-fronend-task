
<template>
  <v-card>
    <div class="pa-5">
      <NuxtImg class="w-[100px] h-[100px]" src="/assets/avatars/hala_ahmed.svg" alt="hala_ahmed" />
      <Suspense>
        <h3 class="font-24 font-weight-700">{{profile.name}}</h3>
      </Suspense>
      <p class="font-14 font-weight-400">{{profile.bio}}</p>
    </div>
    <div class="px-5">
      <div class="d-flex justify-space-between align-items-center">
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