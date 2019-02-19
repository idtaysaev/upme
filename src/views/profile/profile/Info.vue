<template>
  <div class="profile-home">
    <profile-info/>
    <profile-premium/>
    <profile-involvement/>
    <profile-popular/>
    <!-- <profile-audience/> -->
  </div>
</template>

<script>
import ProfileInfo from '@/components/profile/ProfileInfo.vue'
import ProfilePremium from '@/components/profile/ProfilePremium.vue'
import ProfileInvolvement from '@/components/profile/ProfileInvolvement.vue'
import ProfilePopular from '@/components/profile/ProfilePopular.vue'
import ProfileAudience from '@/components/profile/ProfileAudience.vue'
export default {
  components: {
    ProfileInfo,
    ProfilePremium,
    ProfileInvolvement,
    ProfilePopular,
    ProfileAudience
  },
  mounted () {
    // this.$store.dispatch('user/init')
    this.$store.dispatch('notifications/init')
  }
}
</script>

<style lang="scss" scoped>
.profile-home {
  max-width: 700px;
}
</style>
