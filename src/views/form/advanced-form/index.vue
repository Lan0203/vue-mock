<template>
  <div class="advanced-form">
    <a-card class="card" title="仓库管理" :bordered="false">
      <repository-form ref="repository" :showSubmit="false" />
    </a-card>
    <a-card class="card" title="任务管理" :bordered="false">
      <task-form ref="task" :showSubmit="false" />
    </a-card>
  </div>
</template>

<script>
import RepositoryForm from './repositoryForm'
import TaskForm from './taskForm'
export default {
  name: 'AdvancedForm',
  components: {
    // FooterToolBar,
    RepositoryForm,
    TaskForm
  },
}
</script>

<style>
.card {
  margin:10px 10px 24px 10px;
}

.popover-wrapper /deep/ .antd-pro-pages-forms-style-errorPopover .ant-popover-inner-content {
  min-width: 256px;
  max-height: 290px;
  padding: 0;
  overflow: auto;
}

.antd-pro-pages-forms-style-errorIcon {
  user-select: none;
  margin-right: 24px;
  color: #f5222d;
  cursor: pointer;
}
.antd-pro-pages-forms-style-errorIcon i {
  margin-right: 4px;
}

.antd-pro-pages-forms-style-errorListItem {
  padding: 8px 16px;
  list-style: none;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  transition: all 0.3s;
}
.antd-pro-pages-forms-style-errorListItem:hover {
  background: #e6f7ff;
}
.antd-pro-pages-forms-style-errorListItem .antd-pro-pages-forms-style-errorIcon {
  float: left;
  margin-top: 4px;
  margin-right: 12px;
  padding-bottom: 22px;
  color: #f5222d;
}
.antd-pro-pages-forms-style-errorListItem .antd-pro-pages-forms-style-errorField {
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
}
</style>