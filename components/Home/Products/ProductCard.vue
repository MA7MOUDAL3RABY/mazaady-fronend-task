<template>
  <div class="mx-2">
    <div class="d-flex my-5">
      <div class="bg-white rounded-xl overflow-hidden w-100">
        <div class="flex align-start gap-4">
          <!-- Side Image -->
          <div>
            <img
              class="xs:w-100 md:w-200"
              :src="`assets/products/${product.image}`"
              alt="product image"
            />
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
            <div class="md:flex-row align-center">
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
          <div class="p-2 cursor-pointer ms-auto me-0" @click="product.liked = !product.liked">
            <img class="w-20 sm:w-6" v-if="product.liked" src="/assets/icons/red_heart.svg" alt />
            <img class="w-20 sm:w-6" v-else src="/assets/icons/blank_heart.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss">
.badge {
  height: 59px !important;
  border-radius: 18px;
}
</style>