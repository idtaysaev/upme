<template>
  <section class="home-wheel-me">
    <upme-container>
      <h2 class="wheel-me-title">
        Испытай удачу на WheelMe
      </h2>
      <wheel-me random/>
    </upme-container>
    <div class="decor">
      <div class="decor-item decor-item-circle decor-item-1"/>
      <div class="decor-item decor-item-circle decor-item-2"/>
    </div>
  </section>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
import WheelMe from '@/components/elements/WheelMe.vue'
export default {
  components: {
    UpmeContainer,
    WheelMe
  }
}
</script>

<style lang="scss" scoped>
.home-wheel-me {
  text-align: center;
  padding: 2em 0;
}
/deep/ .wheel-me {
  @include respond-to(large) {
    .wheel-me-img {
      max-width: 80vh;
      svg {
        width: 660px;
      }
    }
    .wheel-me-action {
      font-size: 26px;
    }
  }
  @include respond-to(x-large) {
    .wheel-me-img {
      svg {
        width: 860px;
      }
    }
    .wheel-me-action {
      font-size: 30px;
    }
  }
}
.wheel-me-title {
  font-size: 30px;
  text-align: center;
  color: #484848;
  margin-bottom: 1.6em;
  @include respond-to(x-small) {
    font-size: 44px;
  }
  @include respond-to(medium) {
    text-align: left;
  }
}
.decor-item-1 {
  bottom: 5%;
  right: -15%;
  width: 450px;
  height: 450px;
  background-image: linear-gradient(45deg, #f3c111 0%, #ee0727 100%);
  box-shadow: 1em 4em 8em 1em rgba(#f3c111, 0.8);

  @include respond-to(x-large) {
    width: 607px;
    height: 607px;
  }
}
.decor-item-2 {
  bottom: 30%;
  left: -18%;
  width: 480px;
  height: 480px;
  background-image: linear-gradient(45deg, #c42037 0%, #ff030f 100%);
  box-shadow:
    0 2em 6em 1em rgba(#f3c111, 0.6),
    2em -2em 8em 1em rgba($color-primary, 0.5);

  @include respond-to(x-large) {
    width: 607px;
    height: 607px;
  }
}
</style>
