import request from '@/router/axios';

export const getTimeLineListApi = () =>{
  return request({
    url: '/admin/timeline/list',
    method: 'get',
  })
}

export const getSecondListApi = (manid) =>{
  console.log("manid==",manid);
  return request({
    url: '/admin/timeline/list1',
    method: 'post',
    data: manid
  })
}
export const getThreeListApi = (manid) =>{
  console.log("manid==",manid);
  return request({
    url: '/admin/timeline/list2',
    method: 'post',
    data: manid
  })
}