<template>
  <upme-page class="page-profile">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="profile">
      <transition
        name="page"
        mode="out-in">
        <router-view/>
      </transition>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Профиль'
    }
  }
}
</script>
