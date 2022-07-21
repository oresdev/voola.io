import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import app from './app.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

createApp(app)
  .use(router)
  .use(
    createI18n({
      fallbackLocale: 'en-US', // alternative
      legacy: false, // This must be added to use the CompositionnAPI.
      locale: navigator.language, // preferred
    })
  )
  .use(VueScrollTo, {
    duration: 1000,
    easing: 'ease',
  })
  .mount('#app')
