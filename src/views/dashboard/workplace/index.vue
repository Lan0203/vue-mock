<template>
  <div class="workplace">
    <div class="workplace-top">
      <div class="page-header-content">
        <div class="avatar">
          <!-- <a-avatar size="large" :src="currentUser.avatar"/> -->
        </div>
        <div class="content">
          <div class="content-title">
            {{ timeFix }}，{{ userInfo.username }}
          </div>
          <div>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</div>
        </div>
      </div>
      <div class="extra-content">
        <div class="stat-item">
          <a-statistic title="项目数" :value="56" />
        </div>
        <div class="stat-item">
          <a-statistic title="团队内排名" :value="8" suffix="/ 24" />
        </div>
        <div class="stat-item">
          <a-statistic title="项目访问" :value="2223" />
        </div>
      </div>
    </div>
    <div style="padding:20px">
      <a-row :gutter="22">
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card class="project-list" title="进行中的项目" style="margin-bottom: 24px;" :bordered="false">
            <a slot="extra">全部项目</a>
            <div>
              <a-card-grid class="project-card-grid" :key="i" v-for="(item, i) in projects">
                <a-card :bordered="false" :body-style="{padding: 0}">
                  <a-card-meta>
                    <div slot="title" class="card-title">
                      <a-avatar size="small" :src="item.cover"/>
                      <a>{{ item.title }}</a>
                    </div>
                    <div slot="description" class="card-description">
                      {{ item.description }}
                    </div>
                  </a-card-meta>
                  <div class="project-item">
                    <a href="/#/">科学搬砖组</a>
                    <span class="datetime">9小时前</span>
                  </div>
                </a-card>
              </a-card-grid>
            </div>
          </a-card>
          <a-card title="动态">
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
        <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24" style="padding: 0 12px">
          <a-card title="快速开始 / 便捷导航" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <div class="item-group">
              <a>操作一</a>
              <a>操作二</a>
              <a>操作三</a>
              <a>操作四</a>
              <a>操作五</a>
              <a>操作六</a>
              <a-button size="small" type="primary" ghost icon="plus">添加</a-button>
            </div>
          </a-card>
          <a-card  title="XX 指数" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 0 }">
             <div id="radar"></div>
          </a-card>
          <a-card title="团队" :bordered="false">
            <div class="members">
              <a-row>
                <a-col :span="12" v-for="(item, index) in teams" :key="index">
                  <a>
                    <a-avatar size="small" :src="item.avatar"/>
                    <span class="member">{{ item.name }}</span>
                  </a>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
      </a-row>
      
    </div>
  </div>
</template>

<script>
import { timeFix } from '@/util/util'
import { mapGetters } from 'vuex';
import { getProjectsApi, getActivityApi, getTeamsApi, getRadarApi} from '@/api/dashboard/workplace.js'
import { DataSet } from '@antv/data-set'
export default {
  name: 'Workplace',
  data() {
    return {
      timeFix: timeFix(),
      projects: [],
      activity: [],
      teams: [],
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted() {
    this.getProjects();
    this.getActivity();
    this.getTeams();
    this.getRadar();
  },
  methods: {
    getProjects(){
      getProjectsApi().then(res =>{
        this.projects = res.data.data;
      })
    },
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
    getRadar(){
      getRadarApi().then(res => {
        let data = res.data.data;
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
          type: 'fold',
          fields: ['个人', '部门', '团队'],
          key: 'user', // key字段
          value: 'score', // value字段
        });
        const radarPlot = new this.$g2plot.Radar('radar',{
          height:450,
          data: dv.rows,
          xField: 'item',
          yField: 'score',
          seriesField: 'user',
          lineStyle:{
            lineWidth:3
          },
          meta: {
            score: {
              alias: '分数',
              min: 0,
              max: 80,
            },
          },
          xAxis: {
            line: null,
            tickLine: null,
            grid: {
              line: {
                style: {
                  lineDash: null,
                },
              },
            },
          },
          // 开启辅助点
          point: {
            size: 2,
          },
          colorField: 'type', // 部分图表使用 seriesField
          color:['#5db1ff', '#4ecb73', '#fbd437',],
        })
        radarPlot.render();
      })
    }
  }
}
</script>

<style>
.workplace-top{
  background: #fff;
  padding-top:10px
  
}
.page-header-content {
  display: inline-block;
}
.page-header-content .avatar {
  flex: 0 1 72px;
}
.page-header-content .avatar > span {
  display: block;
  width: 72px;
  height: 72px;
  border-radius: 72px;
}
.page-header-content .content {
  position: relative;
  top: 4px;
  flex: 1 1 auto;
  margin-left: 24px;
  color: rgba(0,0,0,.45);
  line-height: 22px;
  margin-bottom:20px
}
.page-header-content .content .content-title {
  margin-bottom: 12px;
  color: rgba(0,0,0,.85);
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.extra-content {
  float: right;
  white-space: nowrap;
  padding-right: 30px;
}
.extra-content .stat-item {
  position: relative;
  display: inline-block;
  padding: 0 32px;
}
.extra-content .stat-item > p:first-child {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 22px;
}
.extra-content .stat-item > p {
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 30px;
  line-height: 38px;
}
.extra-content .stat-item > p > span {
  color: rgba(0, 0, 0, 0.65);
  font-size: 20px;
}
.extra-content .stat-item::after {
  position: absolute;
  top: 8px;
  right: 0;
  width: 1px;
  height: 40px;
  background-color: "#fff";
  content: "";
}
.extra-content .stat-item:last-child {
  padding-right: 0;
}
.extra-content .stat-item:last-child::after {
  display: none;
}
.project-list .card-title {
  font-size: 0;
}
.project-list .card-title a {
  color: rgba(0, 0, 0, 0.85);
  margin-left: 12px;
  line-height: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
}
.project-list .card-title a:hover {
  color: #1890ff;
}
.project-list .card-description {
  color: rgba(0, 0, 0, 0.45);
  height: 44px;
  line-height: 22px;
  overflow: hidden;
}
.project-list .project-item {
  display: flex;
  margin-top: 8px;
  overflow: hidden;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
}
.project-list .project-item a {
  color: rgba(0, 0, 0, 0.45);
  display: inline-block;
  flex: 1 1 0;
}
.project-list .project-item a:hover {
  color: #1890ff;
}
.project-list .project-item .datetime {
  color: rgba(0, 0, 0, 0.25);
  flex: 0 0 auto;
  float: right;
}
.project-list .ant-card-meta-description {
  color: rgba(0, 0, 0, 0.45);
  height: 44px;
  line-height: 22px;
  overflow: hidden;
}
.item-group {
  padding: 20px 0 8px 24px;
  font-size: 0;
}
.item-group a {
  color: rgba(0, 0, 0, 0.65);
  display: inline-block;
  font-size: 14px;
  margin-bottom: 13px;
  width: 25%;
}
.members a {
  display: block;
  margin: 12px 0;
  line-height: 24px;
  height: 24px;
}
.members a .member {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 24px;
  max-width: 100px;
  vertical-align: top;
  margin-left: 12px;
  transition: all 0.3s;
  display: inline-block;
}
.members a:hover span {
  color: #1890ff;
}
</style>