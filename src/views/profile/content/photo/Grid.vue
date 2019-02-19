<template>
  <ul
    :key="nickname"
    class="content-photo-grid">
    <li
      v-for="(photo, i) in photos"
      :key="i"
      class="content-photo-grid-item">
      <div
        :style="{ backgroundImage: `url(${photo})` }"
        class="content-photo-grid-item-image"/>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('content/photo', [
      'search',
      'photosOf'
    ]),
    nickname () {
      return this.$route.params.photographer
    },
    exist () {
      return this.search(this.nickname)
    },
    photos () {
      return this.photosOf(this.nickname)
    }
  },
  mounted () {
    if (!this.exist) {
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.content-photo-grid-item {
  width: 30%;
  width: calc(100% / 3 - 2.8em / 3);
  margin-bottom: 1.4em;

  &:nth-last-child(-n+3) {
    margin-bottom: 0;
  }
}
.content-photo-grid-item-image {
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.4);
}
</style>
