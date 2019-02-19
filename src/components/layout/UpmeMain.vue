<template>
  <main
    class="upme-main"
    role="main">
    <upme-container class="wide">
      <slot/>
    </upme-container>
  </main>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
export default {
  components: {
    UpmeContainer
  }
}
</script>
