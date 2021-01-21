<template>
  <div class="wel">
    <a-row>
      <a-col :span="24">
        <a-card :bordered="false" class="page-header-welcome">
          <h1>
            {{ timeFix }}，{{ userInfo.username }}，<span>祝你开心每一天！</span>
          </h1>
          <p class="desc">前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</p>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16" style="margin-left: -12px; margin-right: -12px;margin-top: 24px">
      <a-col :xl="17" :lg="17" :md="24" :sm="24" :xs="24" style="padding-left: 12px; padding-right: 12px">
        <a-card :bordered="false" style="margin-bottom: 24px;">
          <a-row>
            <a-col :md="6" :sm="24" :xs="24">
              <div class="basic-list-header-info" style="border-right:1px solid #eee">
                <span>我的待办</span>
                <p>8个任务</p>
                <em></em>
              </div>
            </a-col>
            <a-col :md="6" :sm="24" :xs="24">
              <div class="basic-list-header-info" style="border-right:1px solid #eee">
                <span>本周任务平均处理时间</span>
                <p>32分钟</p>
                <em></em>
              </div>
            </a-col>
            <a-col :md="6" :sm="24" :xs="24" style="border-right:1px solid #eee">
              <div class="basic-list-header-info">
                <span>本周完成任务数</span>
                <p>24个任务</p>
                <em></em>
              </div>
            </a-col>
            <a-col :md="6" :sm="24" :xs="24">
              <div class="basic-list-header-info">
                <span>异常（个）</span>
                <p>1</p>
                <em></em>
              </div>
            </a-col>
          </a-row>
        </a-card>
        <a-card :bordered="false" title="动态">
          <a-list>
            <a-list-item :key="index" v-for="(item, index) in activity">
              <a-list-item-meta>
                <a-avatar slot="avatar" :src="item.user.avatar"/>
                <div slot="title">
                  <span>{{ item.user.nickname }}</span>&nbsp;
                  在&nbsp;<a href="#">{{ item.project.name }}</a>&nbsp;
                  <span>{{ item.project.action }}</span>&nbsp;
                  <a href="#">{{ item.project.event }}</a>
                </div>
                <div slot="description">{{ item.time }}</div>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xl="7" :lg="7" :md="24" :sm="24" :xs="24">
        <div class="cover-tips" style="margin-bottom:24px">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" />
        </div>
        <a-card :bordered="false" style="margin-bottom:24px"  :tab-list="tabListNoTitle"
          :active-tab-key="noTitleKey" @tabChange="key => onTabChange(key, 'noTitleKey')"
        >
          <div class="members" v-if="noTitleKey === '我的'||noTitleKey === '收藏'">
            <a-row>
              <a-col :span="8" v-for="(item,index) in teams" :key="index">
                <a>
                  <a-avatar class="member-cover" :src="item.avatar" size="large" />
                  <span class="member">{{item.name}}</span>
                </a>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { timeFix } from '@/util/util'
import { mapGetters } from 'vuex';
import { getActivityApi, getTeamsApi,} from '@/api/dashboard/workplace.js'
export default {
  name:'Wel',
  data() {
    return {
      timeFix: timeFix(),
      activity: [],
      tabListNoTitle: [
        {
          key: '我的',
          tab: '我的',
        },
        {
          key: '收藏',
          tab: '收藏',
        }
      ],
      noTitleKey: '我的',
      teams: [],
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted() {
    this.getActivity();
    this.getTeams();
  },
  methods: {
    getActivity(){
      getActivityApi().then(res =>{
        this.activity = res.data.data
      })
    },
    getTeams(){
      getTeamsApi().then(res => {
        this.teams = res.data.data
      })
    },
    onTabChange(key, type) {
      this[type] = key;
    },
  }
}
</script>

<style scoped>
.wel{
  margin:20px
}
.wel .page-header-welcome{
 background: #27a6fe;
}
.wel .page-header-welcome h1{
  font-size: 24px;
  color: #fff
}
.wel .page-header-welcome .desc{
  color: #fff
}
.wel .basic-list-header-info{
  position: relative;
  text-align: center;
}
.wel .basic-list-header-info >span{
  display: inline-block;
  margin-bottom: 4px;
  color: rgba(0,0,0,.45);
  font-size: 14px;
  line-height: 22px;
}
.wel .basic-list-header-info >p{
  margin: 0;
  color: rgba(0,0,0,.85);
  font-size: 24px;
  line-height: 32px;
}
.wel .cover-tips{
  width: 100%
} 
.wel .cover-tips >img{
  display: block;
  width: 100%;
}

.wel .members a .member{
  font-size: 14px;
  color: rgba(0,0,0,.65);
  line-height: 24px;
  vertical-align: top; 
  transition: all .3s;
  /* display: block; */
}
</style>