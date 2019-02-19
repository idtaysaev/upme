<template>
  <div class="content-photo">
    <nav class="photographer-nav">
      <carousel
        :navigation-enabled="false"
        :pagination-enabled="true"
        :per-page="1"
        :value="initialPhotographerIndex"
        class="photographer-carousel"
        pagination-active-color="#ff030f"
        pagination-color="#000000"
        @pageChange="changePage">
        <slide
          v-for="photographer in photographers"
          :key="photographer.id"
          class="photographer-carousel-slide">
          <div class="photographer">
            <div class="photographer-layout">
              <div
                :style="{ backgroundImage: `url(${photographer.avatar})` }"
                class="img-container photographer-avatar"/>
              <section>
                <h2 class="photographer-title">
                  {{ photographer.title }}
                </h2>
                <p class="photographer-nickname">
                  <a
                    :href="photographer.url"
                    class="photographer-nickname-link">
                    @{{ photographer.nickname }}
                  </a>
                </p>
                <a
                  :href="photographer.url"
                  class="btn photographer-link"
                  target="_blank">
                  Запись
                </a>
              </section>
            </div>
          </div>
        </slide>
      </carousel>
    </nav>
    <div class="content-photo-layout">
      <transition
        name="page"
        mode="out-in">
        <router-view/>
      </transition>
      <section class="content-photo-advantages">
        <div class="content-photo-advantages-top">
          <h2 class="content-photo-advantages-title">
            {{ advantages.title }}
          </h2>
        </div>
        <div class="content-photo-advantages-bottom">
          <ul class="content-photo-advantages-list">
            <li
              v-for="(advantage, i) in advantages.list"
              :key="i"
              class="content-photo-advantage">
              {{ advantage }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      advantages: {
        title: 'Преимуществом мобильной фотографии является естественность, так подписчики идентифицируют ее как настоящую и живую. Фотографии, которые сделаным на телефон, пользователи доверяют больше, чем профессиональным фото из студии.',
        list: [
          'Съемка производится в нескольких локациях, с учетом выбранном одежды заказчика, его интересов и предпочтений по продвижению аккаунта за 1-2 выхода на съемку.',
          'Фотография обрабатывается в кратчайшее время в течение 2-3 дней после съемки.',
          'Готовые фотографии выставляются по сетке в гармоничном порядке для последовательной публикации и красивого оформления Instagram в соответствии с контен-планом.',
          'Для готовых фото подготавливается тематический контент-план под задачи заказчика.',
          'По итогу заказчик получает папку с контент-планом и упорядоченными фотографиями в соответствии с ним.'
        ]
      },
      initialPhotographerIndex: 0
    }
  },
  computed: {
    ...mapState('content/photo', [
      'photographers'
    ]),
    nickname () {
      return this.$route.params.photographer
    },
    photographerIndex () {
      return this.photographers.findIndex(photographer => photographer.nickname === this.nickname)
    }
  },
  mounted () {
    this.initialPhotographerIndex = this.photographerIndex
  },
  methods: {
    changePage (value) {
      const nickname = this.photographers[value].nickname
      this.$router.replace(`/profile/content/photo/${nickname}`)
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: mobile + perfect scss
.photographer-nav {
  margin-bottom: 2em;
}
/deep/ .VueCarousel-dot {
  margin-top: 0 !important;
}
.photographer-carousel-slide {
  padding: 2em;
}
.photographer {
  display: block;
  padding: 1em;
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 3em $color-primary;

  @include respond-to(small) {
    padding: 2em;
  }
}
.photographer-layout {
  text-align: center;
  @include respond-to(x-small) {
    text-align: left;
    display: flex;
    align-items: center;

    .photographer-avatar {
      margin: 0 2em 0 0;
      flex-shrink: 0;
    }
  }
}
.photographer-avatar {
  width: 150px;
  height: 150px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin: 0 auto 1em;
}
.photographer-title {
  // margin-bottom: 1em;
  @include respond-to(small) {
    font-size: 1.6em;
  }
}
.photographer-nickname {
  margin-bottom: 1em;
}
.photographer-nickname-link {
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
}
.photographer-link {
  font-size: 1.6em;
  padding: 0.4em 2em;
  background: white;
  color: $color-primary;
  box-shadow: 0 0 1em white;

  &:hover {
    box-shadow: 0 0 0.4em white;
  }
}
.content-photo-layout {
  padding-top: 1.4em;
  border-top: 1px solid rgba(grey, 0.5);

  .content-photo-grid {
    margin-bottom: 1.4em;
  }

  @include respond-to(small) {
    display: flex;
    justify-content: space-between;

    .content-photo-grid {
      flex-grow: 1;
      margin-right: 1.4em;
      margin-bottom: 0;
      align-self: flex-start;
    }

    .content-photo-advantages {
      width: 50%;
    }
  }

}
.content-photo-advantages {
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
.content-photo-advantages-top {
  padding: 2em;
  padding-left: 5em;
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.content-photo-advantages-bottom {
  padding: 2em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.content-photo-advantages-title {
  font-size: inherit;
}
.content-photo-advantage {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &::before {
    content: "";
    display: inline-block;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: $color-primary;
    background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
    flex-shrink: 0;
    margin-right: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
}
</style>
