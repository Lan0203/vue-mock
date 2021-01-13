<template>
  <div class="ant-pro-pages-account-projects-cardList">
    <a-list :loading="loading" :data-source="data"
      :grid="{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card class="ant-pro-pages-account-projects-card" hoverable>
          <img slot="cover" :src="item.cover" :alt="item.title" />
          <a-card-meta :title="item.title">
            <template slot="description">
              <p>{{ item.description }}</p>
            </template>
          </a-card-meta>
          <div class="cardItemContent">
            <span>{{ item.updatedAt }}</span>
            <div class="avatarList">
              <avatar-list size="mini">
                <avatar-list-item
                  v-for="(member, i) in item.members"
                  :key="`${item.id}-avatar-${i}`"
                  :src="member.avatar"
                  :tips="member.name"
                />
              </avatar-list>
            </div>
          </div>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import {getArticleListApi} from '@/api/account/center.js'
export default {
  name: 'Project',
  data() {
    return {
      data: [],
      loading: true,
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getArticleListApi().then(res => {
        console.log('res', res)
        this.data = res.data.data
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.ant-pro-pages-account-projects-cardList {
  margin-top: 24px;
}
.ant-pro-pages-account-projects-cardList /deep/ .ant-card-meta-title {
  margin-bottom: 4px;
}

.ant-pro-pages-account-projects-cardList /deep/ .ant-card-meta-description {
  height: 44px;
  overflow: hidden;
  line-height: 22px;
}
.ant-pro-pages-account-projects-cardList .cardItemContent {
  display: flex;
  height: 20px;
  margin-top: 16px;
  margin-bottom: -4px;
  line-height: 20px;
}
.ant-pro-pages-account-projects-cardList .cardItemContent /deep/ .ant-pro-avatar-list {
  flex: 0 1 auto;
}
.ant-pro-pages-account-projects-cardList .cardItemContent > span {
  flex: 1 1;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
}
</style>