<template>
  <div class="step-form">
    <a-card :bordered="false">
      <a-steps class="steps" :current="currentTab">
        <a-step title="填写转账信息" />
        <a-step title="确认转账信息" />
        <a-step title="完成" />
      </a-steps>
      <div class="content">
        <step1 v-if="currentTab === 0" @nextStep="nextStep"/>
        <step2 v-if="currentTab === 1" @nextStep="nextStep" @prevStep="prevStep"/>
        <step3 v-if="currentTab === 2" @prevStep="prevStep" @finish="finish"/>
      </div>
    </a-card>
   
  </div>
</template>

<script>
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
export default {
  name: 'StepForm',
  components: { Step1, Step2, Step3,},
  data() {
    return {
      currentTab: 0,
      steps:[{title:'填写转账信息'},{title: '确认转账信息'}, {title: '完成'}],
      current: 0,
    }
  },
  methods: {
    nextStep () {
      if (this.currentTab < 2) {
        this.currentTab += 1
      }
    },
    prevStep () {
      if (this.currentTab > 0) {
        this.currentTab -= 1
      }
    },
    finish () {
      this.currentTab = 0
    }
  },
}
</script>

<style>
.step-form{
  background: #fff;
  margin: 10px
}
.steps {
  max-width: 750px;
  margin: 16px auto;
}
.steps-content {
  margin-top: 16px;
  border-radius: 6px;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>