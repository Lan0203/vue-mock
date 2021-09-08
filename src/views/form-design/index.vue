<template>
  <div class="form-design">
    <avue-form-design style="height: 86vh;"
      :options="options"
      storage
      :showGithubStar="false"
      :custom-fields="customFields"
      @submit="handleSubmit"></avue-form-design>
  </div>
</template>

<script>
export default {
  name:'FormDesign',
  data(){
    return{
      options: {
        column: []
      },
      customFields: [
        {
          title: '分割线',
          component: 'el-divider',//ele分割线
          span: 24,
          icon: 'el-icon-eleme',
          tips: '看我：自定义属性怎么用？',
          labelWidth: '0px',
          params: {
            html: '',
            contentPosition: "left",
          }
        },
      ],
    }
  },
  methods:{
    handleSubmit(data){

    }
  }
}
</script>

<style scoped>
.form-design{
  height: 99.9%;
  padding:20px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>