import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Ripple from 'primevue/ripple'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import ThemeState from './store/theme-state.js'
import Noir from './presets/Noir.js'

import StyleClass from 'primevue/styleclass' // importante para los estilos del componente ThemeSwitcher

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false
    }
  },

  ripple: true
})
app.use(ThemeState)

app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)

app.mount('#app')
