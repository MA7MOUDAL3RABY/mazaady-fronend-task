// store/categories.js

import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categoriesStore', {
	state: () => ({
	}),

	actions: {
		async getAllCats(callback: any) {

			const response = await useFetch("https://staging.mazaady.com/api/v1/get_all_cats", {
				method: "GET",
				headers: {
					"private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
				},
				onResponse({ response }) {
					callback(response._data.data.categories);
				}
			});
		},
	},
});
