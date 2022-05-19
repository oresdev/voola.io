import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import app from './app.vue'

const i18n = createI18n({
  fallbackLocale: 'en-US', // alternative
  legacy: false, // This must be added to use the CompositionnAPI.
  locale: navigator.language, // preferred
})

createApp(app).use(i18n).mount('#app')
