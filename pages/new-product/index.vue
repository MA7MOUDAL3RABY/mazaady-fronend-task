<template>
  <div>
    <div class="sm:w-100 md:w-[500px] mx-auto">
      <v-autocomplete
        v-model="mainCategory"
        :disabled="loading"
        :items="categories"
        color="orange"
        item-title="name"
        item-value
        return-object
        label="Select Category"
        :loading="loading"
        @update:menu="subCategory = null"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item
            v-bind="props"
            :prepend-avatar="item.raw.image"
            :title="item.raw.name"
            :subtitle="item.raw.group"
          ></v-list-item>
        </template>
      </v-autocomplete>

      <v-autocomplete
        v-model="subCategory"
        :disabled="!mainCategory"
        :items="mainCategory?.children"
        color="orange"
        item-title="name"
        item-value="id"
        label="Select SubCategory"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item
            v-bind="props"
            :prepend-avatar="item.raw.image"
            :title="item.raw.name"
            :subtitle="item.raw.group"
          ></v-list-item>
        </template>
      </v-autocomplete>
    </div>
    <pre>
			{{subCategory}}
		</pre>
  </div>
</template>

<script setup>
import { useCategoriesStore } from "~/stores/categoriesStore";
import { ref, computed } from "vue";
const { getAllCats } = useCategoriesStore();

// ------------------------- Data ------------------------- //
const loading = ref();
const categories = ref([]);
const subCategories = ref([]);
const mainCategory = ref(null);
const subCategory = ref(null);
// ------------------------- Data ------------------------- //

// ------------------------- computed ------------------------- //
// const subCategories = computed(mainCategory =>
//   mainCategory.length ? mainCategory.children : []
// );
// ------------------------- computed ------------------------- //

// ------------------------- Methods ------------------------- //
getAllCats(res => {
  loading.value = false;
  categories.value = res;
});

// ------------------------- Methods ------------------------- //
</script>

<style>
</style>