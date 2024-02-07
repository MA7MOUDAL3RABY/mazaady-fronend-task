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
        :disabled="loading"
        :items="mainCategory?.children"
        color="orange"
        item-title="name"
        return-object
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
          item-value="name"
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
    <v-table v-if="formData">
      <thead>
        <tr>
          <th class="text-left font-weight-700">Name</th>
          <th class="text-left font-weight-700">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Object.keys(formData)" :key="item.name">
          <td>{{ item }}</td>
          <td>{{ formData[item] }}</td>
        </tr>
      </tbody>
    </v-table>
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
const subCategory = ref(null);
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
  if (subCategory) {
    loading.value = true;
    getProperties(subCategory.value.id, res => {
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
    'main-category': mainCategory.value.name,
    'sub-category': subCategory.value.name,
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