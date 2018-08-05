import Vue from 'vue';
// @ts-ignore
import FastClick from 'fastclick';
import App from './App.vue';
import './assets/responsive';
import './assets/global.css';
// import 'mand-mobile/lib-vw/mand-mobile.css'

if ('ontouchstart' in window) {
  FastClick.attach(document.body);
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
