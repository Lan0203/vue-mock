<template>
  <el-row>
    <el-col :span="6" style="margin-left:20px">
      <div style="margin-top:50px">
        <el-timeline >
          <el-timeline-item
          v-for="(activity, index) in data"
          :key="index"
          type="primary"
          >
            <template v-if="activity.isOne == true">
              <p  @click="clickTime(activity,index)" style="font-size:22px;color:red">{{activity.title}}</p>
            </template>
            <template v-else-if="activity.time">
              <p  @click="clickTime1(activity,index)" style="font-size:20px;color:blue">{{activity.title}}</p>
            </template>
            <template v-else>
              <p  @click="clickTime(activity,index)" style="font-size:18px;">{{activity.title}}</p>
            </template>
          </el-timeline-item> 
        </el-timeline>
      </div>
    </el-col>
    <el-col :span="6" style="margin-left:20px">
      <div style="margin-top:50px">
        <el-tree :data="list" :props="defaultProps" :icon-class="icon">
          <!-- <span slot-scope="{node,data}" class="customize-tree-p">
            <el-tooltip class="item" effect="dark" :content="data.title" placement="top-start" open-delay="500">
              <span style="font-size:22px">{{data.title}}</span>
            </el-tooltip>
          </span> -->
        </el-tree>
      </div>
    </el-col>
    <el-col :span="6" style="margin-left:20px">
      <div style="margin-top:50px">
        <!-- <a-tree :show-line="true" :treeData="list" show-icon>
          <a-icon slot="switcherIcon" type="down" />
        </a-tree> -->
        <a-directory-tree showLine @select="onSelected" :treeData="list" @expand="onExpend">
          <!-- <a-icon slot="switcherIcon" type="down" /> -->
          <!-- <a-tree-node v-for="(item,key,index) in list" :key="key+''">
            <span slot="title" style="font-family:nsimsu;font-size:22px;">
              <i class="iconfont icon-circle"></i>
            {{item.title}}</span>
            <a-tree-node v-for="(item2,key2,index2) in item.children" :key="key+'-'+key2" :value="item2.title" icon="iconfont icon-circle">
              <span slot="title" style="font-family:nsimsu;font-size:16px;">{{item2.title}}</span>
              <a-tree-node v-for="(item3,key3,index3) in item2.children" :key="key+'-'+key2 + '-'+key3" :value="item2.title" icon="iconfont icon-circle">
                <span slot="title">
                    <i class="iconfont icon-circle"></i>
                    {{item3.title}}
                </span>
              </a-tree-node>
            </a-tree-node>
          </a-tree-node> -->
        </a-directory-tree>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getTimeLineListApi,getSecondListApi,getThreeListApi} from '@/api/timeline/index'
