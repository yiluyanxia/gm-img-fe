import Layout from '@/components/layout'

export const otherRouter = {
  path:'/',
  name:'otherRouter',
  // redirect:'home',
  component:Layout,
  children:[
    // {
    //   path:'home',
    //   title:'home',
    //   name:'home',
    //   component:()=>import('@/views/index.vue')
    // },
    {
      path:'upload',
      title:'upload',
      name:'upload',
      component:()=>import('@/views/upload.vue')
    },

  ]

}

export const appRouter = [{
    path: '/index',
    icon: 'home',
    name: 'index',
    title: '首页',
    component: Layout,
    children: [{
      path: 'index',
      title: '首页',
      name: 'index',
      component: () =>
        import ('@/views/index.vue')
    }]
  },
  {
    path: '/upload',
    icon: 'upload',
    name: 'index',
    title: '首页',
    component: Layout,
    children: [{
      path: 'index',
      title: '首页',
      name: 'index',
      component: () =>
        import ('@/views/index.vue')
    }]
  },
]

export const routers = [
  otherRouter,
  ...appRouter,
]
