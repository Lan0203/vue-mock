import request from '@/router/axios';

export const getMenuApi = (username) =>{
  return request({
    url: '/admin/menu',
    method: 'post',
    data: {username}
  })
}