<template>
  <div class="basic-list">
    <div class="basic-list-title">
      <h2>标准列表</h2>
    </div>
    <div class="content">
      <a-card>
        <a-row>
          <a-col :xl="8" :lg="12" :md="12" :sm="12" :xs="12">
            <div class="header-info" style="border-right:1px solid rgba(0,0,0,.15)">
              <span>我的代办</span>
              <p>8个任务</p>
            </div>
          </a-col>
          <a-col :xl="8" :lg="12" :md="12" :sm="12" :xs="12">
            <div class="header-info" style="border-right:1px solid rgba(0,0,0,.15)">
              <span>本周任务平均处理时间</span>
              <p>32分钟</p>
            </div>
          </a-col>
          <a-col :xl="8" :lg="12" :md="12" :sm="12" :xs="12">
            <div class="header-info">
              <span>本周完成任务数</span>
              <p>24个</p>
            </div>
          </a-col>
          <a-divider type="vertical"/>
          
        </a-row>
      </a-card>
    </div>
    <div class="content">
      <a-card title="标准列表" :bordered="false">
        <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
          <a-list-item :key="index" v-for="(item, index) in list">
            <a-list-item-meta :description="item.description">
              <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar"/>
              <a slot="title">{{ item.title }}</a>
            </a-list-item-meta>
            <div slot="actions">
              <a @click="edit(item)">编辑</a>
            </div>
            <div class="list-content">
              <div class="list-content-item">
                <span>Owner</span>
                <p>{{ item.owner }}</p>
              </div>
              <div class="list-content-item">
                <span>开始时间</span>
                <p>{{ item.startAt }}</p>
              </div>
              <div class="list-content-item">
                <a-progress :percent="item.progress.value" :status="!item.progress.status ? null : item.progress.status" style="width: 180px" />
              </div>
            </div>
          </a-list-item>
        </a-list>
      </a-card>
    </div>
  </div>
</template>

<script>
import {getBasicListApi} from '@/api/list/basicList.js'
export default {
  name: 'BasicList',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getBasicList();
  },
  methods: {
    getBasicList(){
      getBasicListApi().then(res =>{
        this.list=res.data.data;
      })
    },
    edit(){

    }
  }

}
</script>

<style scoped>
.basic-list-title{
  background: #fff;
  padding:10px
}
.content{
  margin: 20px;
}
.content .header-info{
  position: relative;
  text-align: center;
}
.content .header-info >span{
  display: inline-block;
  margin-bottom: 4px;
  color: rgba(0,0,0,.45);
  font-size: 14px;
  line-height: 22px;
}
.content .header-info >p{
  margin: 0;
  color: rgba(0,0,0,.85);
  font-size: 24px;
  line-height: 32px;
}
.list-content-item {
  color: rgba(0, 0, 0, 0.45);
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 40px;
}
.list-content-item span {
  line-height: 20px;
}
.list-content-item p {
  margin-top: 4px;
  margin-bottom: 0;
  line-height: 22px;
}
</style>