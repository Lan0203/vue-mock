const userMap = {
  admin: {
    code: 0,
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://raw.githubusercontent.com/mgbq/nx-admin/master/src/assets/img/home/logo.png',
    name: 'Super Admin'
  },
  editor: {
    code: 0,
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body);
    const token=username;
    return {
      code: 200,
      data:{
        'access_token':token
      },
      msg:'获取token成功'
    }
    
  },
  logout: () => {
    return {
      code: 0,
      Message: 'success'
    }
  }
}