import request from '@/router/axios';

export const getUserListApi = () =>{
  return request({
    url: '/admin/user',
    method: 'post',
  })
}

export const addUserApi = (param) =>{
  return request({
    url: '/admin/add/user',
    method: 'post',
    data:param
  })
}

export const editUserApi = (param) =>{
  return request({
    url: '/admin/edit/user',
    method: 'post',
    data:param
  })
}

export const delUserApi = (param) =>{
  return request({
    url: '/admin/del/user',
    method: 'post',
    data:param
  })
}