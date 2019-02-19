<template>
  <div class="content-photo-default">
    <h2>
      На данный момент предолжений нет
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('content/photo', [
      'isEmpty',
      'firstLink'
    ])
  },
  mounted () {
    if (!this.isEmpty) {
      this.$router.replace(`/profile/content/photo/${this.firstLink}`)
    }
  }
}
</script>
