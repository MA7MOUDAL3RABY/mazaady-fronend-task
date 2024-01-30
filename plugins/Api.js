import {
	useGeneralStore
} from '../stores/general.ts';

const general = useGeneralStore();
export default defineNuxtPlugin((app, general) => {
	app.provide('Api', async function Api(
		method = 'get',
		uri,
		payload = null,
		successCallback = null,
		failCallback = null,
	) {
		general.load(true);
		try {
			const response = await app.$axios[method](uri, payload);
			if (successCallback) {
				successCallback(response);
			}
		} catch (error) {
			general.load(false);
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
			general.load(false);
		}
	});
});