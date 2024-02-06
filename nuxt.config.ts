// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxt/image",
		"@pinia/nuxt",
		"@nuxtjs/i18n",
		"@nuxt/content",
		"@nuxt/test-utils/module",
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
	i18n: {
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
		strategy: 'no_prefix',
		vueI18n: '~/plugins/i18n.js',
		locales: [
			{
				code: 'en',
				iso: 'en-US'
			},

			{
				code: 'ar',
				iso: 'ar-EG'
			}
		],
		defaultLocale: 'en',
	},

})