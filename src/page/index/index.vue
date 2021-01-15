<template>
  <div :class="{'avue--collapse':isCollapse}" class="avue-contaul">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top />
    </div>
    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar/>
      </div>
      <div class="avue-main">
        <!-- 顶部标签卡 -->
        <!-- <tags/> -->
        <!-- 主体视图层 -->
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view
              v-if="$route.meta.$keepAlive"
              class="avue-view"/>
          </keep-alive>
          <router-view
            v-if="!$route.meta.$keepAlive"
            class="avue-view"/>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import admin from '@/util/admin'
import tags from './tags'
import top from './top';
import sidebar from './sidebar';
export default {
  name: 'Index',
  components:{
    top,
    sidebar,
    tags
  },
  provide() {
    return {
      Index: this
    };
  },
  computed: mapGetters(['userInfo', 'isLock', 'isCollapse','access_token','website']),
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.commit('SET_SCREEN', admin.getScreen())
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit('SET_SCREEN', admin.getScreen())
        }, 0)
      }
    },
    openMenu() {
      this.$store.dispatch("GetMenu",this.userInfo.username).then(data => {
        const menu=data.menu
        if (menu.length !== 0) {
          this.$router.$avueRouter.formatRoutes(menu, true);
        }
      });
    },
  }
}
</script>

<style scoped>

</style>