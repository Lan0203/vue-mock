<template>
  <div class="advances">
    <div class="advances-header">
      <div class="herder-heading">
        <span class="herder-heading-title">单号：234231029431</span>
      </div>
      <div class="header-content">
        <a-descriptions size="small">
          <a-descriptions-item label="创建人">曲丽丽</a-descriptions-item>
          <a-descriptions-item label="订购产品">XX 服务</a-descriptions-item>
          <a-descriptions-item label="创建时间">2017-07-07</a-descriptions-item>
          <a-descriptions-item label="关联单据">
            <a href="">12421</a>
          </a-descriptions-item>
          <a-descriptions-item label="生效日期">2017-07-07 ~ 2017-08-08</a-descriptions-item>
          <a-descriptions-item label="备注">请于两个工作日内确认</a-descriptions-item>
        </a-descriptions>
      </div>
      <!-- <div class="header-wrap-extraContent">
        <a-row class="status-list">
          <a-col :xs="12" :sm="12">
            <div class="text">状态</div>
            <div class="heading">待审批</div>
          </a-col>
          <a-col :xs="12" :sm="12">
            <div class="text">订单金额</div>
            <div class="heading">¥ 568.08</div>
          </a-col>
        </a-row>
      </div> -->
    </div>
    <div class="grid-content">
      <div class="wrap-children-content">
        <a-card title="流程进度" :bordered="false">
          <a-steps :current="1"  progressDot>
            <a-step title="创建项目">
              <span style="font-size: 14px" slot="title">创建项目</span>
              <template slot="description">
                <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                  <div style="margin: 8px 0 4px">
                    曲丽丽
                    <a-icon style="margin-left: 8px" type="dingding-o" />
                  </div>
                  <div>2016-12-12 12:32</div>
                </div>
              </template>
            </a-step>
            <a-step title="部门初审">
              <span style="font-size: 14px" slot="title">部门初审</span>
              <template slot="description">
                <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;" slot="description" >
                  <div style="margin: 8px 0 4px">
                    周毛毛
                    <a-icon style="margin-left: 8px; color: #00A0E9" type="dingding-o" />
                  </div>
                  <div><a href="">催一下</a></div>
                </div>
              </template>
            </a-step>
            <a-step title="财务复核">
              <span style="font-size: 14px" slot="title">财务复核</span>
            </a-step>
            <a-step title="完成" >
              <span style="font-size: 14px" slot="title">完成</span>
            </a-step>
          </a-steps>
        </a-card>
        <a-card title="用户信息" :bordered="false" style="margin-top: 24px">
          <a-descriptions>
            <a-descriptions-item label="用户姓名">付晓晓</a-descriptions-item>
            <a-descriptions-item label="会员卡号">32943898021309809423</a-descriptions-item>
            <a-descriptions-item label="身份证">3321944288191034921</a-descriptions-item>
            <a-descriptions-item label="联系方式">18112345678</a-descriptions-item>
            <a-descriptions-item label="联系地址">浙江省杭州市西湖区黄姑山路工专路交叉路口</a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="信息组">
            <a-descriptions-item label="某某数据">725</a-descriptions-item>
            <a-descriptions-item label="该数据更新时间">2018-08-08</a-descriptions-item>
            <a-descriptions-item ></a-descriptions-item>
            <a-descriptions-item label="某某数据">725</a-descriptions-item>
            <a-descriptions-item label="该数据更新时间">2018-08-08</a-descriptions-item>
            <a-descriptions-item ></a-descriptions-item>
          </a-descriptions>
          <a-card type="inner" title="多层信息组">
            <a-descriptions title="组名称" size="small">
              <a-descriptions-item label="负责人">林东东</a-descriptions-item>
              <a-descriptions-item label="角色码">1234567</a-descriptions-item>
              <a-descriptions-item label="所属部门">XX公司-YY部</a-descriptions-item>
              <a-descriptions-item label="过期时间">2018-08-08</a-descriptions-item>
              <a-descriptions-item label="描述">这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</a-descriptions-item>
            </a-descriptions>
            <a-divider style="margin: 16px 0" />
            <a-descriptions title="组名称" size="small" :col="1">
              <a-descriptions-item label="学名">	Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..</a-descriptions-item>
            </a-descriptions>
            <a-divider style="margin: 16px 0" />
            <a-descriptions title="组名称" size="small" :col="2">
              <a-descriptions-item label="负责人">付小小</a-descriptions-item>
              <a-descriptions-item label="角色码">1234567</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-card>
        <a-card style="margin-top: 24px" :bordered="false" title="用户近半年来电记录">
          <div class="no-data"><a-icon type="frown-o"/>暂无数据</div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advanced'
}
</script>

<style scoped>
.advances .advances-header{
  background: #fff;
  padding:10px
}
.advances .advances-header .herder-heading{
  margin-top: 8px;
  width: 100%;
  overflow: hidden;
}
.advances .herder-heading .herder-heading-title{
  display: block;
  float: left;
  margin-bottom: 0;
  padding-right: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
}
.advances .header-content{
  padding-top: 12px;
  overflow: hidden;
}
.advances .header-wrap-extraContent{
  min-width: 242px;
  margin-left: 88px;
  text-align: right;
}
.advances .grid-content{
  
  width: 100%;
  min-height: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;

}
.advances .grid-content .wrap-children-content{
  margin: 24px 24px 0;
}
.no-data {
  color: rgba(0, 0, 0, .25);
  text-align: center;
  line-height: 64px;
  font-size: 16px;
}
.no-data i {
  font-size: 24px;
  margin-right: 16px;
  position: relative;
  top: 3px;
}
</style>