<template>
  <div class="success">
    <div class="fail-title">
      <h2>失败</h2>
    </div>
    <div style="padding: 20px">
      <a-card :bordered="false">
        <a-result status="error"  title="提交失败" 
          sub-title="请核对并修改以下信息后，再重新提交。"
        >
          <template #extra>
            <a-button key="console" type="primary">
              返回修改
            </a-button>
          </template>
          <div class="desc">
            <p style="font-size: 16px;">
              <strong>您提交的内容有如下错误:</strong>
            </p>
            <p>
              <a-icon :style="{ color: 'red' }" type="close-circle" /> 您的账户已被冻结
              <a>立即解冻 &gt;</a>
            </p>
            <p>
              <a-icon :style="{ color: 'red' }" type="close-circle" /> 您的账户还不具备申请资格
              <a>立即升级 &gt;</a>
            </p>
          </div>
        </a-result>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fail'
}
</script>

<style scoped>
.fail-title{
  background: #fff;
  padding:10px
}
</style>