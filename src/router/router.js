import Layout from '@/components/layout'
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () =>
    import ('@/views/login/login.vue')
};
export const loginPwdRouter = {
  path: '/login-pwd',
  name: 'login-pwd',
  meta: {
    title: 'Login - 登录'
  },
  component: () =>
    import ('@/views/login/login-pwd.vue')
};

export const regRouter = {
  path: '/reg',
  name: 'reg',
  meta: {
    title: 'reg - 注册'
  },
  component: () =>
    import ('@/views/reg/reg.vue')
};
export const regPwdRouter = {
  path: '/reg-pwd',
  name: 'reg-pwd',
  meta: {
    title: 'reg - 注册'
  },
  component: () =>
    import ('@/views/reg/reg-pwd.vue')
};

export const page404 = {
  path: '/404',
  name: 'error-404',
  meta: {
      title: '404-页面不存在'
  },
  component: () => import('@/views/error-page/404.vue')
};
export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
      title: '500-页面不存在'
  },
  component: () => import('@/views/error-page/500.vue')
};

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect:'login',
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

export const appRouter = [
  // {
  //   path: '/index',
  //   icon: 'home',
  //   name: 'index',
  //   title: '首页',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     title: '首页',
  //     name: 'index',
  //     component: () =>
  //       import ('@/views/index.vue')
  //   }]
  // },
  {
    path: '/my-images',
    icon: 'upload',
    name: 'my-images',
    title: 'My Images',
    component: Layout,
    children: [{
      path: 'index',
      icon: 'upload',
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
    title: 'Album',
    component: Layout,
    children: [{
      path: 'index',
      icon: 'ios-browsers',
      title: 'All',
      name: 'album',
      component: () =>
        import ('@/views/album/album.vue')
    }]
  },
  // {
  //   path: '/help',
  //   icon: 'help-circled',
  //   name: 'help',
  //   title: 'Other',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     icon: 'help-circled',
  //     title: 'help',
  //     name: 'help',
  //     component: () =>
  //       import ('@/views/help/help.vue')
  //   }]
  // },
]

export const routers = [
  loginRouter,
  loginPwdRouter,
  regRouter,
  regPwdRouter,
  otherRouter,
  ...appRouter,
  page500,
  page404
]
