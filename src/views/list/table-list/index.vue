<template>
  <div class="table-list">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="规则编号">
                <a-input v-model="queryParam.id" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select v-model="queryParam.status" placeholder="请选择" default-value="0" style="width:200px">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons" style="float: right ">
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="table-operator">
        <a-table ref="table" size="default" rowKey="key" :columns="columns"
          :data-source="data" :alert="true" showPagination="auto">
          <span slot="serial" slot-scope="text, record, index">
            {{ index + 1 }}
          </span>
          <span slot="status" slot-scope="text">
            <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
          </span>
          <span slot="action" slot-scope="text, record">
            <template>
              <a @click="handleSub(record)">订阅报警</a>
            </template>
          </span>
        </a-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import {getTableListApi} from '@/api/list/tableList'
const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' }
  },
  {
    title: '规则编号',
    dataIndex: 'no'
  },
  {
    title: '描述',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' }
  },
  {
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    needTotal: true,
    customRender: (text) => text + ' 次'
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]
const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}
export default {
  name: 'TableList',
  data() {
    this.columns = columns
    return {
      queryParam: {},
      data:[],
    };
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  mounted() {
    this.getTableList()
  },
  methods: {
    getTableList(){
      getTableListApi().then(res =>{
        this.data=res.data.data
      })
    },
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
  }
}
</script>

<style scoped>
.table-list{
  margin: 10px
}
.table-page-search-wrapper .ant-form-inline .ant-form-item {
  display: flex;
  margin-bottom: 24px;
  margin-right: 0;
}
.table-page-search-wrapper .ant-form-inline .ant-form-item .ant-form-item-control-wrapper {
  flex: 1 1;
  display: inline-block;
  vertical-align: middle;
}
.table-page-search-wrapper .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: auto;
}
.table-page-search-wrapper .ant-form-inline .ant-form-item .ant-form-item-control {
  height: 32px;
  line-height: 32px;
}
.table-page-search-wrapper .table-page-search-submitButtons {
  display: block;
  margin-bottom: 24px;
  white-space: nowrap;
}
</style>