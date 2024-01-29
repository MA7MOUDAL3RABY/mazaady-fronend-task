
import type { componentNames } from '#build/components';

import type { HomePersonBadge } from '#build/components';
<template>
  <v-card>
    <div class="pa-5">
      <div class="d-flex align-items-center justify-space-between">
        <h3 class="font-24 font-weight-700 ga-10">QR Code</h3>
        <div class="btns d-flex align-items-center">
          <NuxtImg class="m-4 d-block app__icon" src="/assets/icons/show.svg" />
          <NuxtImg class="m-4 d-block app__icon" src="/assets/icons/share.svg" />
          <NuxtImg class="m-4 d-block app__icon" src="/assets/icons/download.svg" />
        </div>
      </div>

      <v-chip color="orange" rounded="18" size="large" class="badge mx-auto mt-3 mb-0">
        <template #prepend>
          <NuxtImg class="app__icon" src="/assets/icons/yellow_download.svg" alt="icon" />
        </template>
        <div class="content ms-2 text-gray_1">Download the QR code or share it with your friends.</div>
      </v-chip>
    </div>

    <div>
      <div class="bg-gradient pa-5 ma-5 v-btn--rounded">
        <div class="d-flex flex-column align-center justify-content-center bg-white v-btn--rounded py-5">
          <NuxtImg width="100" src="/assets/logo.svg" alt="icon" />
					<h3 class="my-2">{{profile.name}}</h3>
          <qr-code :value="'https://mazaady.com'" :size="100" level="H" />
					<h5 class="my-2 font-14">Follow Us On Mazaady</h5>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useProfileStore } from "~/stores/profileStore";
import QrcodeVue from "qrcode.vue";
import { defineComponent } from "vue";
const QrCode = defineComponent(QrcodeVue);
const profile = useProfileStore();
</script>

<style lang="scss">
.btns {
  gap: 24px;
}
</style>