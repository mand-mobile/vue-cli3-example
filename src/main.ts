import Vue from 'vue';
// @ts-ignore
import FastClick from 'fastclick';
import App from './App.vue';
import './assets/responsive';
import './assets/global.css';
// import 'mand-mobile/lib-vw/mand-mobile.css'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement: HTMLElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
