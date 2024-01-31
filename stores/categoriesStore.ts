// store/categories.js

import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categoriesStore', {
	state: () => ({
	}),

	actions: {
		async Api(url: string, callback: any) {
			const response = await useFetch(`https://staging.mazaady.com/api/v1${url}`, {
				method: "GET",
				headers: {
					"private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
					"lang": 'ar'
				},
				onResponse({ response }) {
					callback(response._data.data);
				}
			});
		},
		getAllCats(callback: any) {
			this.Api("/get_all_cats", callback);
		},
		getProperties(CategoryID: number, callback: any) {
			return this.Api(`/properties?cat=${CategoryID}`, callback);
		},
	},
});
