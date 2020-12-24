import Mock from 'mockjs';

let searchList=[];
for(let i = 0; i < 50; i++){
  searchList.push(Mock.mock({
    id:i+1,
    name: Mock.Random.ctitle(2),
    userNum:  Mock.Random.integer(100,1000),
    upNum:  Mock.Random.integer(1,100),
    'type|0-1':1,
  }))
}

let hotSearch=[];
for(let i = 0; i < 40; i++){
  hotSearch.push(Mock.mock({
    name:Mock.Random.city(),
    value:Mock.Random.integer(100,1000)
  }))
}
let hdList = [];
for(let i=0 ; i< 12; i++){
  hdList.push(Mock.Random.integer(100,300))
}
const projects = [
  {
    id: 1,
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    title: 'Alipay',
    description: '那是一种内在的东西， 他们到达不了，也无法触及的',
    status: 1,
    updatedAt: '2018-07-26 00:00:00'
  },
  {
    id: 2,
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    title: 'Angular',
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    status: 1,
    updatedAt: '2018-07-26 00:00:00'
  },
  {
    id: 3,
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    title: 'Ant Design',
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    status: 1,
    updatedAt: '2018-07-26 00:00:00'
  },
  {
    id: 4,
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    title: 'Ant Design Pro',
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    status: 1,
    updatedAt: '2018-07-26 00:00:00'
  },
  {
    id: 5,
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    title: 'Bootstrap',
    description: '凛冬将至',
    status: 1,
    updatedAt: '2018-07-26 00:00:00'
  },
  {
    id: 6,
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    title: 'Vue',
    description: '生命就像一盒巧克力，结果往往出人意料',
    status: 1,
    updatedAt: '2018-07-26 00:00:00'
  }
]
const activity = [
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: '白鹭酱油开发组',
      action: '更新',
      event: '番组计划'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '蓝莓酱',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
    },
    project: {
      name: '白鹭酱油开发组',
      action: '更新',
      event: '番组计划'
    },
    time: '2018-08-23 09:35:37'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: '白鹭酱油开发组',
      action: '创建',
      event: '番组计划'
    },
    time: '2017-05-27 00:00:00'
  },
  {
    id: 1,
    user: {
      nickname: '曲丽丽',
      avatar: '@image(64x64)'
    },
    project: {
      name: '高逼格设计天团',
      action: '更新',
      event: '六月迭代'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '@name',
      avatar: '@image(64x64)'
    },
    project: {
      name: '高逼格设计天团',
      action: 'created',
      event: '六月迭代'
    },
    time: '2018-08-23 14:47:00'
  },
  {
    id: 1,
    user: {
      nickname: '曲丽丽',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    project: {
      name: '高逼格设计天团',
      action: 'created',
      event: '六月迭代'
    },
    time: '2018-08-23 14:47:00'
  }
]
const teams=[
  {
    id: 1,
    name: '科学搬砖组',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  },
  {
    id: 2,
    name: '程序员日常',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
  },
  {
    id: 1,
    name: '设计天团',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
  },
  {
    id: 1,
    name: '中二少女团',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
  },
  {
    id: 1,
    name: '骗你学计算机',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
  }
]
const radar=[
  {
    "item": "引用",
    "个人": 70,
    "团队": 50,
    '部门': 40,
  },
  {
    "item": "口碑",
    "个人": 60,
    "团队": 70,
    '部门': 40,
  },
  {
    "item": "产量",
    "个人": 50,
    "团队": 60,
    '部门': 40,
  },
  {
    "item": "贡献",
    "个人": 40,
    "团队": 50,
    '部门': 40,
  },
  {
    "item": "热度",
    "个人": 60,
    "团队": 70,
    '部门': 40,
  },
]
export default {
  getSearchList: config =>{
    return {
      code: 200,
      data: searchList,
      msg: '获取搜索列表成功'
    }
  },

  getHotSearch: config =>{
    return {
      code: 200,
      data: hotSearch,
      msg: '获取热门搜索列表成功'
    }
  },
  getHDYC: config=>{
    return {
      code: 200,
      data: hdList,
      msg: '获取活动预测数据成功'
    }
  },
  getProjects:  () => {
    return {
      data: projects, 
      code: 200,
      msg: '获取项目列表成功'
    }
  },
  getActivity: () => {
    return {
      data: activity,
      code: 200,
      msg: '获取动态列表成功'
    }
  },
  getTeams: () => {
    return {
      data: teams,
      code: 200,
      msg: '获取团队列表成功'
    }
  },
  getRadar: () => {
    return {
      data: radar,
      code: 200,
      msg: '获取雷达图数据成功',
    }
  }
}