<template>
    <div class="sql">
        <div>
            <el-button>查询</el-button>
            <el-button>执行</el-button>
            <el-button @click="addTab(editableTabsValue)">新建查询</el-button>
        </div>
        <div>
            <el-tabs
                v-model="editableTabsValue" type="card" closable @tab-remove="removeTab"
            >
            <el-tab-pane
                v-for="(item, index) in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{item.content}}
            </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import sql from './sql.vue';
import Vue from 'vue'
export default {
    name:"Sql",
    components: {
        sql,
    },

    data() {
        return {
            editableTabsValue: '2',
            editableTabs: [{
                title: 'Tab 1',
                name: '1',
                content: Vue.component('dom', {
                    template: `sql`
                })
                }, {
                title: 'Tab 2',
                name: '2',
                content: ""
            }],
            tabIndex: 2
        }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: sql
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
}
</script>

<style scoped>
.sql {
  height: 99.9%;
  padding:20px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>