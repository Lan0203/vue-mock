import Mock from 'mockjs';

const userMap = {
  admin: {
    code: 0,
    roles: ['admin'],
    introduction: '我是超级管理员',
    //avatar: 'https://raw.githubusercontent.com/mgbq/nx-admin/master/src/assets/img/home/logo.png',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    username:'admin'
  },
  editor: {
    code: 0,
    roles: ['editor'],
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    username:'editor'
  }
}

const roleMap = {
  admin:[
    
  ],
}

let userList = [];
const count = 10;
Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  }
})
for(let i = 0; i < count; i++){
  userList.push(Mock.mock({
    userId: Mock.Random.guid(),
    username: Mock.Random.cname(),
    'phone': /^1[385][1-9]\d{8}/,
    'lockFlag|0-1':1,
    createTime:Mock.Random.datetime(),
  }))
}

export default {
  getUserInfo: config => {
    const { username } = JSON.parse(config.body);
    return {
      code: 200,
      data:{
        sysUser:userMap[username]
      },
      msg:'获取用户信息成功'
    }
  },
  getUserList: config => {
    return {
      code: 200,
      data: userList,
      msg: '获取用户列表成功'
    }
  }
}