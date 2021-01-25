<template>
  <div class="avue-top">
    <div class="top-bar__left">
      <!-- <div class="avue-breadcrumb">
        <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" 
          @click.stop.prevent="setCollapse()" />
      </div> -->
    </div>
    <div class="top-bar__right">
      <el-tooltip effect="dark" content="锁屏" placement="bottom">
        <div class="top-bar__item">
          <top-lock/>
        </div>
      </el-tooltip>
      <el-tooltip effect="dark" content="特色主题" placement="bottom">
        <div class="top-bar__item top-bar__item--show">
          <top-theme/>
        </div>
      </el-tooltip>
      <el-tooltip :content="isFullScren?'退出全屏':'全屏'"
        effect="dark" placement="bottom"
      >
        <div class="top-bar__item">
          <i :class="isFullScren?'iconfont icon-fullscreen-shrink':'iconfont icon-fullscreen-expand'"
            @click="handleScreen"/>
        </div>
      </el-tooltip>
      <el-tooltip
        v-if="userInfo.avatar"
        effect="dark"
        content="用户头像"
        placement="bottom">
        <a-avatar size="small" :src="userInfo.avatar" style="margin-right:8px"/>
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userInfo.username }}
          <i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <router-link to="/account/center/index">个人信息</router-link>
          </el-dropdown-item>
          
          <el-dropdown-item
            divided
            @click.native="logout">退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { fullscreenToggel, listenfullscreen } from '@/util/util'
import { option, list } from '@/const/setting'
import { clearStore, removeStore } from '@/util/store.js'
import topLock from './top-lock'
import topTheme from './top-theme'
export default {
  name: 'Top',
  components:{
    topLock,
    topTheme,
  },
  filters: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'isFullScren',
      'tagWel',
      'tagList',
      'isCollapse',
      'tag',
      'logsLen',
      'logsFlag',
    ])
  },
  created() {
    
  },
  mounted() {
    listenfullscreen(this.setScreen);
  },
  methods: {
    handleScreen() {
      fullscreenToggel()
    },
    setCollapse() {
      console.log("this.isCollapse==",this.isCollapse)
      this.$store.commit('SET_COLLAPSE')
    },
    setScreen() {
      this.$store.commit('SET_FULLSCREN')
    },
    logout() {
      this.$confirm('是否退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/login' })
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
      
    },
    
  }
}
</script>