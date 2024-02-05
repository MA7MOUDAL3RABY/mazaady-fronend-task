import { fetch } from '@nuxt/test-utils/e2e'

const res = await fetch('https://staging.mazaady.com/api/v1/get_all_cats')
const { body, headers } = res
