<template>
  <div class="profile-page">
    <upme-layout>
      <upme-menu/>
      <upme-content>
        <upme-header/>
        <upme-main>
          <transition
            name="page"
            mode="out-in">
            <router-view/>
          </transition>
        </upme-main>
      </upme-content>
    </upme-layout>
  </div>
</template>

<script>
import UpmeLayout from '@/components/layout/UpmeLayout.vue'
import UpmeMenu from '@/components/layout/UpmeMenu.vue'
import UpmeContent from '@/components/layout/UpmeContent.vue'
import UpmeHeader from '@/components/layout/UpmeHeader.vue'
import UpmeMain from '@/components/layout/UpmeMain.vue'
import { api } from '@/plugins/http-api'

export default {
  components: {
    UpmeLayout,
    UpmeMenu,
    UpmeContent,
    UpmeHeader,
    UpmeMain
  },
  async created () {
    await api.interceptors.response.use(undefined, err => {
      return new Promise((resolve, reject) => {
        if (err.response) {
          if (err.response.status === 401 && err.response.config && !err.response.config.__isRetryRequest) {
            this.$store.dispatch('logoutRequest')
            this.$router.replace('/login')
          }
        }
        throw err
      })
    })
    await this.$store.dispatch('initProfile')
  }
}
</script>

<style lang="scss" scoped>
.profile-page {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
