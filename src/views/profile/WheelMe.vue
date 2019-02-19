<template>
  <upme-page class="page-wheel-me">
    <div
      slot="header"
      class="wheel-me-header">
      <div class="wheel-me-header-layout">
        <h1>
          {{ title }}
        </h1>
        <span
          class="headline-tip-question"
          @click="turnOnHint"
          @mouseover="turnOnHint"
          @mouseleave="turnOffHint">?</span>
      </div>
      <transition name="fade">
        <p
          v-show="showHint"
          class="headline-tip-content">
          В этом разделе ты сможешь ежедневно получать бесплатные бонусы!
        </p>
      </transition>
    </div>
    <div class="wheel-me-layout">
      <div class="wheel-me-container">
        <wheel-me @getPrize="getPrize"/>
      </div>
      <div class="wheel-me-stats">
        <transition name="slide-down">
          <p
            v-show="showPrize"
            class="wheel-me-prize">
            Ваш выигрыш:<br>
            {{ prize }}
          </p>
        </transition>
        <p class="wheel-me-spins">
          Кол-во спинов: {{ spins }}
          <router-link
            to="/profile/wallet/spins"
            class="btn wheel-me-spins-add">+</router-link>
        </p>
      </div>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import WheelMe from '@/components/elements/WheelMe.vue'
export default {
  components: {
    UpmePage,
    WheelMe
  },
  data () {
    return {
      title: 'WheelMe',
      prize: 0,
      showPrize: false,
      showHint: false
    }
  },
  computed: {
    spins () {
      return this.$store.state.user.free_spin + this.$store.state.user.spin
    }
  },
  methods: {
    getPrize (prize) {
      this.prize = prize
      this.showPrize = true
    },
    turnOnHint () {
      this.showHint = true
    },
    turnOffHint () {
      this.showHint = false
    }
  }
}
</script>

<style lang="scss" scoped>
.wheel-me-header {
  margin-bottom: 6em;
  position: relative;
  @include respond-to(small) {
    margin-bottom: 5em;
  }
}
.wheel-me-header-layout {
  display: flex;
  align-items: center;
}
.headline-tip-content {
  position: absolute;
  bottom: -1em;
  transform: translate3d(0, 100%, 0);
  padding: 0.6em 1em;
  box-shadow: 0 10px 2em rgba(0, 0, 0, 0.3);
  border-radius: 2em;
  @include respond-to(large) {
    bottom: 50%;
    transform: translate3d(0, 50%, 0);
    left: 240px;
  }
}
.headline-tip-question {
  color: $color-primary;
  border-radius: 50%;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
  background: white;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: box-shadow 0.3s;
  margin-left: 1rem;
  cursor: pointer;
  &:focus,
  &:hover {
    box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.3);
  }
}
.wheel-me-layout {
  @include respond-to(large) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
.wheel-me-container {
  margin-bottom: 2em;
  text-align: center;
  @include respond-to(large) {
    margin-bottom: 0;
  }
}
.wheel-me-stats {
  text-align: center;
  flex-grow: 1;
}
.wheel-me-prize {
  padding: 1em;
  border-radius: 10px;
  background-image: linear-gradient(32deg, #15ff73 0%, #fff715 100%);
  box-shadow: -4px 0 0.6em rgba(21, 255, 115, 0.5);
  margin-bottom: 1em;
  font-size: $font-size-xxx-large;
}
.wheel-me-spins {
  color: $color-primary;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.wheel-me-spins-add {
  border-radius: 50%;
  width: 46px;
  height: 46px;
  padding: 0;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.2em;
}
</style>
