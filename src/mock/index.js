import Mock from 'mockjs';
import login from './login';
import user from './user';
import menu from './menu';
import dashboard from './dashboard';
import list from './list';
import account from './account';
import timeline from './timeline';

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

//用户管理
Mock.mock(/\/admin\/add\/user/, 'post', user.addUser)
Mock.mock(/\/admin\/edit\/user/, 'post', user.editUser)
Mock.mock(/\/admin\/del\/user/, 'post', user.delUser)
//获取菜单信息
Mock.mock(/\/admin\/menu/, 'post', menu.getMenuInfo)
//获取时间轴信息
Mock.mock(/\/admin\/timeline\/list/, 'get', timeline.getTimelineList)
Mock.mock(/\/admin\/timeline\/list1/, 'post', timeline.getSecondList)
Mock.mock(/\/admin\/timeline\/list2/, 'post', timeline.getThreeList)
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
Mock.mock(/\/list\/card\/list/, 'get', list.getCardList)

//获取个人信息文章列表
Mock.mock(/\/account\/article\/list/, 'get', account.getArticleList)
Mock.mock(/\/account\/app\/list/, 'get', account.getAppList)


export default Mock
