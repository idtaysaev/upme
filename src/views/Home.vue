<template>
  <div class="home-page">
    <home-header/>
    <home-main/>
    <home-footer/>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeMain from '@/components/home/HomeMain.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
export default {
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  overflow: hidden;
  min-height: 100vh;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
}

/deep/ .container {
    max-width: 1080px;
    margin: 0 auto;
    @include respond-to(x-small) {
      padding: 0 20px;
    }
    @include respond-to(xs-small) {
      padding: 0 30px;
    }
    @include respond-to(small) {
      padding: 0 40px;
    }
  }
</style>
