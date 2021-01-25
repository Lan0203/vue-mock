<template>
  <div class="setting">
    <a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">
      <div class="account-settings-info-main">
        <div class="account-settings-info-left">
          <a-menu style="border: 0; width: auto}">
            <a-menu-item key="/account/settings/basic">
              <router-link :to="{name: 'BasicSettings'}">
               基本设置
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/security">
              <router-link :to="{ name: 'SecuritySettings' }">
                安全设置
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/custom">
              <router-link :to="{ name: 'CustomSettings' }">
                个性化
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/binding">
              <router-link :to="{ name: 'BindingSettings' }">
                账号绑定
              </router-link>
            </a-menu-item>
            <a-menu-item key="/account/settings/notification">
              <router-link :to="{ name: 'NotificationSettings' }">
                新消息通知
              </router-link>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <!-- <span>{{ $t($route.meta.title) }}</span> -->
          </div>
          <route-view></route-view>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Setting'
}
</script>

<style scoped>
.setting{
  margin:20px;
}
.account-settings-info-main{
  width: 100%;
  display: flex;
  height: 100%;
  overflow: auto;
}
.account-settings-info-main .account-settings-info-left {
  border-right: 1px solid #e8e8e8;
  width: 224px;
}
.account-settings-info-main .account-settings-info-right {
  flex: 1 1;
  padding: 8px 40px;
}
/* .account-settings-info-main .account-settings-info-right .account-settings-info-title {
  color: rgba(0,0,0,.85);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 12px;
}
.account-settings-info-view {
  padding-top: 12px;
} */
</style>