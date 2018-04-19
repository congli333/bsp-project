let routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    redirect: '/index/home',
    component: () => import('../views/Index'),
    name: 'index',
    children: [
      {
        path: 'createAD', // 新建广告
        redirect: '/index/createAD/creativity',
        component: () => import('../views/CreateAD'),
        index: 'createAD',
        children: [
          {
            path: '/index/createAD/creativity',
            name: 'creativity',
            component: () => import('../views/Creativity')
          }, {
            path: '/index/createAD/element',
            name: 'element',
            component: () => import('../views/Element')
          }, {
            path: '/index/createAD/planner',
            name: 'planner',
            component: () => import('../views/Planner')
          }
        ]
      }, {
        path: 'home', // 首页
        name: 'home',
        component: () => import('../views/Home')
      }, {
        path: 'dataCenter', // 数据中心
        name: 'dataCenter',
        conmponent: () => import('../views/DataCenter')
      }, {
        path: 'toolBox', // 工具箱
        name: 'toolBox',
        component: () => import('../views/ToolBox')
      }, {
        path: 'adAdmin',
        name: 'adAdmin',
        redirect: '/index/adAdmin/adminEle',
        component: () => import('../App.vue'),
        children: [
          {
            path: 'adminEle',
            name: 'adminEle',
            component: () => import('../views/AdminEle')
          }, {
            path: 'adminPlan',
            name: 'adminPlan',
            component: () => import('../views/AdminPlan')
          }, {
            path: 'adminCreate',
            name: 'adminCreate',
            component: () => import('../views/AdminCreate')
          }
        ]
      }
    ]
  }, {
    path: '/login',
    component: () => import('../views/Login'),
    name: 'login'
  }
]
export default routes
