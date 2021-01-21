<template>
  <div class="login-wrap">
    <el-form :model="loginForm" :rules="loginRules" ref="validateForm"
      class="login-form" label-position="left" label-width="70px"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" @keyup.enter.native="handleLogin('loginForm')"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" @keyup.enter.native="handleLogin('loginForm')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click.native.prevent="handleLogin('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'Login',
  data() {
    return {
      loginForm:{
        username:'',
        password:'',
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
      },
    }
  },
  computed: {
    ...mapGetters(['tagWel','website'])
  },
  methods:{
    handleLogin(){
      console.log("this.tagWel==",this.tagWel)
      this.$refs.validateForm.validate(valid =>{
        if(valid){
          this.$store.dispatch('LoginByUsername', this.loginForm).then(res =>{
            console.log("登录")
            this.$router.push({path: '/wel'})
          }).catch(()=>{

          })
        }
      })
      
    }
  }
}
</script>

<style scoped>
.login-wrap{
  height: 100%;
  background-color: #324152;
  /* 弹性盒子 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form{
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-wrap .login-btn{
  width: 100%;
}
</style>

