// plugins/vuetify.js
import {
	createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		theme: {
			defaultTheme: 'mazaadyTheme',
			themes: {
				mazaadyTheme: {
					dark: false,
					light: {
						colors: {
							razz: '#D20653',
							orange: '#FFCB04',
							gray_1: '#828282',
							dark_1: '#363333',
							primary: '#D20653',
							secondary: '#FFCB04',
							accent: '#FFCB04',
							accentlight: '#FFFAE6',
							subtitle: '#969BA0',
							danger: '#F24242',
							lighty: '#e9ecff',
						},
					}
				},
			},
		},
	})

	nuxtApp.vueApp.use(vuetify)
})