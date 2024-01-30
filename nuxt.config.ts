// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxt/image",
		"@pinia/nuxt",
		// "@nuxtjs/i18n",
		"@nuxt/content",
		"@nuxtjs/tailwindcss"
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

})