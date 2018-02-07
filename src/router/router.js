import Layout from '@/components/layout'

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  // redirect:'home',
  component: Layout,
  children: [
    // {
    //   path:'home',
    //   title:'home',
    //   name:'home',
    //   component:()=>import('@/views/index.vue')
    // },
    {
      path: 'direct-upload',
      title: 'direct-upload',
      name: 'direct-upload',
      component: () =>
        import ('@/views/upload/direct-upload.vue')
    },
    {
      path: 'cropper-upload',
      title: 'cropper-upload',
      name: 'cropper-upload',
      component: () =>
        import ('@/views/upload/cropper-upload.vue')
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
  {
    path: '/album',
    icon: 'ios-browsers',
    name: 'album',
    title: 'album',
    component: Layout,
    children: [{
      path: 'index',
      title: 'All',
      name: 'album',
      component: () =>
        import ('@/views/album/album.vue')
    }]
  },
  {
    path: '/help',
    icon: 'help-circled',
    name: 'help',
    title: 'help',
    component: Layout,
    children: [{
      path: 'index',
      title: 'help',
      name: 'help',
      component: () =>
        import ('@/views/help/help.vue')
    }]
  },
]

export const routers = [
  otherRouter,
  ...appRouter,
]
