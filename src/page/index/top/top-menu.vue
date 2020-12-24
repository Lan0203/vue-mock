<template>
  <div class="top-menu">
    <!-- <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      text-color="#333">
      <template v-for="(item,index) in items">
        <el-menu-item
          :index="item.id+''"
          :key="index"
          @click.native="openMenu(item)">
          <template slot="title">
            <i :class="item.icon"/>
            <span>{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu> -->
    <a-menu mode="horizontal"  v-model="activeIndex"
      overflowedIndicator=""
    >
      <template v-for="(item) in items">
        <a-menu-item
          :key="item.id"
          @click.native="openMenu(item)"
        >
          <i :class="item.icon"/>
          <span style="margin-left:5px">{{item.label}}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopMenu',
  inject: ["Index"],
  data() {
    return {
      activeIndex: [],
      items: []
    }
  },
  created() {
    this.getTopMenu()
  },
  computed: {
    ...mapGetters(['tagCurrent', 'menu'])
  },
  methods: {
    getTopMenu() {
      this.$store.dispatch("GetTopMenu").then(res => {
          this.items = res;
          this.activeIndex=[res[0].id]
      });
    },
    openMenu(item) {
      this.Index.openMenu(item)
    }
  }
}
</script>
