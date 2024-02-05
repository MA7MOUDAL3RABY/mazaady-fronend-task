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
		extend(config, { isDev, isClient }) {
      // Add a rule to exclude the problematic module from optimization
      if (isClient) {
        config.optimization.splitChunks.exclude = [/node_modules\/gauge\/wide-truncate\.js/];
      }
    },
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