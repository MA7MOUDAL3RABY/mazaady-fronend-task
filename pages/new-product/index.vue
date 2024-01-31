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
        :label="$t('SelectCategory')"
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
        :disabled="loading"
        :items="mainCategory?.children"
        color="orange"
        item-title="name"
        item-value="id"
        :label="$t('SelectSubCategory')"
        @update:menu="subCategorySelected"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :prepend-avatar="item.raw.image" :title="item.raw.name"></v-list-item>
        </template>
      </v-autocomplete>
      <div v-for="(field, i) in categoryFields" :key="i">
        <v-autocomplete
          v-model="form.properties.fields[field.slug]"
          :disabled="loading"
          :items="field.options"
          :details="field.description"
          color="razz"
          item-title="name"
          item-value="id"
          :label="field.name"
          item-children="child"
        >
          <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" :title="item.raw.name"></v-list-item>
          </template>
          <template v-slot:append-item>
            <v-list-item @click="selectOther(field.slug)" class="cursor-pointer" title="Other"></v-list-item>
          </template>
        </v-autocomplete>
        <div class="px-3 mb-5 mt-0" v-if="form.properties.fields[field.slug] == 'other'">
          <v-text-field
            v-model="form.properties.others[`${field.slug}`]"
            color="orange"
            class="mb-2"
            clearable
            :label="`Other ${field.name}`"
          ></v-text-field>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <v-btn class="bg-gradient" @click="submit">{{$t('Submit')}}</v-btn>
    </div>
    <div class="my-10"></div>
    <v-alert v-if="formData" type="success" variant="outlined">
      <pre>{{ formData }}</pre>
    </v-alert>
    <div class="my-10"></div>
    <div class="my-10"></div>
    <div class="my-10"></div>
    <div class="my-10"></div>
    <div class="my-10"></div>
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
const formData = ref(null);
const form = ref({
  properties: {
    menus: {},
    fields: {},
    others: {}
  }
});
// ------------------------- Data ------------------------- //

// ------------------------- Methods ------------------------- //
function subCategorySelected() {
  if (subCategoryID) {
    loading.value = true;
    getProperties(subCategoryID.value, res => {
      loading.value = false;
      categoryFields.value = res;
    });
  }
}
function selectOther(field) {
  form.value.properties.fields[field] = "other";
}

function submit() {
  let payload = {
    mainCategoryID: mainCategory.value.id,
    subCategoryID: subCategoryID,
    ...form.value.properties.fields
  };
  Object.assign(payload, { ...form.value.properties.others });
  formData.value = payload;
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 200);
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