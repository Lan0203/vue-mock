import request from '@/router/axios';

export const loginByUserApi = (username, password) =>{
  return request({
    url: '/auth/token',
    header: {'Authorization': 'Basic '},
    method: 'post',
    data: {username, password}
  })
}

export const getUserInfoApi = (username) => {
  return request({
    url: '/admin/user/info',
    method: 'post',
    data: {username}
  })
}

export const logoutApi = () => {
  return request({
    url: '/user/logout',
    method: 'delete'
  })
}