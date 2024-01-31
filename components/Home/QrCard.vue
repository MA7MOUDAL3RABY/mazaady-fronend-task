<template>
  <v-card>
    <div class="pa-5">
      <div class="d-flex align-items-center justify-space-between">
        <h3 class="font-24 font-weight-700 ga-10">{{$t('QRCode')}}</h3>
        <div class="flex align-items-center gap-4">
          <NuxtImg class="w-[24px]" src="/assets/icons/show.svg" />
          <NuxtImg class="w-[24px]" src="/assets/icons/share.svg" />
          <NuxtImg class="w-[24px]" src="/assets/icons/download.svg" />
          <NuxtImg
            class="w-[24px] cursor-pointer"
            src="/assets/icons/arrow.svg"
            :class="{'rotate-180': !show}"
            @click="show = !show"
            v-if="mobile"
          />
        </div>
      </div>
    </div>

    <div class="px-5">
      <div
        class="w-100 flex flex-column align-center transition-all duration-300 ease-in-out"
        :class="{'h-0': !show}"
      >
        <v-chip color="orange" rounded="18" size="large" class="badge text-wrap">
          <template #prepend>
            <NuxtImg src="/assets/icons/yellow_download.svg" class="w-[24px]" alt="icon" />
          </template>
          <div class="content ms-2 text-gray_1">{{$t('DownloadQR')}}</div>
        </v-chip>

        <div class="bg-gradient w-100 pa-5 ma-5 v-btn--rounded">
          <div
            class="d-flex flex-column align-center justify-content-center bg-white v-btn--rounded py-5"
          >
            <NuxtImg width="100" src="/assets/logo.svg" alt="icon" />
            <h3 class="my-2">{{$t(profile.name)}}</h3>
            <qr-code :value="'https://mazaady.com'" :size="100" level="H" />
            <h5 class="my-2 font-14">{{ $t('FollowUsOnMazaady')}}</h5>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay, useLocale } from "vuetify";
const { mobile } = useDisplay();
import { useProfileStore } from "~/stores/profileStore";
import QrcodeVue from "qrcode.vue";
import { defineComponent } from "vue";
const QrCode = defineComponent(QrcodeVue);
const profile = useProfileStore();
const show = ref(true);
</script>

<style lang="scss">
.btns {
  gap: 24px;
}
</style>