<script setup lang="ts">
import { useProductsStore } from "~/stores/productsStore";
const { products } = useProductsStore();
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
            <HomeProductsProductCard v-for="(product, i) in products" :key="i" :product="product"></HomeProductsProductCard>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
