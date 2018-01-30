import Layout from '@/components/layout'
export const appRouter = [
  {
    path:'/index',
    icon:'home',
    name:'index',
    title:'首页',
    component:Layout,
    children:[
      {
        path:'index',
        title:'首页',
        name:'index',
        component:()=>import('@/views/index.vue')
      }
    ]
  }
]

export const routers = [
  ...appRouter,
]