// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		// "@nuxtjs/i18n",
		"@pinia/nuxt"
	],
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
	// i18n: {
	// 	vueI18n: '~/plugins/i18n.config.js',
	// 	locales: ['en', 'ar'],
	// 	defaultLocale: 'en',
	// },
	vuetify: {
		customVariables: ['~/styles/vuetify.scss'],
	},
})