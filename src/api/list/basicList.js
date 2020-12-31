import request from '@/router/axios';

export const getBasicListApi = () =>{
  return request({
    url: '/list/basic/list',
    method: 'get',
  })
}