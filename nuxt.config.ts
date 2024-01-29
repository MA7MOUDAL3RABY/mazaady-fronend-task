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
		// lang: {
		// 	locales: {
		// 		ar,
		// 		en
		// 	},
		// 	current: process.env.defualtLanguage
		// },
		// customVariables: ['@/style/variables.scss'],
		treeShake: true,
		theme: {
			options: {
				customProperties: false
			},
			dark: false,
			themes: {
				light: {
					primary: '#D20653',
					secondary: '#FFCB04',
					accent: '#FFCB04',
					accentlight: '#FFFAE6',
					subtitle: '#969BA0',
					danger: '#F24242',
					lighty: '#e9ecff',
				}
			}
		}
	},
})