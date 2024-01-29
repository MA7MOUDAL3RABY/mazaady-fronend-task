export const useGeneralStore = defineStore('generalStore', {
	state: () => ({
		loading: false,
	}),
	actions: {
		load(state) {
			this.loading = state
		}
	}
})
