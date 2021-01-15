<template>
  <div class="menu">
    <div>
      <a-button-group>
        <a-button type="primary">添加</a-button>
        <a-button type="primary">编辑</a-button>
        <a-button type="primary">删除</a-button>
      </a-button-group>
    </div>
    <div>
      <a-row>
        <a-col :span="8">
          <a-tree :tree-data="treeData" :replace-fields="replaceFields" />
        </a-col>
        <a-col :span="16">
          <a-card :bordered="false">
            <a-form></a-form>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { getMenuApi } from '@/api/admin/menu.js'
export default {
  name: 'Menu',
  data() {
    return {
      treeData: [],
      replaceFields: {
        title: 'name',
      },
    }
  },
  computed: mapGetters(['userInfo',]),
  created() {
    this.getList()
  },
  methods: {
    getList(){
      getMenuApi(this.userInfo.username).then(res =>{
        this.treeData = res.data.data.menu
      })
    }
  }
}
</script>

<style>
.menu {
  height: 99.9%;
  padding:20px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  /* border-top: 1px solid #ccc */
}
</style>