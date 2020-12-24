import request from '@/router/axios';

export const getHotSearchtApi = () =>{
  return request({
    url: '/dashboard/monitor/hotsearch',
    method: 'get',
  })
}

export const getHDYCApi = () =>{
  return request({
    url: '/dashboard/monitor/hdyc',
    method: 'get',
  })
}
