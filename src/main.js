import Vue from 'vue'
import FastClick from 'fastclick'
import 'normalize.css'
import App from './App.vue'
import './assets/responsive'
import './assets/global.css'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
