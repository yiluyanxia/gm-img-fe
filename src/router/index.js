import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import {
  routers
} from './router'
import iView from 'iview';
import Util from '@/libs/util.js';
Vue.use(Router)
const RouterConfig = {
  routes: routers
}
export const router = new Router(RouterConfig);
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});


router.afterEach((to) => {
  iView.LoadingBar.finish();
});
// export default new Router({
//   routes: [
//     {
//       path: '/index',
//       icon: 'home',
//       name: 'index',
//       title: '首页',
//       component: Layout,
//       // redirect: 'index',
//       children: [{
//         path: '/index',
//         title: '首页',
//         name: 'index',
//         component: resolve => {
//           require(['@/views/index.vue'], resolve);
//         }
//       }]
//     },
//   ]
// })
