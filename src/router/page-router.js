import Layout from '@/page/index/'

export default [
  {
    path: '/login',
    name: '登录页',
    component: () =>
      import(/* webpackChunkName: "page" */ '@/page/login/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/lock',
    name: '锁屏页',
    component: () =>
      import(/* webpackChunkName: "page" */ '@/page/lock/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/',
    name: '主页',
    redirect: '/wel'
  },
]