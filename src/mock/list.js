import Mock from 'mockjs';

  const result = []

  for (let i = 1; i < 100; i++) {
    const tmpKey = i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  const basicList = []
  basicList.push({
    title: 'Alipay',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    description: '那是一种内在的东西， 他们到达不了，也无法触及的',
    owner: '付晓晓',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 90
    }
  })
  basicList.push({
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    owner: '曲丽丽',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 54
    }
  })
  basicList.push({
    title: 'Ant Design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    description: '生命就像一盒巧克力，结果往往出人意料',
    owner: '林东东',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 66
    }
  })
  basicList.push({
    title: 'Ant Design Pro',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    owner: '周星星',
    startAt: '2018-07-26 22:44',
    progress: {
      value: 30
    }
  })
  basicList.push({
    title: 'Bootstrap',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    owner: '吴加好',
    startAt: '2018-07-26 22:44',
    progress: {
      status: 'exception',
      value: 100
    }
  })
  const cardList=[];
  for(let i = 0; i<11; i++){
    cardList.push(
      {
        id: i,
        title: 'Alipay',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        content: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
      }
    )
  }
  export default {
    getTableList: config =>{
      return {
        code: 200,
        data: result,
        msg: '获取列表成功'
      }
    },
    getBasicList: config =>{
      return {
        code: 200,
        data: basicList,
        msg: '获取列表成功'
      }
    },
    getCardList: config =>{
      return {
        code: 200,
        data: cardList,
        msg: '获取列表成功'
      }
    },
  }  