<template>
  <div>
    <basic-container>
      <el-row :gutter="18">
        <el-col :span='6' class="gutter-row">
          <div class="gutter-box">
            <el-card shadow="hover">
              <div class="clear y-center">
                <div class="pull-left mr-m">
                  <i class="el-icon-sort text-2x" ></i>
                </div>
                <div class='clear'>
                  <div class='text-muted'>更新总量</div>
                  <h2>1001</h2>
                </div>
              </div>
              <div class="clear y-center">
                <div class="pull-left mr-m">
                  <i class="el-icon-plus text-2x text-danger" ></i>
                </div>
                <div class='clear'>
                  <div class='text-muted'>插入总量</div>
                  <h2>1005</h2>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span='6' class="gutter-row">
          <div class="gutter-box">
            <el-card shadow="hover">
              <div class="clear y-center">
                <div class="pull-left mr-m">
                  <i class="el-icon-cloudy text-2x" ></i>
                </div>
                <div class='clear'>
                  <div class='text-muted'>云数据</div>
                  <h2>30122</h2>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span='6' class="gutter-row">
          <div class="gutter-box">
            <el-card shadow="hover">
              <div class="clear y-center">
                <div class="pull-left mr-m">
                  <i class="el-icon-warning-outline text-2x text-info" ></i>
                </div>
                <div class='clear'>
                  <div class='text-muted'>日志</div>
                  <h2>802</h2>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span='6' class="gutter-row">
          <div class="gutter-box">
            <el-card shadow="hover">
              <div class="clear y-center">
                <div class="pull-left mr-m">
                  <i class="el-icon-message text-2x text-success" ></i>
                </div>
                <div class='clear'>
                  <div class='text-muted'>邮件</div>
                  <h2>105</h2>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </basic-container>
  </div>
</template>

<script>
export default {
  name:'Wel',
}
</script>

<style scoped>
.wel-contailer {
    position: relative;
  }

  .container{
    width: 100%;
  }
  .iframe {
    width: 100%;
    height: 940px;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
  .gutter-example >div{
    background: transparent;
    border: 0;
  }
  .gutter-box {
      padding: 5px 0;
  }
  .clear{
    display: inline-block;
    overflow: hidden;
  }
  .y-center{
    margin-left: 20px;
    align-items: center;
  }
  .pull-left {
    float: left;
  }
  .mr-m{
    margin-right: 1rem !important;
  }
  i.el-icon-sort{
    font-size: 3rem !important;
    color:#6887ff !important;
    opacity:0.8;
  }
  .text-danger{
    color:#f44455 !important;
    opacity:0.8;
  }
  .text-2x{
    font-size: 3rem
  }
  .text-muted{
    opacity: .6;
  }
  .text-info{
    color: #7D3CD5 !important;
    opacity:0.8;
  }
  .text-success{
    color: #6cc788 !important
  }
</style>