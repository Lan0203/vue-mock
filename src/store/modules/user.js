import {getStore, setStore} from '@/util/store';
import {isURL, validatenull} from '@/util/validate';
import {getUserInfoApi, loginByUserApi, logoutApi } from '../../api/login';
import {deepClone, encryption} from '@/util/util';
import website from '@/const/website';
import {resetRouter} from '@/router/index';
import {getMenuApi} from '../../api/admin/menu';

function addPath(ele, first){
  const menu = website.menu
  const propsConfig = menu.props
  const propsDefault = {
    label: propsConfig.label || 'name',
    path: propsConfig.path || 'path',
    icon: propsConfig.icon || 'icon',
    children: propsConfig.children || 'children'
  }
  const icon = ele[propsDefault.icon]
  ele[propsDefault.icon] = validatenull(icon) ? menu.iconDefault : icon
  const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0
  if (!isChild) ele[propsDefault.children] = []
  if (!isChild && first && !isURL(ele[propsDefault.path])) {
    ele[propsDefault.path] = ele[propsDefault.path] + '/index'
  } else {
    ele[propsDefault.children].forEach(child => {
      addPath(child)
    })
  }
}
const user ={
  state: {
    userInfo: {},
    permissions: {},
    roles: [],
    menu: getStore({
      name: 'menu'
    }) || [],
    access_token: getStore({
      name: 'access_token'
    }) || '',

  },

  actions: {
    //根据用户名登录
    LoginByUsername({commit}, userInfo){
      return new Promise((resolve, reject) =>{
        loginByUserApi(userInfo.username, userInfo.password).then(response =>{
          console.log("获取token接口==",response)
          const data=response.data.data;
          commit('SET_ACCESS_TOKEN', data.access_token);
          commit('CLEAR_LOCK');
          resolve()
        }).catch(error => {
          reject(error);
        })
      })
    },
    //获取用户信息
    GetUserInfo({commit}, username){
      return new Promise((resolve, reject) => {
        getUserInfoApi(username).then((res) => {
          console.log("获取个人信息==",res)
          const data = res.data.data || {}
          commit('SET_USER_INFO', data.sysUser)
          commit('SET_ROLES', data.sysUser.roles || [])
          commit('SET_PERMISSIONS', data.permissions || [])
          resolve(data)
        }).catch(() => {
          reject()
        })
      })
    },
    //登出
    LogOut({commit}) {
      return new Promise((resolve, reject) => {
        logoutApi().then(() => {
          resetRouter();
          commit('SET_MENU', [])
          commit('SET_PERMISSIONS', [])
          commit('SET_USER_INFO', {})
          commit('SET_ACCESS_TOKEN', '')
          commit('SET_ROLES', [])
          commit('DEL_ALL_TAG')
          commit('CLEAR_LOCK')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注销session
    FedLogOut({commit}) {
      return new Promise(resolve => {
        resetRouter();
        commit('SET_MENU', [])
        commit('SET_PERMISSIONS', [])
        commit('SET_USER_INFO', {})
        commit('SET_ACCESS_TOKEN', '')
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG')
        commit('CLEAR_LOCK')
        resolve()
      })
    },
    GetMenu({commit},username) {
      return new Promise((resolve, reject) => {
        getMenuApi(username).then((res) => {
          console.log("获取菜单==",res)
          const data = res.data.data
          const menu = deepClone(data.menu);
          menu.forEach(ele =>{
            addPath(ele)
          });
          commit('SET_MENU', data.menu)
          resolve(data)
        }).catch(() => {
          reject()
        })
      })
    },
    
    
  },
  mutations: {
    SET_ACCESS_TOKEN: (state, access_token) => {
      state.access_token = access_token
      setStore({
        name: 'access_token',
        content: state.access_token,
        type: 'session'
      })
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({
        name: 'menu',
        content: menu,
        type: 'session'
      })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      const list = {}
      for (let i = 0; i < permissions.length; i++) {
        list[permissions[i]] = true
      }
      state.permissions = list
    }
  }
}

export default user