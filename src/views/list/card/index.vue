<template>
  <div class="card-list">
    <div class="card-list-title">
      <h2>卡片列表</h2>
    </div>
    <div style="padding: 10px">
      <a-row :gutter="6" >
        <template v-for="item in list">
          <a-col :xl="8" :lg="12" :md="12" :sm="12" :xs="12">
            <div style="padding: 10px">
            <a-card :bordered="false">
              <a-card-meta :title="item.title" :description="item.content">
                <a-avatar
                  slot="avatar"
                  :src="item.avatar"
                />
              </a-card-meta>
              <template slot="actions" class="ant-card-actions">
                <span>操作一</span>
                <span>操作二</span>
              </template>
            </a-card>
            </div>
          </a-col>
        </template>
      </a-row>
    </div>
  </div>
</template>

<script>
import {getCardListApi} from '@/api/list/cardList.js'
export default {
  name: 'CardList',
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.getCardList();
  },
  methods: {
    getCardList(){
      getCardListApi().then(res =>{
        this.list=res.data.data
      })
    }
  }
}
</script>

<style scoped>
.card-list-title{
  background: #fff;
  padding:10px
}
.card-list .content{
  margin: 20px;
}
</style>