<template>
  <div class="form">
    <avue-form v-model="obj1" :option="option1"></avue-form>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name:"form",
  data(){
    return {
      obj1:{},
      option1:{
  column: [
    {
      type: 'select',
      label: '下拉选择器',
      dicData: [
        {
          label: '选项一',
          value: '0'
        },
        {
          label: '选项二',
          value: '1'
        },
        {
          label: '选项三',
          value: '2'
        }
      ],
      cascaderItem: [],
      span: 24,
      display: true,
      props: {
        label: 'label',
        value: 'value'
      },
      prop: '1629254545841_31787',
      change: ({value}) => {
console.log("123")
}
    }
  ],
  labelPosition: 'right',
  labelSuffix: '：',
  labelWidth: 120,
  gutter: 0,
  menuBtn: true,
  submitBtn: true,
  submitText: '提交',
  emptyBtn: true,
  emptyText: '清空',
  menuPosition: 'center'
}
    }
  },
  mounted() {
    console.log("options==",this.option1)
  },
  methods:{
    handleSubmit(data){
      console.log("data==",data)
    }
  }
}
</script>

<style scoped>
.form{
  height: 99.9%;
  padding:20px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>