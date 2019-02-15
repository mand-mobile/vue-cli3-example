import Vue from 'vue';
// @ts-ignore
import FastClick from 'fastclick';
import App from './App.vue';
import './assets/responsive';
import './assets/global.css';
// import 'mand-mobile/lib/mand-mobile.css';

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = (targetElement: HTMLElement) => {
    targetElement.focus();
  };
  document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    FastClick.attach(document.body);
  }, false);
  
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
