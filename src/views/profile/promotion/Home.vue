<template>
  <upme-page class="page-promotion">
    <h1 slot="header">
      {{ title }}
    </h1>
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
      title: 'Продвижение'
    }
  }
}
</script>
