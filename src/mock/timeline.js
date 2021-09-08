
const list1=[
  {  
   "manid": "2409",
    "isverify": "1",
    "title": "第01次就诊",
    "isOne":true
  },
  {   
    "manid": "2410",
    "isverify": "1",
    "title": "第02次就诊",
    "isOne":true
  },
];
const list2=[
  {   
    "manid": "2409",
    "isverify": "1",
    "title": "第01次就诊",
    "isOne":true,
    children:[
      { "time": "2020-11-19","title": "2020-11-19","manid": "2409","isverify": "1",},
      { "time": "2020-11-9","title": "2020-11-9","manid": "2409","isverify": "1",},
    ]
  },
  {   
    "manid": "2410",
    "isverify": "1",
    "title": "第02次就诊",
    "isOne":true,
    children:[
      { "time": "2021-1-19","title": "2021-1-19","manid": "2410","isverify": "1",},
      { "time": "2021-3-9","title": "2021-3-9","manid": "2410","isverify": "1",},
    ]
  },
]
const list3=[
  {
    "time": "2020-11-19",
    "title": "2020-11-19",
    "isverify": "1",
    "manid": "2409",
    "children": [
      {
        "types": "检验",
        "startingtime": "2020-11-19",
        "itemname": "葡萄糖测定(免费) （院内）",
        "itemcode": "164",
        "idno": "38e603d2ddbf13377b5a56f500995fc1",
        "isouthosp": "0"
      },
      {
        "types": "检查",
        "startingtime": "2020-11-19",
        "itemname": "常规心电图检查 （院内）",
        "itemcode": "176",
        "idno": "6839ff1f84ca047cea8e85f2dbea54ab",
        "isouthosp": "0"
      }
    ],
    
  },
  {
    "time": "2020-11-9",
    "title": "2020-11-9",
    "isverify": "1",
    "manid": "2409",
    "children": [
      {
        "types": "检验",
        "startingtime": "2020-11-9",
        "itemname": "肝功六项 （院外）",
        "itemcode": "158",
        "idno": "8178ea87871299ed175addf7892a38c5",
        "isouthosp": "1"
      },
    ],
      
  },
  { 
    "time": "2021-3-9",
    "title": "2021-3-9",
    "isverify": "1",
    "manid": "2410",
    children:[
      {
        "types": "检查",
        "startingtime": "2021-3-9",
        "itemname": "常规心电图检查 （院内）",
        "itemcode": "176",
        "idno": "913e57a190ddff03d11c3df2d10c8f1f",
        "isouthosp": "0"
      },
    ]
  },
  { 
    "time": "2021-1-19",
    "title": "2021-1-19",
    "isverify": "1",
    "manid": "2410",
    children:[
      {
        "types": "检验",
        "startingtime": "2021-1-19",
        "itemname": "血细胞分析或血常规 （院内）",
        "itemcode": "216",
        "idno": "2f240d8afc12636cdba53f2325705afd",
        "isouthosp": "0"
      },
    ]
  },
  
]

export default {
  getTimelineList: config => {
    return {
      code: 200,
      data:list1,
      msg:'获取成功'
    }
  },
  getSecondList: config =>{
    const {manid,index} = JSON.parse(config.body);
    let data=[];
    for(let i = 0 ; i<list2.length; i++) {
      data.push(list2[i])
      if(manid == list2[i].manid){
        let child = list2[i].children;
        for(let j=0; j<child.length; j++){
          data.splice(index+j+1,0 ,child[j])
        }
      }
    }
    return{
      code: 200,
      data:data,
      msg:'获取第二层成功'
    }
  },
  getThreeList: config=>{
    console.log("config==",config)
    const {manid,index,title} = JSON.parse(config.body);
    let data=[];
    for(let i = 0 ; i<list2.length; i++) {
      data.push(list2[i])
      if(manid == list2[i].manid){
        let child = list2[i].children;
        for(let j=0; j<child.length; j++){
          data.splice(index+j+1,0 ,child[j]);
        }
      }
    }
    console.log("第二层data==",data);
    console.log("list3==",list3)
    for(let i=0;i<data.length;i++){
      for(let j=0;j<list3.length;j++){
        if(data[i].title == title  && list3[j].title == title && data[i].manid == manid && list3[j].title == title){
          console.log("list3[j]-==",list3[j])
          let children=list3[j].children;
          for(let m=0;m<children.length;m++){
            data.splice(i+1,0,children[m]);
            console.log("emmm")
          }
        } 
      }
    }
    return{
      code: 200,
      data:data,
      msg:'获取第三层成功'
    }

  }
}