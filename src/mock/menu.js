const menuMap = {
  admin:[
    {icon:'iconfont icon-quanxian',keepAlive: '0',label: '权限管理',name:'权限管理',  path: '/admin',children:[
      {icon:'iconfont icon-chengyuan',keepAlive: "1", label: "用户管理", name: "用户管理",path: "/admin/user/index",children: []},
      {icon:'iconfont icon-menu',keepAlive: "0",label: "菜单管理",name: "菜单管理", path: "/admin/menu/index",children: []},
      {icon:'iconfont icon-jiaoseguanli',keepAlive: "0",label: "角色管理", name: "角色管理", path: "/admin/role/index",children: []},
    ]},
    {icon:'iconfont icon-dashboard',keepAlive: '0',label: 'Dashboard', name:'Dashboard', path: '/dashboard',children:[
      {icon:'iconfont icon-fenxi',keepAlive: "1", label: "分析页", name: "分析页",path: "/dashboard/analysis/index",children: []},
      {icon:'iconfont icon-jiankong',keepAlive: "0",label: "监控页",name: "监控页", path: "/dashboard/monitor/index",children: []},
      {icon:'iconfont icon-gongzuotai',keepAlive: "0",label: "工作台", name: "工作台", path: "/dashboard/workplace/index",children: []},
    ]},
    {icon:'iconfont icon-biaodan',keepAlive: '0',label: '表单页', name:'表单页', path: '/form',children:[
      {icon:'iconfont icon-jichubiaodan',keepAlive: "1", label: "基础表单", name: "基础表单",path: "/form/basic-form/index",children: []},
      {icon:'iconfont icon-xiangqing1',keepAlive: "0",label: "分步表单",name: "分步表单", path: "/form/step-form/index",children: []},
      {icon:'iconfont icon-xiangqing2',keepAlive: "0",label: "高级表单", name: "高级表单", path: "/form/advanced-form/index",children: []},
    ]},
    {icon:'iconfont icon-liebiao1',keepAlive: '0',label: '列表页', name:'列表页', path: '/list',children:[
      {icon:'iconfont icon-biaoge',keepAlive: "1", label: "基础表格", name: "基础表格",path: "/list/table-list/index",children: []},
      {icon:'iconfont icon-liebiao',keepAlive: "0",label: "标准列表",name: "标准列表", path: "/list/basic-list/index",children: []},
      {icon:'iconfont icon-qiapian',keepAlive: "0",label: "卡片列表", name: "卡片列表", path: "/list/card/index",children: []},
    ]},
    {icon:'iconfont icon-xiangqing',keepAlive: '0',label: '详情页', name:'详情页', path: '/profile',children:[
      {icon:'iconfont icon-caidanguanli',keepAlive: "1", label: "基础详情页", name: "基础详情页",path: "/profile/basic/index",children: []},
      {icon:'iconfont icon-liebiao1',keepAlive: "0",label: "高级详情页",name: "高级详情页", path: "/profile/advanced/index",children: []},
    ]},
    {icon:'iconfont icon-yemian',keepAlive: '0',label: '结果页', name:'结果页', path: '/result',children:[
      {icon:'iconfont icon-chenggong',keepAlive: "1", label: "成功页", name: "成功页",path: "/result/success/index",children: []},
      {icon:'iconfont icon-ziyuan156',keepAlive: "0",label: "失败页",name: "失败页", path: "/result/fail/index",children: []},
    ]},
    {icon:'iconfont icon-yichang',keepAlive: '0',label: '异常页', name:'异常页', path: '/exception',children:[
      {icon:'iconfont icon-icon-test',keepAlive: "1", label: "403", name: "403",path: "/exception/403/index",children: []},
      {icon:'iconfont icon-icon-test2',keepAlive: "0",label: "404",name: "404", path: "/exception/404/index",children: []},
      {icon:'iconfont icon-icon-test1',keepAlive: "0",label: "500", name: "500", path: "/exception/500/index",children: []},
    ]},
    {icon:'iconfont icon-yonghu',keepAlive: '0',label: '个人页', name:'个人页', path: '/account',children:[
      {icon:'iconfont icon-gerenzhongxin',keepAlive: "1", label: "个人中心", name: "个人中心",path: "/account/center/index",children: []},
      {icon:'iconfont icon-gerenshezhi1',keepAlive: "0",label: "个人设置",name: "个人设置", path: "/account/setting/index",children: []},
    ]},
  ],
  editor:[
    {icon:'iconfont icon-dashboard',keepAlive: '0',label: 'Dashboard', name:'Dashboard', path: '/dashboard',children:[
      {icon:'iconfont icon-fenxi',keepAlive: "1", label: "分析页", name: "分析页",path: "/dashboard/analysis/index",children: []},
      {icon:'iconfont icon-jiankong',keepAlive: "0",label: "监控页",name: "监控页", path: "/dashboard/monitor/index",children: []},
      {icon:'iconfont icon-gongzuotai',keepAlive: "0",label: "工作台", name: "工作台", path: "/dashboard/workplace/index",children: []},
    ]},
    {icon:'iconfont icon-biaodan',keepAlive: '0',label: '表单页', name:'表单页', path: '/form',children:[
      {icon:'iconfont icon-jichubiaodan',keepAlive: "1", label: "基础表单", name: "基础表单",path: "/form/basic-form/index",children: []},
      {icon:'iconfont icon-xiangqing1',keepAlive: "0",label: "分步表单",name: "分步表单", path: "/form/step-form/index",children: []},
      {icon:'iconfont icon-xiangqing2',keepAlive: "0",label: "高级表单", name: "高级表单", path: "/form/advanced-form/index",children: []},
    ]},
    {icon:'iconfont icon-liebiao1',keepAlive: '0',label: '列表页', name:'列表页', path: '/list',children:[
      {icon:'iconfont icon-biaoge',keepAlive: "1", label: "基础表格", name: "基础表格",path: "/list/table-list/index",children: []},
      {icon:'iconfont icon-liebiao',keepAlive: "0",label: "标准列表",name: "标准列表", path: "/list/basic-list/index",children: []},
      {icon:'iconfont icon-qiapian',keepAlive: "0",label: "卡片列表", name: "卡片列表", path: "/list/card/index",children: []},
    ]},
    {icon:'iconfont icon-xiangqing',keepAlive: '0',label: '详情页', name:'详情页', path: '/profile',children:[
      {icon:'iconfont icon-caidanguanli',keepAlive: "1", label: "基础详情页", name: "基础详情页",path: "/profile/basic/index",children: []},
      {icon:'iconfont icon-liebiao1',keepAlive: "0",label: "高级详情页",name: "高级详情页", path: "/profile/advanced/index",children: []},
    ]},
    {icon:'iconfont icon-yemian',keepAlive: '0',label: '结果页', name:'结果页', path: '/result',children:[
      {icon:'iconfont icon-chenggong',keepAlive: "1", label: "成功页", name: "成功页",path: "/result/success/index",children: []},
      {icon:'iconfont icon-ziyuan156',keepAlive: "0",label: "失败页",name: "失败页", path: "/result/fail/index",children: []},
    ]},
    {icon:'iconfont icon-yichang',keepAlive: '0',label: '异常页', name:'异常页', path: '/exception',children:[
      {icon:'iconfont icon-icon-test',keepAlive: "1", label: "403", name: "403",path: "/exception/403/index",children: []},
      {icon:'iconfont icon-icon-test2',keepAlive: "0",label: "404",name: "404", path: "/exception/404/index",children: []},
      {icon:'iconfont icon-icon-test1',keepAlive: "0",label: "500", name: "500", path: "/exception/500/index",children: []},
    ]},
    {icon:'iconfont icon-yonghu',keepAlive: '0',label: '个人页', name:'个人页', path: '/account',children:[
      {icon:'iconfont icon-gerenzhongxin',keepAlive: "1", label: "个人中心", name: "个人中心",path: "/account/center/index",children: []},
      {icon:'iconfont icon-gerenshezhi1',keepAlive: "0",label: "个人设置",name: "个人设置", path: "/account/setting/index",children: []},
    ]},
  ],

}

export default {
  getMenuInfo: config => {
    const { username } = JSON.parse(config.body);
    return {
      code: 200,
      data:{
        menu:menuMap[username]
      },
      msg:'获取菜单列表成功'
    }
  },
}