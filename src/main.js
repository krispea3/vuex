import Vue from 'vue';
import App from './App.vue';
// This makes the store available in the whole application.
// To access it from components just access $store
import { store } from "./store/store";

new Vue({
  el: '#app',
  store,
  // ES6 store definition is like
  // store: store,
  // Both works
  render: h => h(App)
})
