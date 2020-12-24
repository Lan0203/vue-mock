import request from '@/router/axios';

export const getProjectsApi = () =>{
  return request({
    url: '/dashboard/workplace/project',
    method: 'get',
  })
}
export const getActivityApi = () =>{
  return request({
    url: '/dashboard/workplace/activity',
    method: 'get',
  })
}

export const getTeamsApi = () =>{
  return request({
    url: '/dashboard/workplace/teams',
    method: 'get',
  })
}

export const getRadarApi = () =>{
  return request({
    url: '/dashboard/workplace/radar',
    method: 'get',
  })
}