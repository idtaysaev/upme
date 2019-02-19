<template>
  <div class="promotion-container">
    <div class="promotion-content">
      <transition
        name="page"
        mode="out-in">
        <router-view/>
      </transition>
    </div>
    <ul
      :class="{ blur: blur }"
      class="promotion-list">
      <li
        v-for="promotion in promotions"
        :key="promotion.title"
        class="promotion-list-item">
        <router-link
          :to="promotion.url"
          :style="{ background: promotion.background }"
          class="promotion-list-link">
          <div class="img-container">
            <img
              :src="promotion.img"
              :alt="promotion.title">
          </div>
          <h2 class="promotion-list-item-title">
            {{ promotion.title }}
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Продвижение',
      blur: false,
      promotions: [
        {
          title: 'Лайки',
          background: 'linear-gradient(38deg, #c42037 0%, $color-primary 100%)',
          img: require('@/assets/icons/promotion/likes.svg'),
          url: '/profile/promotion/likes'
        },
        {
          title: 'Подписчики',
          background: 'linear-gradient(39deg, #f20ae4 0%, #6d00f4 100%)',
          img: require('@/assets/icons/promotion/subscribers.svg'),
          url: '/profile/promotion/subscribers'
        },
        // TODO: return
        // {
        //   title: 'Сохранения',
        //   background: 'linear-gradient(39deg, #f3a948 0%, #ffe110 100%)',
        //   img: require('@/assets/icons/promotion/savings.svg'),
        //   url: '/profile/promotion/savings'
        // },
        {
          title: 'Просмотры видео',
          background: 'linear-gradient(39deg, #c42037 0%, $color-primary 100%)',
          img: require('@/assets/icons/promotion/videos.svg'),
          url: '/profile/promotion/videos'
        },
        {
          title: 'Просмотры stories',
          background: 'linear-gradient(39deg, #01a0c6 0%, #8a2de0 100%)',
          img: require('@/assets/icons/promotion/stories.svg'),
          url: '/profile/promotion/stories'
        },
        {
          title: 'Зрители прямой эфир',
          background: 'linear-gradient(39deg, #c42037 0%, $color-primary 100%)',
          img: require('@/assets/icons/promotion/lives.svg'),
          url: '/profile/promotion/lives'
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      this.blur = toDepth > 3
    }
  },
  mounted () {
    const routeDepth = this.$route.path.split('/').length
    this.blur = routeDepth > 3
  }
}
</script>

<style lang="scss" scoped>
.promotion-container {
  position: relative;
}
.promotion-content {
  position: relative;
  z-index: 1;
}
.promotion-list {
  width: 100%;
  position: absolute;
  top: 3.4em;
  padding-bottom: 2em;
  font-size: $font-size-xxx-large;
  transform: translateZ(0);
  &.blur {
    .promotion-list-item {
      @include respond-to(medium, max) {
        margin-bottom: 0;
      }
      &::before {
        opacity: 0.3;
        transform: scale(1.4);
        @include respond-to(medium) {
          opacity: 0.6;
          transform: scale(1);
        }
      }
    }
    .promotion-list-link {
      pointer-events: none;
      opacity: 0;
      transform: scale(0.7);
    }
  }
  @include respond-to(medium) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .promotion-list-item {
      width: 48%;
      width: calc(50% - 0.5em);
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
    .img-container {
      flex-shrink: 0;
    }
  }
}
.promotion-list-item {
  will-change: transform;
  margin-bottom: 1em;
  transition: all 0.6s ease-in-out;
  &:last-child {
    margin-bottom: 0;
  }
}
.promotion-list-link {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  padding: 1em 19%;
  height: 200px;
  background-image: linear-gradient(38deg, #c42037 0%, $color-primary 100%);
  box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;

  .img-container {
    margin-right: 1em;
    flex-shrink: 0;
  }

  &:hover {
    opacity: 0.6;
  }
}
.promotion-list-item-title {
  font-size: 20px;
  font-weight: 700;
  @include respond-to(x-small) {
    font-size: 27px;
  }
}
.promotion-list-item {
  position: relative;
  will-change: box-shadow;
  &::before {
    content: "";
    position: absolute;
    left: 10%;
    top: 50%;
    display: block;
    width: 80%;
    box-shadow: 0 0 13em 3em $color-primary;
    opacity: 0;
    transition: all 1s ease-in-out;
    transform: scale(0.6)
  }
  &:nth-child(2) {
    &::before {
      box-shadow: 0 0 13em 3em #9c04ef;
    }
  }
  &:nth-child(3) {
    &::before {
      box-shadow: 0 0 13em 3em #fbd21e;
    }
  }
  &:nth-child(4) {
    &::before {
      box-shadow: 0 0 13em 3em $color-primary;
    }
  }
  &:nth-child(5) {
    &::before {
      box-shadow: 0 0 13em 3em #624fd9;
    }
  }
  &:nth-child(6) {
    &::before {
      box-shadow: 0 0 13em 3em $color-primary;
    }
  }

}
</style>
