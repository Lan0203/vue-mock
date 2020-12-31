import request from '@/router/axios';

export const getCardListApi = () =>{
  return request({
    url: '/list/card/list',
    method: 'get',
  })
}