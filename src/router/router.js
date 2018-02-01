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
      path:'direct-upload',
      title:'direct-upload',
      name:'direct-upload',
      component:()=>import('@/views/upload/direct-upload.vue')
    },
    {
      path:'cropper-upload',
      title:'cropper-upload',
      name:'cropper-upload',
      component:()=>import('@/views/upload/cropper-upload.vue')
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
    path: '/my-images',
    icon: 'upload',
    name: 'my-images',
    title: 'My Images',
    component: Layout,
    children: [{
      path: 'index',
      title: 'My Images',
      name: 'my-images',
      component: () =>
        import ('@/views/my-images/my-images.vue')
    }]
  },
]

export const routers = [
  otherRouter,
  ...appRouter,
]
