import { serialize } from '@/util/util';
import axios from 'axios';
import router from '@/router/index';
import qs from 'qs';
import store from '@/store';
import { Message } from 'element-ui';


axios.defaults.timeout = 30000;

// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use( config =>{
  const token = store.getters.access_token;
  if(token){
    config.headers['Authorization'] ='Bearer ' +token;
  }

  // headers中配置serialize为true开启序列化
  if (config.method === 'post' && config.headers.serialize) {
    config.data = serialize(config.data)
    delete config.data.serialize
  }

  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }
  return config
}, error =>{
  return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {
  const status = Number(res.status) || 200
  const message = res.data.msg;
  if(status == 401){
    Message({
      message: message,
      type: 'error'
    });
    store.dispatch('FedLogOut').then(() => {
      router.push({ path: '/login' })
    })

  }

  if(status !== 200 || res.data.code ===1 ){
    Message({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }
  return res
}, error => {
  return Promise.reject(new Error(error))
})

export default axios