// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import store from './store/store'
import test from './test'
import app from './App.vue'
// 使用mint ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.config.productionTip = false
/* eslint-disable no-new */
var vm = new Vue({
  router,	
  store,
  render: h => h(app)
}).$mount('#app')