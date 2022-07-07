import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import app from './app.vue'
import router from './router'

const i18n = createI18n({
  fallbackLocale: 'en-US', // alternative
  legacy: false, // This must be added to use the CompositionnAPI.
  locale: navigator.language, // preferred
})

createApp(app).use(router).use(i18n).mount('#app')
