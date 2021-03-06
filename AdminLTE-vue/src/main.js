// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './lib/jquery-vender.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './assets/dist/js/jquery.dataTables.min.js'
import './assets/dist/js/dataTables.bootstrap.min.js'
import './assets/dist/js/adminlte.min.js'
import './assets/dist/css/AdminLTE.min.css'
import './assets/dist/css/dataTables.bootstrap.min.css'
import './assets/dist/css/skins/_all-skins.min.css'
import './assets/dist/js/default.js'
import './assets/dist/js/zTree_v3/js/jquery.ztree.all'
import './assets/dist/js/zTree_v3/css/zTreeStyle/zTreeStyle.css'
import './assets/dist/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.prototype.$http = axios;