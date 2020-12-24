<template>
  <div
    :class="{'basic-container--block':block}"
    class="basic-container">
    <el-card>
      <slot/>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BasicContainer',
  props: {
    block: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.basic-container {
  padding: 8px 10px;
  border-radius: 10px;
  box-sizing: border-box;
}
.basic-container .el-card {
  width: 100%;
}
.basic-container:first-child {
  padding-top: 0;
}
.basic-container--block {
  height: 100%;
}
.basic-container--block .el-card {
  height: 100%;
}
</style>
