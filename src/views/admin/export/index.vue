<template>
  <div class="user">
    <div>
      <el-button type="primary" style="margin-bottom:10px" @click="exportData"><i class="iconfont icon-bianji1"></i>导出</el-button>
      <el-table :data="tableData" show-summary id="test-export">
        <el-table-column prop="date" label="日期" ></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="city" label="市区" ></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="zip" label="邮编" ></el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: 'SysUser',
  data() {
    return {
      tableData: [
        { date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333}, 
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    exportData(){
      let xlsxParam = { raw :true}
      let wb = XLSX.utils.table_to_book(document.querySelector('#test-export'),xlsxParam);
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array'});
      try{
        FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), '测试.xlsx');
      }
      catch(e) {
        if(typeof console !== 'undefined')
          console.log(e,wbout)
      }
      return wbout
    }
  },
}
</script>

<style scoped>
.user {
  height: 99.9%;
  padding:20px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  /* border-top: 1px solid #ccc */
}
.user__main .el-card__body {
  padding-top: 0;
}
</style>