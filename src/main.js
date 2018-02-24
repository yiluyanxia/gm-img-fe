// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import {router} from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/styles.css'
import './assets/css/adaptive.css'

import animate from 'animate.css'
import {VueMasonryPlugin} from 'vue-masonry';
import store from './store';
// import Vuex from 'vuex';
// Vue.use(Vuex);

Vue.use(iView);
Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  // router,
  components: { App },
  template: '<App/>'
})
