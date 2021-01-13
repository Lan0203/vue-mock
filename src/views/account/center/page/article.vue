<template>
  <div>
    <a-list size="large" :data-source="data" item-layout="vertical" rowKey="id" :loading="loading">
      <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
        <template v-for="{ type, text } in item.actions" slot="actions">
          <span :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <a-list-item-meta>
          <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
          <template slot="description">
            <span>
              <a-tag>Ant Design</a-tag>
              <a-tag>设计语言</a-tag>
              <a-tag>蚂蚁金服</a-tag>
            </span>
          </template>
        </a-list-item-meta>
        <div class="antd-pro-components-article-list-content-index-listContent">
          <div class="description">
            <slot>
              {{ item.description }}
            </slot>
          </div>
          <div class="extra">
            <a-avatar :src="item.avatar" size="small" />
            <a :href="item.href">{{ item.owner }}</a> 发布在 <a :href="item.href">{{ item.href }}</a>
            <em>{{ item.updatedAt }}</em>
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import {getArticleListApi} from '@/api/account/center.js'
export default {
  name: 'Article',
  data() {
    return{
      data: [],
      loading: true,
    }
  },
  mounted() {
    this.getArticleList();
  },
  methods: {
    getArticleList(){
      getArticleListApi().then(res =>{
        this.data = res.data.data;
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.antd-pro-components-article-list-content-index-listContent .description {
  max-width: 720px;
  line-height: 22px;
}
.antd-pro-components-article-list-content-index-listContent .extra {
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 22px;
}
.antd-pro-components-article-list-content-index-listContent .extra /deep/ .ant-avatar {
  position: relative;
  top: 1px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  vertical-align: top;
}
.antd-pro-components-article-list-content-index-listContent .extra em {
  margin-left: 16px;
  color: rgba(0, 0, 0, 0.25);;
  font-style: normal;
}
</style>