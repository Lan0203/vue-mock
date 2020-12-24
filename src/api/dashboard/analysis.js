import request from '@/router/axios';

export const getSearchListApi = () =>{
  return request({
    url: '/dashboard/analysis/searchlist',
    method: 'get',
  })
}