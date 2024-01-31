<template>
  <div>
    <v-chip color="orange" rounded="18" class="badge">
      <template #prepend>
        <img class="w-[24px] md:w-[24px]" :src="item.iconPath" alt="icon" />
      </template>
      <div class="content ms-2">
        <span class="font-12 font-weight-700 text-dark_1">
          {{ item.value }}
          <span v-if="item.sub" class="text-gray_3">( {{ item.sub }} )</span>
        </span>
        <h4 class="font-12 font-weight-400">{{ $t(item.key) }}</h4>
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