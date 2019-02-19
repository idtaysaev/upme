<template>
  <div id="app">
    <upme-loading/>
    <transition
      name="page"
      mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import UpmeLoading from '@/components/layout/UpmeLoading.vue'
export default {
  components: {
    UpmeLoading
  },
  created () {
    this.$store.dispatch('loading/init')
  }
}
</script>
