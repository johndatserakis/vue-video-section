import Vue from 'vue'
import App from './App.vue'

import VueVideoSection from '../src/index.js'
Vue.component('vue-video-section', VueVideoSection)

new Vue({
  el: '#app',
  render: h => h(App)
})
