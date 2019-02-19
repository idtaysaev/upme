<template>
  <div class="home-def">
    <banner/>
    <check-inst/>
    <popular-inst/>
    <wheel-me/>
    <advantages/>
    <registration/>
  </div>
</template>

<script>
import Banner from '@/components/land/Banner.vue'
import CheckInst from '@/components/land/CheckInst.vue'
import PopularInst from '@/components/land/PopularInst.vue'
import WheelMe from '@/components/land/WheelMe.vue'
import Advantages from '@/components/land/Advantages.vue'
import Registration from '@/components/land/Registration.vue'

export default {
  components: {
    Banner,
    CheckInst,
    PopularInst,
    WheelMe,
    Advantages,
    Registration
  }
}
</script>

<style lang="scss" scoped>
.home-def > section {
  position: relative;
}
</style>
