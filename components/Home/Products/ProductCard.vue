<template>
  <div class="md:mx-2">
    <div class="d-flex my-5">
      <div class="bg-white rounded-xl overflow-hidden w-100">
        <div class="flex sm:flex-column md:flex-row align-start md:gap-4">
          <!-- Side Image -->
          <div class="relative rounded-[33px] overflow-hidden sm:w-[87px] md:w-[145px]">
            <div
              v-if="mobile"
              class="sm:fixed sm:top-3 md:static"
              @click="product.liked = !product.liked"
            >
              <img class="w-[24px]" v-if="product.liked" src="/assets/icons/red_heart.svg" alt="like" />
              <img class="w-[24px]" v-else src="/assets/icons/blank_heart.svg" alt="like" />
            </div>
            <img
              class="w-[100%]"
              :src="`/assets/products/${product.image}`"
              alt="product image"
            />
            <div class="absolute bottom-0 w-[100%] flex align-center justify-end">
              <div
                class="h-[37px] font-12 text-white text-center w-[114px] pt-2"
                :class="{
								'rounded-tl-[33px]': locale == 'en',
								'rounded-tr-[33px]': locale == 'ar',
								'bg-razz': product.offer.type == 1,
								'bg-orange': product.offer.type == 2
								}"
              >{{ product.offer.lable }}</div>
            </div>
          </div>
          <div>
            <h3
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >{{product.title}}</h3>
            <div class="mt-2 text-gray-500 font-18">
              Starting price
              <span
                class="text-gray_1 font-18 font-weight-700"
              >{{ product.price }} EGP</span>
            </div>
            <div class="md:flex gap-3 align-center">
              <span class="text-gray_1 font-18 font-weight-400">Lot starts in</span>
              <div class="flex gap-4">
                <v-chip color="orange" rounded="18" size="large">{{ product.lotDate.days }} days</v-chip>
                <v-chip color="orange" rounded="18" size="large">{{ product.lotDate.hours }} Hours</v-chip>
                <v-chip
                  color="orange"
                  rounded="18"
                  size="large"
                >{{ product.lotDate.minutes }} Minutes</v-chip>
              </div>
            </div>
          </div>
          <div
            v-if="!mobile"
            class="p-2 cursor-pointer ms-auto me-0"
            @click="product.liked = !product.liked"
          >
            <img class="w-20 sm:w-6" v-if="product.liked" src="/assets/icons/red_heart.svg" alt />
            <img class="w-20 sm:w-6" v-else src="/assets/icons/blank_heart.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
const { locale } = useI18n();
const { product } = defineProps(["product"]);
</script>

<style lang="scss">
.badge {
  height: 59px !important;
  border-radius: 18px;
}
</style>