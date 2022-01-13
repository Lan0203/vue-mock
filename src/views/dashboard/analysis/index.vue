<template>
  <div class="analysis">
    <div>
      <el-row :gutter="22">
        <el-col :span="6">
          <el-card>
            <div class="chart-card-header">
              <div class="meta">
                <span class="chart-card-title">总销售额</span>
                <el-button style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-huaban21"></i></el-button>
              </div>
              <div class="total">
                <span>￥126,560</span>
              </div>
            </div>
            <div class="chard-card-content">
              <div class="content-fix">
                <div>
                  <div class="trend" style="margin-right: 16px">
                    <span>
                      <span>周同比</span><span>12%</span>
                    </span>
                    <span class="up"><i class="iconfont icon-up"></i></span>
                  </div>
                  <div class="trend">
                    <span>
                      <span>日同比</span><span>11%</span>
                    </span>
                    <span class="down"><i class="iconfont icon-down"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="chart-card-footer">
              <div class="field">
                <span>日均销售额</span><span>￥234.56</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="chart-card-header">
              <div class="meta">
                <span class="chart-card-title">访问量</span>
                <el-button style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-huaban21"></i></el-button>
              </div>
              <div class="total">
                <span>8,846</span>
              </div>
            </div>
            <div class="chard-card-content">
              <div class="content-fix">
                
              </div>
            </div>
            <div class="chart-card-footer">
              <div class="field">
                日访问量<span>1,234</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="chart-card-header">
              <div class="meta">
                <span class="chart-card-title">支付笔数</span>
                <el-button style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-huaban21"></i></el-button>
              </div>
              <div class="total">
                <span>6,560</span>
              </div>
            </div>
            <div class="chard-card-content">
              <div class="content-fix">
                <div id='analysisFwl'></div>
              </div>
            </div>
            <div class="chart-card-footer">
              <div class="field">
                转化率<span>60%</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div class="chart-card-header">
              <div class="meta">
                <span class="chart-card-title">运营活动效果</span>
                <el-button style="float: right; padding: 3px 0" type="text"><i class="iconfont icon-huaban21"></i></el-button>
              </div>
              <div class="total">
                <span>78%</span>
              </div>
            </div>
            <div class="chard-card-content">
              <div class="content-fix">
                <div>
                  <!-- <div class="trend" style="margin-right: 16px">
                    <span>
                      <span>周同比</span><span>12%</span>
                    </span>
                    <span class="up"><i class="iconfont icon-up"></i></span>
                  </div>
                  <div class="trend">
                    <span>
                      <span>日同比</span><span>11%</span>
                    </span>
                    <span class="down"><i class="iconfont icon-down"></i></span>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="chart-card-footer">
              <div class="field">
                同周比<span>12%</span>
              </div>
              
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-card>
        <div slot="header" class="clearfix">
          <span>销售额</span>
        </div>
        <el-row :gutter="24">
          <el-col :span="14">
            <div id="xs" style="height:330px"></div>
          </el-col>
          <el-col :span="8" :offset="2">
            <div id="xsplb" style="height:330px"></div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div style="margin-top:10px">
      <el-row :gutter="22">
        <el-col :span="12">
          <el-card>
            <div slot="header" class="clearfix">
              <span>线上热门搜索</span>
            </div>
            <el-table :data="list" style="width: 100%">
              <el-table-column prop="id" label="排名"></el-table-column>
              <el-table-column prop="name" label="搜索关键字"></el-table-column>
              <el-table-column prop="userNum" label="用户数"></el-table-column>
               <el-table-column prop="upNum" label="周涨幅">
                 <template slot-scope="scope">
                   <span v-if="scope.row.type ==1">
                     {{scope.row.upNum}}% <span style="color:#f5222d"><i class="iconfont icon-up"></i></span>
                   </span>
                   <span v-else>
                     {{scope.row.upNum}}% <span style="color:#52c41a"><i class="iconfont icon-down"></i></span>
                   </span>
                 </template>
               </el-table-column>
            </el-table>
            <div style="float:right;padding-top:10px;padding-bottom:20px">
              <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" 
                :page-sizes="[5,10,20,30,40,50,100,200]" :page-size="5" layout="total, sizes, prev, pager, next, jumper":total="total"
              >
              </el-pagination>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div slot="header" class="clearfix">
              <span>销售额类别占比</span>
            </div>
            <div id="lb" style="height:285px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getSearchListApi} from '@/api/dashboard/analysis.js';
