<template>
  <div class="monitor">
    <div>
      <el-row :gutter="22">
        <el-col :span="18">
          <el-card>
            <div slot="header" class="clearfix">
              <span>活动交易情况</span>
            </div>
            <div id="pay"></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header" class="clearfix">
              <span>活动情况预测</span>
            </div>
            <div id="yc"></div>
          </el-card>
          <el-card style="margin-top:10px">
            <div slot="header" class="clearfix">
              <span>券核效率</span>
            </div>
            <div id="qh" style="height:200px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row :gutter="22">
        <el-col :span="12">
          <el-card>
            <div slot="header" class="clearfix">
              各品类占比
            </div>
            <el-row :gutter="24">
              <el-col :span="8"><div id="pie1"></div></el-col>
              <el-col :span="8"><div id="pie2"></div></el-col>
              <el-col :span="8"><div id="pie3"></div></el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header" class="clearfix">
              热门搜索
            </div>
            <div id="hot-search"></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header" class="clearfix">
              资源剩余
            </div>
            <div id="zysy"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getHotSearchtApi, getHDYCApi} from '@/api/dashboard/monitor';

export default {
  name: 'Monitor',
  data() {
    return {
      
    }
  },
  mounted() {
    this.getPay();
    this.getHotSearch();
    this.getQhXl();
    this.getZySy();
    this.getPlZb();
    this.getHdYc();
  },
  methods: {
    getPay(){
      const data = [
        { month: '2019', value: 23000000 },
        { month: '1月', value: 2200000 },
        { month: '2月', value: -4600000 },
        { month: '3月', value: -9100000 },
        { month: '4月', value: 3700000 },
        { month: '5月', value: -2100000 },
        { month: '6月', value: 5300000 },
        { month: '7月', value: 3100000 },
        { month: '8月', value: -1500000 },
        { month: '9月', value: 4200000 },
        { month: '10月', value: 5300000 },
        { month: '11月', value: -1500000 },
        { month: '12月', value: 5100000 },
      ];

      const waterfallPlot = new this.$g2plot.Waterfall('pay', {
        data,
        height: 410,
        padding: 'auto',
        appendPadding: [20, 0, 0, 0],
        xField: 'month',
        yField: 'value',
        meta: {
          month: {
            alias: '月份',
          },
          value: {
            alias: '销售量',
            formatter: (v) => `${v / 10000000} 亿`,
          },
        },
        /** 展示总计 */
        total: {
          label: '2020',
        },
        color: ({ month, value }) => {
          if (month === '2019' || month === '2020') {
            return '#96a6a6';
          }
          return value > 0 ? '#f4664a' : '#30bf78';
        },
        legend: {
          custom: true,
          items: [
            {
              name: '收入',
              value: 'increase',
              marker: { symbol: 'square', style: { r: 5, fill: '#f4664a' } },
            },
            {
              name: '支出',
              value: 'decrease',
              marker: { symbol: 'square', style: { r: 5, fill: '#30bf78' } },
            },
            {
              name: '总计',
              value: 'total',
              marker: { symbol: 'square', style: { r: 5, fill: '#96a6a6' } },
            },
          ],
        },
        label: {
          style: {
            fontSize: 10,
          },
          layout: [{ type: 'interval-adjust-position' }],
          background: {
            style: {
              fill: '#f6f6f6',
              stroke: '#e6e6e6',
              strokeOpacity: 0.65,
              radius: 2,
            },
            padding: 1.5,
          },
        },
        waterfallStyle: () => {
          return {
            fillOpacity: 0.85,
          };
        },
      });
      waterfallPlot.render();
    },
    getHdYc(){
      getHDYCApi().then(res => {
        let data = res.data.data;
        const tinyArea = new this.$g2plot.TinyArea('yc', {
          height: 100,
          autoFit: true,
          data,
          smooth: true,
          areaStyle: {
            fill: '#d6e3fd',
          },
        });
        tinyArea.render();
      })
    },
    //热门搜索
    getHotSearch(){
      getHotSearchtApi().then(res =>{
        let data=res.data.data;
        const wordCloud =new this.$g2plot.WordCloud('hot-search',{
          height:160,
          data,
          wordField: 'name',
          weightField: 'value',
          colorField: 'name',
          wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [12, 28],
          },
          //color:['#d62728', '#2ca02c', '#000000'],
          color:({}) =>{
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        });
        wordCloud.render();
      })
    },
    //券核效率
    getQhXl(){
      let qhChart=this.$echarts.init(document.getElementById('qh'));
      qhChart.setOption({
        series: [
          {
            name: '',
            type: 'gauge',
            detail: {
              show: true,
              formatter: "{value}%",
              color:'rgba(0,0,0,.7)',
              offsetCenter: ["0", "67%"]
            },
            data: [{value: 87, name: ''}],
            splitNumber: 5,
            axisTick: {
              show: false,
              splitNumber: 1
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [[0.2, '#5db1ff'], [0.87, '#5db1ff'], [1, '#fff']],
                width: 15,
              }
            },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: "#5db1ff"
              }
                
            },
            axisLabel: {
              show: true,
              formatter: function(value){
                if(value == 20){
                  return '差'
                }
                else if(value == 40){
                  return '中'
                }
                else if(value == 60){
                  return '良'
                }
                else if(value == 80){
                  return '优'
                }
              }
            },
            itemStyle: {
              color:'#5db1ff'
            }
          }
        ]
      })
    },
    //资源剩余图表
    getZySy(){
      const liquidPlot = new this.$g2plot.Liquid('zysy', {
        height:160,
        percent: 0.34,
        outline: {
          border: 4,
          distance: 8,
        },
        wave: {
          length: 128,
        },
        liquidStyle:{
          fill: '#5db1ff',
          stroke: '#5db1ff'
        },
      });
      liquidPlot.render();

    },
    getPlZb(){
      const ringProgress1 = new this.$g2plot.RingProgress('pie1', {
        width:150,
        height:150,
        autoFit: false,
        percent: 0.28,
        color: ['#58afff', '#E8EDF3'],
      });
      ringProgress1.render();
      const ringProgress2 = new this.$g2plot.RingProgress('pie2', {
        width:150,
        height:150,
        autoFit: false,
        percent: 0.22,
        color: ['#5ddecf', '#E8EDF3'],
      });
      ringProgress2.render();
      const ringProgress3 = new this.$g2plot.RingProgress('pie3', {
        width:150,
        height:150,
        autoFit: false,
        percent: 0.32,
        color: ['#2fc25b', '#E8EDF3'],
      });
      ringProgress3.render();
    }
  }
}
</script>

<style>
.monitor{
  padding:20px;
}
</style>