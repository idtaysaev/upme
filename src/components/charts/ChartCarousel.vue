<template>
  <carousel
    :per-page="1"
    :navigation-enabled="true"
    :pagination-enabled="false"
    :min-swipe-distance="50"
    navigation-prev-label="<"
    navigation-next-label=">"
    class="chart-carousel">
    <slot/>
  </carousel>
</template>

<script>
import { Carousel } from 'vue-carousel'

export default {
  components: {
    Carousel
  }
}
</script>

<style lang="scss">
.chart-carousel {
  position: static;
  &.VueCarousel {
    position: static;
  }
  .VueCarousel-navigation {
    font-size: 28px;

    @include respond-to(x-small, max) {
      .VueCarousel-navigation-button {
        color: white;
      }
      .VueCarousel-navigation-prev {
        left: 10%;
      }
      .VueCarousel-navigation-next {
        right: 10%;
      }
    }
  }
  .VueCarousel-slide {
    max-width: 100%;
  }
}
</style>
