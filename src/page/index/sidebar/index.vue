<template>
  <div class="avue-sidebar">
    <logo />
    <el-scrollbar style="height:100%">
      <!-- <div v-if="validatenull(menu)" class="avue-sidebar--tip">没有发现菜单</div> -->
      <el-menu
        :default-active="nowTagValue"
        :show-timeout="200"
        :collapse="keyCollapse"
        unique-opened
        mode="vertical">
        <sidebar-item
          :menu="menu"
          :screen="screen"
          :props="website.menu.props"
          :collapse="keyCollapse"
          first/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '../logo';
import sidebarItem from './sidebarItem';
import { validatenull } from "@/util/validate";
export default {
  name: 'Sidebar',
  inject: ["Index"],
  components: { logo, sidebarItem },
  created() {
    this.Index.openMenu(this.userInfo.username);
  },
  computed: {
    ...mapGetters(['website','userInfo', 'menu', 'tag', 'keyCollapse', 'screen',]),
    nowTagValue: function() {
      return this.$router.$avueRouter.getValue(this.$route)
    }
  }

}
</script>