// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import {router} from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import './assets/css/styles.css'
import './assets/css/adaptive.css'

import animate from 'animate.css'
import {VueMasonryPlugin} from 'vue-masonry'
import store from './store'
import VueI18n from 'vue-i18n'
// import Vuex from 'vuex'
// Vue.use(Vuex);

Vue.use(iView)
Vue.use(VueMasonryPlugin)
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale:'zh-CN',  // 语言标识 使用 this.$i18n.locale 切换语言

  messages:{
    'zh-CN':require('./libs/lang/zh'),
    'en-US':require('./libs/lang/en'),
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n, 
  router: router,
  store: store,
  // router,
  components: { App },
  template: '<App/>'
})
