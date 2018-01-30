import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import { routers } from './router'
Vue.use(Router)
const RouterConfig = {
  routes: routers
}
export const router = new Router(RouterConfig);
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
