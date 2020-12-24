import request from '@/router/axios';

export const getUserListApi = () =>{
  return request({
    url: '/admin/user',
    method: 'post',
  })
}