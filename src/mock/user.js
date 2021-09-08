import Mock from 'mockjs';

const userMap = {
  admin: {
    code: 0,
    roles: ['admin'],
    introduction: '我是超级管理员',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    username:'admin',
  },
  editor: {
    code: 0,
    roles: ['editor'],
    introduction: '我是编辑',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    username:'editor'
  }
}

const roleMap = {
  admin:[
    
  ],
}

let userList = [];
const count = 20;
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
  },
  addUser: (config) =>{
    userList.splice(0,0,JSON.parse(config.body))
    return {
      code: 200,
      data: userList,
      msg: '添加用户成功'
    }
  },
  editUser: (config) =>{
    let item= JSON.parse(config.body);
    userList.forEach((items,index) =>{
      if(items.userId == item.userId){
        userList.splice(index,1,item)
      }
    });
    return {
      code: 200,
      data: userList,
      msg: '修改用户成功'
    }
  },
  delUser: (config) =>{
    let item= JSON.parse(config.body);
    userList.forEach((items,index) =>{
      if(items.userId == item.userId){
        userList.splice(index,1)
      }
    });
    return {
      code: 200,
      data: userList,
      msg: '删除用户成功'
    }
  }
}