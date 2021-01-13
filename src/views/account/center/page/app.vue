<template>
  <div class="app-list">
    <a-list :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}" 
      :dataSource="data" :loading="loading"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :hoverable="true">
          <a-card-meta>
            <div style="margin-bottom: 3px" slot="title">{{ item.title }}</div>
            <a-avatar class="card-avatar"  slot="avatar" :src="item.avatar" size="small" />
            <div class="meta-cardInfo" slot="description">
              <div>
                <p>活跃用户</p>
                <p>
                  <span>{{item.activeUser}}<span>万</span></span>
                </p>
              </div>
              <div>
                <p>新增用户</p>
                <p>{{ item.newUser}}</p>
              </div>
            </div>
          </a-card-meta>
          <template class="ant-card-actions" slot="actions">
            <a>
              <a-icon type="download"/>
            </a>
            <a>
              <a-icon type="edit"/>
            </a>
            <a>
              <a-icon type="share-alt"/>
            </a>
          </template>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import {getAppListApi } from '@/api/account/center.js'
export default {
  name: 'App',
  data() {
    return {
      data: [],
      loading: true,
    }
  },
  mounted() {
    this.getAppList();
  },
  methods: {
    getAppList(){
      getAppListApi().then(res =>{
        this.data = res.data.data;
        this.loading = false
        console.log("res==",res.data)
      })
    }
  }
}
</script>

<style scoped>
.app-list .meta-cardInfo {
  zoom: 1;
  margin-top: 16px;
}
.app-list .meta-cardInfo > div {
  position: relative;
  text-align: left;
  float: left;
  width: 50%;
}
.app-list .meta-cardInfo > div p {
  line-height: 32px;
  font-size: 24px;
  margin: 0;
}
.app-list .meta-cardInfo > div p:first-child {
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 4px;
}
</style>