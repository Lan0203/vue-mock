// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import './permission'; // 权限
import router from './router';
import store from '@/store';
import '@/mock';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import './styles/common.css'
import basicContainer from './components/basic-container/main'
// //引入echart
import echarts from 'echarts';
import 'echarts-wordcloud/dist/echarts-wordcloud';
import 'echarts-wordcloud/dist/echarts-wordcloud.min';
Vue.prototype.$echarts = echarts;
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const g2plot = require('@antv/g2plot');
Vue.prototype.$g2plot =g2plot;
Vue.use(VueAxios, axios);

Vue.use(Antd);
Vue.use(ElementUI, {
  size: 'small',
  menuType: 'text'
});
Vue.use(Avue, {
  size: 'medium',
  menuType: 'text'
})
// 注册全局容器
Vue.component('basicContainer', basicContainer)

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')