export default {
  name: 'Analysis',
  data() {
    return {
      list:[],
      //分页
      currentPage:1,//table表的当前页数
      total: 0,//总条数
      currentChange: 1,//当前页数
      sizeChange: 5,//每页条数
      copyList:[],//复制数据
    }
  },
  mounted() {
    this.getFwlChart();
    this.getSxChart();
    this.getSxPhbChart();
    //this.getSxQsChart();
    this.getSxLbChart();
    this.getSearchList();
  },
  methods: {
    //访问量
    getFwlChart(){
      let fwlChart=this.$echarts.init(document.getElementById('analysisFwl'));
      fwlChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [2, 5, 1, 4, 0, 3, 2],
          type: 'line',
          smooth: true
        }]
      })
    },
    //销售额
    getSxChart(){
      const data=[
        { month: '1月', value: 491 },
        { month: '2月', value: 1098 },
        { month: '3月', value: 1005 },
        { month: '4月', value: 918 },
        { month: '5月', value: 1133 },
        { month: '6月', value: 609 },
        { month: '7月', value: 704 },
        { month: '8月', value: 814 },
        { month: '9月', value: 243 },
        { month: '10月', value: 368 },
        { month: '11月', value: 1158 },
        { month: '12月', value: 526 },
      ];
      const columnPlot = new this.$g2plot.Column('xs', {
        data,
        xField: 'month',
        yField: 'value',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        yAxis: {
          title: {
            text:"测试",
            position: 'end'
          }
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          month: {
            alias: '类别',
          },
          value: {
            alias: '销售额',
          },
        },
        color :'#409EFF'
      });
      columnPlot.render();
      /*
      let sxChart=this.$echarts.init(document.getElementById('xs'));
      sxChart.setOption({
        title: {
          text: '销售额排行',
          textStyle: {
            fontSize: 14,
            color: '#909399'
          }
        },
        color: ['#409EFF'],
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show:false,
            },
            splitNumber: 3
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '60%',
            data: [491, 1098, 1005, 918, 1133, 609, 704, 814, 243, 368, 1158, 526]
          }
        ]
      })*/
    },
    //门店销售排行
    getSxPhbChart(){
      const data = [
        {name: '河北', value: 1236},
        {name: '北京', value: 1211},
        {name: '天津', value: 1034},
        {name: '河南', value: 977},
        {name: '山东', value: 866},
        {name: '内蒙', value: 795},
        {name: '宁夏', value: 654},
        {name: '陕西', value: 438},
        {name: '四川', value: 333},
        {name: '湖南', value: 292},
      ];
      const bar = new this.$g2plot.Bar('xsplb', {
        data,
        xField: 'value',
        yField: 'name',
        seriesField: 'name',
        legend: {
          position: 'top-left',
        },
        colorField: 'name',
        color: ({name}) => {
          if(name == '河北') {
            return '#5db1ff';
          }
          if(name == '北京') {
            return '#f2637b';
          }
          if(name == '天津') {
            return '#fbd437';
          }
          return 'rgb(78,203,115)'
        },
      });
      bar.render();
      /*
      let sxphbChart=this.$echarts.init(document.getElementById('xsplb'));
      sxphbChart.setOption({
        title: {
          text: '门店销售排行',
          textStyle: {
            fontSize: 14,
            color: '#909399'
          }
        },
        grid: {
          left: '8%',
          right: '8%',
          bottom: '4%',
          top: 35,
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          inverse: true,
          //城市名称
          data:  ["河北", "北京", "天津", "河南", "山东", "内蒙", "宁夏", "陕西", "四川", "湖南"],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            color: function (value, index) {
                if(index == 0) {
                  return '#5db1ff';
                }
                if(index == 1) {
                  return '#f2637b';
                }
                if(index == 2) {
                  return '#fbd437';
                }
                return 'rgb(78,203,115)'
            },
            fontSize: 15,
            fontWeight: 'bold'
          },
        },
        series: [
          {
            type: 'bar',
            stack: 'chart',
            z: 3,
            barWidth: '20',
            label: {
              normal: {
                position: 'right',
                show: true,
                color: '#975fe5',
              }
            },
            itemStyle: {
              normal: {
                color: '#975fe5'
              }
            },
            data: [1236, 1211, 1034, 977, 866, 795, 654, 438, 333, 292]
          },
        ]
      })*/
    },
 
    //销售类别
    getSxLbChart(){
      const data = [
        {value: 500, type: '家用电器'},
        {value: 875, type: '食用酒水'},
        {value: 912, type: '个护健康'},
        {value: 1549, type: '服饰箱包'},
        {value: 300, type: '母婴产品'},
        {value: 489, type: '其他'},
      ];
      const piePlot = new this.$g2plot.Pie('lb', {
        appendPadding: 10,
        data,
        color:['#975fe5','#5db1ff', '#36cbcb', '#4ecb73', '#fbd437', '#f2637b'],
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      });

      piePlot.render();
      /*
      let sxlbOption=this.$echarts.init(document.getElementById('lb'));
      sxlbOption.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          data: ['家用电器', '食用酒水', '个护健康', '服饰箱包', '母婴产品', '其他']
        },
        color:['#975fe5','#5db1ff', '#36cbcb', '#4ecb73', '#fbd437', '#f2637b'],
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
              {value: '500', name: '家用电器'},
              {value: '875', name: '食用酒水'},
              {value: '912', name: '个护健康'},
              {value: '1549', name: '服饰箱包'},
              {value: '300', name: '母婴产品'},
              {value: '489', name: '其他'},
            ]
          }
        ]
      })
      */
    },
    getSearchList(){
      getSearchListApi().then(res =>{
        this.list=res.data.data;
        this.copyList=this.list;
        this.total=this.copyList.length;
        this.setPage(this.currentChange)
      })
    },
    //市数据分页
    handleSizeChange(val){
      this.sizeChange = val;
      this.setPage(this.currentChange);
    },
     handleCurrentChange(thisPage){
      this.currentChange = thisPage;
      this.setPage(thisPage);
    },
    setPage(data){
      let tbData =this.copyList;
      this.list = tbData.slice((data-1) * this.sizeChange , data * this.sizeChange);
    }
  }
}
</script>

<style>
.analysis{
  padding:20px;
}
.chart-card-header .meta{
  padding-top:20px;
  color: rgba(0,0,0,.45);
  font-size: 14px;
  line-height: 22px;
}
.chart-card-header .total{
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  color: #000;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 30px;
  line-height: 38px;
  height: 38px;
}
.chard-card-content{
  margin-bottom: 12px;
  position: relative;
  height: 30px;
  width: 100%;
}
.chard-card-content .content-fix{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.chard-card-content .content-fix .trend{
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
}
.chard-card-content .content-fix .trend .item-text{
  /* display: inline-block; */
  margin-left: 8px;
  color: rgba(0,0,0,.85);
}
.trend .up{
  color: #f5222d
}
.trend .down{
  color: #52c41a;
  top: -1px
}
.chart-card-footer{
  border-top: 1px solid #e8e8e8;
  margin-top: 8px;
  padding-top: 9px;
}
.chart-card-footer .field{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  color: rgba(0,0,0,.8);
  font-size: 14px;
  
}
</style>