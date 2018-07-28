import Vue from 'vue'
import FastClick from 'fastclick'
import 'normalize.css'
import App from './App.vue'
import './assets/responsive'
import './assets/global.css'

if ('ontouchstart' in window) {
  FastClick.attach(document.body)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
