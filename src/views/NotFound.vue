<template>
  <upme-main class="not-found-page">
    <upme-logo/>
    <h1 class="not-found-page-title">
      Похоже, такой страницы нет
    </h1>
    <router-link
      to="/"
      class="btn not-found-page-btn">
      Вернуться на главную
    </router-link>
  </upme-main>
</template>

<script>
import UpmeMain from '@/components/layout/UpmeMain.vue'
import UpmeLogo from '@/components/elements/UpmeLogo.vue'
export default {
  components: {
    UpmeMain,
    UpmeLogo
  }
}
</script>

<style lang="scss" scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 2em 0;
}
.not-found-page-title {
  margin: 0.6em 0;
}
.not-found-page-btn {
  font-size: 18px;
}
</style>
