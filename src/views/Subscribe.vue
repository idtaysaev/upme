<template>
  <upme-main class="subscribe-page">
    <!-- subs -->
    <div class="subscribe-form">
      <!--  -->
    </div>
  </upme-main>
</template>

<script>
import UpmeMain from '@/components/layout/UpmeMain.vue'
import ButtonLoading from '@/components/elements/ButtonLoading.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    UpmeMain,
    ButtonLoading
  },
  computed: {
    ...mapGetters([
      'authStatus'
    ])
  }
}
</script>

<style lang="scss" scoped>
.subscribe-page {
  min-height: 100vh;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
