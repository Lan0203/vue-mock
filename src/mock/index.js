import Mock from 'mockjs';
import login from './login';
import user from './user';
import menu from './menu';
import dashboard from './dashboard';
import list from './list';

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})
const Random=Mock.Random;

// 登录相关
Mock.mock(/\/auth\/token/, 'post', login.loginByUsername)
Mock.mock(/\/user\/logout/, 'delete', login.logout)

//获取个人信息
Mock.mock(/\/admin\/user\/info/, 'post', user.getUserInfo)
Mock.mock(/\/admin\/user/, 'post', user.getUserList)

//获取菜单信息
Mock.mock(/\/admin\/menu/, 'post', menu.getMenuInfo)

//获取dashboard
Mock.mock(/\/dashboard\/analysis\/searchlist/, 'get', dashboard.getSearchList)
Mock.mock(/\/dashboard\/monitor\/hotsearch/, 'get', dashboard.getHotSearch)
Mock.mock(/\/dashboard\/monitor\/hdyc/, 'get', dashboard.getHDYC)
Mock.mock(/\/dashboard\/workplace\/project/, 'get', dashboard.getProjects)
Mock.mock(/\/dashboard\/workplace\/activity/, 'get', dashboard.getActivity)
Mock.mock(/\/dashboard\/workplace\/teams/, 'get', dashboard.getTeams)
Mock.mock(/\/dashboard\/workplace\/radar/, 'get', dashboard.getRadar)

//获取list
Mock.mock(/\/list\/table\/list/, 'get', list.getTableList)
Mock.mock(/\/list\/basic\/list/, 'get', list.getBasicList)
export default Mock
