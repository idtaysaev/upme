<template>
  <header class="upme-header">
    <upme-container class="wide">
      <div class="upme-header-layout">
        <upme-toogle-menu/>
        <user-wallet/>
        <user-exp/>
        <user-notifications/>
        <user-preview/>
        <user-logout/>
      </div>
    </upme-container>
  </header>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
import UpmeToogleMenu from '@/components/elements/UpmeToggleMenu.vue'
import UserExp from '@/components/user/UserExp.vue'
import UserNotifications from '@/components/user/UserNotifications.vue'
import UserPreview from '@/components/user/UserPreview.vue'
import UserWallet from '@/components/user/UserWallet.vue'
import UserLogout from '@/components/user/UserLogout.vue'

export default {
  components: {
    UpmeContainer,
    UpmeToogleMenu,
    UserExp,
    UserNotifications,
    UserPreview,
    UserWallet,
    UserLogout
  }
}
</script>

<style lang="scss" scoped>
.upme-header {
  position: relative;
  z-index: 2;
  padding: 15px 0;
  font-size: 12px;
  @include respond-to(xx-small) {
    font-size: inherit;
  }
  @include respond-to(x-small) {
    font-size: 20px;
  }
}
.upme-header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
