<script setup>
const { locale } = useI18n();
</script>
<template>
  <div class="app-content" :class="{'rtl': locale == 'ar', 'ltr': locale == 'en'}">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>