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