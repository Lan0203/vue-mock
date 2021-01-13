<template>
  <div class="user">
    <div class="user-search">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="用户名:">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchUser">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-button type="primary" style="margin-bottom:10px" @click="handleAddUser"><i class="iconfont icon-bianji1"></i>添加</el-button>
      <el-table :data="list" border>
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column prop="lockFlag" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.lockFlag == 0 ? 'danger' : ''">{{scope.row.lockFlag == 0 ? '锁定' : '有效'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="editUser(scope.row)">编辑</el-button>
            <el-button type="text" size="mini" @click="delUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="userDialog" :before-close="handleClose" :append-to-body="true"
      
    >
      <span slot="title">
        <span>
          <font size="5;">{{userTitle}}</font>
        </span>
      </span>
      <el-form :model="userForm" :rules="userRules" label-width="80px">
        <el-form-item label="用户名:" prop="username">
          <el-input  v-model="userForm.username" />
        </el-form-item>
        <el-form-item label="手机号:" prop="phone">
          <el-input v-model="userForm.phone" />
        </el-form-item>
        <el-form-item label="角色:" prop="role">
          <el-input v-model="userForm.role" />
        </el-form-item>
        <el-form-item label="状态" prop="lockFlag">
          <el-radio-group v-model="userForm.lockFlag">
            <el-radio border :label="1">有效</el-radio>
            <el-radio border :label="0">锁定</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Mock from 'mockjs';
import { mapGetters } from 'vuex';
import { getUserListApi, addUserApi, editUserApi, delUserApi } from '@/api/admin/user.js';
import { dateFormat } from '@/util/date.js'
export default {
  name: 'SysUser',
  data() {
    return {
      list:[],
      form:{
        username:''
      },
      userDialog:false,
      userTitle:'',
      userForm:{
        userId:'',
        username:'',
        phone:'',
        role:'',
        lockFlag:'',
        createTime:''
      },
      userRules:{
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        lockFlag: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    //查询用户
    searchUser(){

    },
    //获取用户列表
    getList(){
      getUserListApi().then(res =>{
        this.list=res.data.data;
      })
    },
    //新增按钮
    handleAddUser(){
      this.userTitle="新增用户";
      this.userDialog=true;

    },
    editUser(row){
      this.userTitle="编辑用户";
      let info = JSON.parse(JSON.stringify(row));
      this.userForm=info;
      this.userDialog=true;
    },
    handleSubmit(){
      if(this.userForm.userId == ""){
        this.userForm.userId = Mock.Random.guid();
        this.userForm.createTime =dateFormat(new Date());
        addUserApi(this.userForm).then(res =>{
          this.list=res.data.data;
          this.$message.success('添加用户成功')
          this.userForm={
            userId:'',
            username:'',
            phone:'',
            role:'',
            lockFlag:'',
            createTime:''
          };
          this.userDialog=false;
        }).catch(error =>{
          this.$message.error('添加用户失败');
        })
      }
      else{
        editUserApi(this.userForm).then( res =>{
          this.list=res.data.data;
          this.$message.success('修改用户成功')
          this.userForm={
            userId:'',
            username:'',
            phone:'',
            role:'',
            lockFlag:'',
            createTime:''
          };
          this.userDialog=false;
        })
      }
      
    },
    delUser(row){
      this.$confirm('是否删除该用户, 是否继续?', '提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUserApi(row).then(res => {
          this.list = res.data.data;
          this.$message.success('删除成功')
        })
      })
    },
    handleCancel(){
      this.userForm={};
      this.userDialog=false;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          this.userForm={};
        })
        .catch(_ => {});
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