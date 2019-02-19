<template>
  <upme-page class="page-how-to-use">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="how-to-use">
      <ul
        v-if="videos.length"
        class="video-list">
        <li
          v-for="video in videos"
          :key="video.video"
          class="video-list-item">
          <h2 class="video-list-item-title">
            {{ video.name }}
          </h2>
          <iframe
            :src="video.video+'?&autohide=1&modestbranding=1&fs=0&showinfo=0&rel=0'"
            width="210"
            height="373"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
        </li>
      </ul>
      <p v-else>
        Скоро здесь будут видео-руководства для каждого раздела! Ожидайте!
      </p>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import { mapState } from 'vuex'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Как пользоваться'
    }
  },
  computed: {
    ...mapState('guide', [
      'videos'
    ])
  }
}
</script>

<style lang="scss" scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @include respond-to(xs-small) {
    justify-content: flex-start;
    .video-list-item {
      width: 45%;
      width: calc(50% - 1em);
      margin-right: 2em;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  @include respond-to(small) {
    .video-list-item {
      width: 30%;
      width: calc(100% / 3 - 4em / 3);
      &:nth-child(2n) {
        margin-right: 2em;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  @include respond-to(large) {
    .video-list-item {
      width: 20%;
      width: calc(25% - 1.5em);
      &:nth-child(3n) {
        margin-right: 2em;
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
.video-list-item {
  margin-bottom: 2em;
  &:nth-child() {
    margin-bottom: 0;
  }
}
.video-list-item-title {
  position: relative;
  font-size: 23px;
  font-weight: 400;
  color: #c81e34;
  margin-bottom: 1em;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    width: 253px;
    max-width: 100%;
    height: 4px;
    background-color: #c81e34;
    background-image: linear-gradient(to right, #c42037 0%, #ff030f 100%);
  }
}
</style>
