<script setup lang="ts">
import { useProductsStore } from "~/stores/productsStore";
import { ref } from "vue";

const { products } = useProductsStore();
const filter = ref("products");
const filters = ["products", "articles", "reviews"];
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5" lg="4">
        <HomePersonCard></HomePersonCard>
        <div class="my-5"></div>
        <HomeQrCard></HomeQrCard>
      </v-col>
      <v-col cols="12" sm="7" lg="8">
        <v-card>
          <div class="p-5">
            <div class="flex justify-space-between my-3">
              <div class="flex gap-2">
                <span
                  v-for="(item, i) in filters"
                  :key="i"
                  class="filter-btn"
                  @click="filter = item"
                  :class="{'active': item == filter}"
                >{{ $t(item) }}</span>
              </div>
              <div>
                <v-btn class="bg-gradient mx-4" :to="'/new-product'">
                  <NuxtImg class="app__icon__small" src="/assets/icons/plus.svg" />
                  {{$t('add_review')}}
                </v-btn>
              </div>
            </div>
            <h3 class="text-[32px] font-weight-700 text-[#333333] flex align-center gap-3">
              {{ $t('products') }}
              <span v-if="products.length" class="text-gray_3 text-[14px]">({{ products.length }})</span>
            </h3>
            <HomeProductsProductCard v-for="(product, i) in products" :key="i" :product="product"></HomeProductsProductCard>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.filter-btn {
  border-radius: 14px;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  width: 108px;
  padding: 8px;
  color: #828282;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &.active {
    color: #ff951d;
    border: 1px solid, #ff951d;
    background: #fff5e9;
  }
}
</style>