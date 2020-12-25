import request from '@/router/axios';

export const getTableListApi = () =>{
  return request({
    url: '/list/table/list',
    method: 'get',
  })
}