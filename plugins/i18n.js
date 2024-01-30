import Ar from '../lang/ar.json';
import En from '../lang/en.json';
export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en: En,
		ar: Ar
	}
}))