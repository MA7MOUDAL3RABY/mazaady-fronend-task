export default (app) => {
	app.provide('Api', async function Api(
		method = 'get',
		uri,
		payload = null,
		successCallback = null,
		failCallback = null,
	) {
		app.store.commit('utils/load', true);
		try {
			const response = await app.$axios[method](uri, payload);
			if (response.data.message && method !== 'get') {
				app.$alert("success", response.data.message);
			}
			if (successCallback) {
				successCallback(response);
			}
		} catch (error) {
			app.store.commit('utils/load', false);
			console.log('================== Error ==================');
			console.log(error.response);
			console.log('================== Error ==================');
			if (error.response && error.response.data && error.response.data.message) {
				app.$alert("error", error.response.data.message);
			}
			if (failCallback) {
				failCallback(error.response);
			}
		} finally {
			app.store.commit('utils/load', false);
		}
	});
};