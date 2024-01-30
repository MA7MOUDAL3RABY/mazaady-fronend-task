<template>
  <div class="mx-2">
    <v-chip color="orange" rounded="18" size="large" class="badge">
      <template #prepend>
        <NuxtImg class="app__icon" :src="item.iconPath" alt="icon" />
      </template>
      <div class="content ms-2">
        <span class="font-12 font-weight-700 text-dark_1">
          {{ item.value }}
          <span v-if="item.sub" class="text-gray_3">( {{ item.sub }} )</span>
        </span>
        <h4 class="font-12 font-weight-400">{{ item.title }}</h4>
      </div>
    </v-chip>
  </div>
</template>

<script setup>
const { item } = defineProps(["item"]);
</script>

<style lang="scss">
.badge {
  height: 59px !important;
  border-radius: 18px;
}
</style>