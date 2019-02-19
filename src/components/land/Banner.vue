<template>
  <section class="home-banner">
    <upme-container>
      <div class="home-banner-layout">
        <div>
          <h1 class="home-banner-title">
            Сервис Вашего будущего
          </h1>
          <p class="lg-only">
            <a
              class="btn"
              href="#registration">Регистрация</a>
          </p>
        </div>
        <div class="home-banner-video">
          <p class="home-banner-video-caption">
            Посмотри видео
          </p>
          <div class="home-banner-video-container">
            <div class="home-banner-video-iframe">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/l4LOqDfgx_g"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
          </div>
        </div>
      </div>
      <div class="home-banner-bottom">
        <a
          class="btn"
          href="#registration">Регистрация</a>
      </div>
    </upme-container>
    <div class="img-container banner-decor">
      <img
        class="banner-decor-x"
        src="@/assets/img/land/banner-decor.svg"
        alt="">
      <img
        class="banner-decor-lg"
        src="@/assets/img/land/banner-decor-lg.svg"
        alt="">
    </div>
    <!-- <div class="decor">
      <div class="img-container">
        <img
          src="@/assets/img/land/banner-decor-lg.svg"
          alt="">
      </div>
    </div> -->
  </section>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
export default {
  components: {
    UpmeContainer
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  padding: 2em 0;
  @include respond-to(large) {
    padding-bottom: 0;
  }
}
.home-banner-layout {
  @include respond-to(large) {
    display: flex;
    justify-content: space-between;

    .home-banner-video {
      margin-left: 1em;
    }

    .home-banner-title {
      margin-bottom: 2em;
    }
  }
}
.banner-decor {
  position: relative;
  z-index: -1;
  margin-top: 2em;
  img {
    width: 100%;
  }
  @include respond-to(large) {
    margin: -10em 0 -1.5em;
    .banner-decor-x {
      display: none;
    }
  }
  @include respond-to(x-large) {
    margin: -21em 0 -9.5em;
  }
  @include respond-to(large, max) {
    .banner-decor-lg {
      display: none;
    }
  }
}
.home-banner-title {
  color: #484848;
  font-size: 30px;
  text-align: center;
  margin-bottom: 1em;
  @include respond-to(x-small) {
    font-size: 44px;
  }
  @include respond-to(large) {
    text-align: left;
  }
}
.home-banner-video {
  margin-bottom: 4em;
  @include respond-to(x-large) {
    transform: translate3d(25%,0,0);
  }
}
.home-banner-video-caption {
  font-size: 36px;
  color: #484848;
  border-bottom: 2px solid $color-primary;
  width: 600px;
  max-width: 100%;
  margin: 0 auto 0.4em;
  @include respond-to(large) {
    width: 440px;
  }
  @include respond-to(x-large) {
    width: 600px;
  }
}
.home-banner-video-container {
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  @include respond-to(large) {
    width: 440px;
  }
  @include respond-to(x-large) {
    width: 600px;
  }
}
.home-banner-video-iframe {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}
.home-banner-bottom {
  text-align: center;

  @include respond-to(large) {
    display: none;
  }

}
.btn {
  font-size: 26px;
  padding: 0.4em 2em;
}
</style>
