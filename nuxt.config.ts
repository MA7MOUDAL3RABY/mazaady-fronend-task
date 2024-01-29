// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxt/image', "@pinia/nuxt"],
	pinia: {
    storesDirs: ['./stores/**'],
  },
	css: [
		'vuetify/lib/styles/main.sass',
		'~/styles/app.scss',
	],
	plugins: [
		'~/plugins/vuetify.js',
	],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
})