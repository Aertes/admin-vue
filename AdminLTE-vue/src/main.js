// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Layout'
import router from './router'
import Jquery from './jquery'
import Bootstrap from './bootstrap'
import FastClick from './fastclick'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

FastClick.attach(document.body);