export default {
  name:'timeLine',
  data() {
    return {
      icon:'iconfont icon-circle',
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      data:[],
      list:[
        {
          "children": [
            {
              "children": [
                {
                  "types": "检验",
                  "startingtime": "2020-11-19",
                  "title": "葡萄糖测定(免费) （院内）",
                  "itemcode": "164",
                  "idno": "38e603d2ddbf13377b5a56f500995fc1",
                  "isouthosp": "0"
                },
                {
                  "types": "检查",
                  "startingtime": "2020-11-19",
                  "title": "常规心电图检查 （院内）",
                  "itemcode": "176",
                  "idno": "6839ff1f84ca047cea8e85f2dbea54ab",
                  "isouthosp": "0"
                }
              ],
              "time": "2020-11-19",
              "title": "2020-11-19"
            },
            {
              "children": [

                {
                  "types": "检验",
                  "startingtime": "2020-11-03",
                  "title": "痰涂片(免费) （院内）",
                  "itemcode": "172",
                  "idno": "14b0468b651471a6ec63ca9aec876ec8",
                  "isouthosp": "0"
                },
                {
                  "types": "检验",
                  "startingtime": "2020-11-03",
                  "title": "血细胞分析或血常规 （院内）",
                  "itemcode": "216",
                  "idno": "2f240d8afc12636cdba53f2325705afd",
                  "isouthosp": "0"
                },
                {
                  "types": "检验",
                  "startingtime": "2020-11-03",
                  "title": "痰培养(免费) （院内）",
                  "itemcode": "208",
                  "idno": "701c8263421a49c12c5219b8a0688541",
                  "isouthosp": "0"
                },
                {
                  "types": "检查",
                  "startingtime": "2020-11-03",
                  "title": "常规心电图检查 （院内）",
                  "itemcode": "176",
                  "idno": "913e57a190ddff03d11c3df2d10c8f1f",
                  "isouthosp": "0"
                },
              ],
              "time": "2020-11-03",
              "title": "2020-11-03"
            }
          ],
          "manid": "2409",
          "isverify": "1",
          "title": "第01次就诊"
        },
        {
          "children": [
            {
              "children": [
                {
                  "types": "检验",
                  "startingtime": "2020-11-19",
                  "title": "葡萄糖测定(免费) （院内）",
                  "itemcode": "164",
                  "idno": "38e603d2ddbf13377b5a56f500995fc1",
                  "isouthosp": "0"
                },
                {
                  "types": "检查",
                  "startingtime": "2020-11-19",
                  "title": "常规心电图检查 （院内）",
                  "itemcode": "176",
                  "idno": "6839ff1f84ca047cea8e85f2dbea54ab",
                  "isouthosp": "0"
                }
              ],
              "time": "2021-1-19",
              "title": "2021-1-19"
            },
            {
              "children": [
                {
                  "types": "检验",
                  "startingtime": "2020-11-03",
                  "title": "肝功六项 （院外）",
                  "itemcode": "158",
                  "idno": "8178ea87871299ed175addf7892a38c5",
                  "isouthosp": "1"
                },
                {
                  "types": "检查",
                  "startingtime": "2020-11-03",
                  "title": "胸片(免费) （院内）",
                  "itemcode": "156",
                  "idno": "ff9da498d4cd7b36fb980f94ba639022",
                  "isouthosp": "0"
                }
              ],
              "time": "2021-1-03",
              "title": "2021-1-03"
            }
          ],
          "manid": "2410",
          "isverify": "1",
          "title": "第02次就诊"
        },
        {
          "manid": "2411",
          "isverify": "1",
          "title": "第03次就诊"
        }
      ],
      expandedKeys:["/"],
      selectedKeys:[],
    }
  },
  created(){
    this.getList();
  },
  mounted(){

  },
  methods:{
    onSelected(selectKeys,obj){
      console.log("selectKeys==",selectKeys)
      console.log("obj==",obj)
    },
    onExpend(expandedKey,obj){
      
    },
    getList(){
      getTimeLineListApi().then(res=>{
        this.data = res.data.data
      })
    },
    clickTime(item,index){
      if(item.manid){
        let param={manid:item.manid,index:index}
        getSecondListApi(param).then(res =>{
          let data = res.data.data;
          for(let i=0;i<data.length;i++){
            // if(item.title == data[i].title && item.isverify){
            //   let title={title:'门诊病案',time:new Date(),manid:item.manid}
            //   data.splice(i+1,0,title)
            // }
          }
          this.data = data
        })
      }
    },
    clickTime1(item,index){
      console.log("第二层item===",item)
      let param={manid:item.manid,index:index,title:item.title}
      if(item.title !== '门诊病案'){
        getThreeListApi(param).then(res=>{
          let data=res.data.data;
          for(let i=0;i<data.length;i++){
              // if(item.title == data[i].title && item.isverify){
              //   let title={title:'门诊病案',time:new Date(),manid:item.manid}
              //   data.splice(i+1,0,title)
              // }
            }
            this.data = data
        })
      }
    }
  }
}
</script>

<style>
.anticon{
  display: none;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper > span, .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper > span {
  font-size: 18px;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper.ant-tree-node-selected, .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper.ant-tree-node-selected{
  font-size: 18px;
}
.ant-tree.ant-tree-show-line li span.ant-tree-switcher{
  background: #1890ff;
  border-radius: 20px;
  width: 20px;
  height: 20px;
  margin-left:2.5px
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before, .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before{
  background: #e6f7ff;
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper.ant-tree-node-selected, .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper.ant-tree-node-selected{
  color:rgba(0,0,0.5)
}
</style>