import request from '@/router/axios';

export const getArticleListApi = () =>{
  return request({
    url: '/account/article/list',
    method: 'get',
  })
}

export const getAppListApi = () =>{
  return request({
    url: '/account/app/list',
    method: 'get',
  })
}