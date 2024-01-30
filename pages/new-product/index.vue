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
        @update:menu="subCategoryID = null"
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
        v-model="subCategoryID"
        :disabled="!mainCategory"
        :items="mainCategory?.children"
        color="orange"
        item-title="name"
        item-value="id"
        label="Select SubCategory"
        @update:menu="subCategorySelected"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :prepend-avatar="item.raw.image" :title="item.raw.name"></v-list-item>
        </template>
      </v-autocomplete>
      <v-autocomplete
        v-for="(field, i) in categoryFields"
        :key="i"
        v-model="form.properties[field.slug]"
        :disabled="false"
        :items="field.options"
        :aria-describedby="field.description"
        color="orange"
        item-title="name"
        item-value="id"
        :label="field.name"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :title="item.raw.name"></v-list-item>
        </template>
      </v-autocomplete>
    </div>
    <pre>
				{{categoryFields}}
		</pre>
  </div>
</template>

<script setup>
import { useCategoriesStore } from "~/stores/categoriesStore";
import { ref } from "vue";
const { getAllCats, getProperties } = useCategoriesStore();

// ------------------------- Data ------------------------- //
const loading = ref();
const categories = ref([]);
const subCategories = ref([]);
const mainCategory = ref(null);
const subCategoryID = ref(null);
const categoryFields = ref(null);
const form = ref({
  subCategoryID: null,
  properties: {}
});
// ------------------------- Data ------------------------- //

// ------------------------- Methods ------------------------- //
function subCategorySelected() {
  console.log("subCategoryID", subCategoryID);
  if (subCategoryID) {
    loading.value = true;
    getProperties(subCategoryID.value, res => {
      loading.value = false;
      console.log("reeeeeeeees", res);
      categoryFields.value = res;
    });
  }
}
// ------------------------- Methods ------------------------- //

// ------------------------- mounted ------------------------- //
getAllCats(res => {
  loading.value = false;
  categories.value = res.categories;
});
// ------------------------- mounted ------------------------- //
</script>

<style>
</style>