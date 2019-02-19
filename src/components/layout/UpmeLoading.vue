<template>
  <transition
    name="fade"
    mode="out-in">
    <div
      v-show="loading"
      class="loading">
      <span class="loading-ball"/>
      <span class="loading-ball"/>
      <span class="loading-ball"/>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('loading', [
      'loading'
    ])
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &.hidden {
    display: none;
  }
}
.loading-balls {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-ball {
  $anim-drt: 0.4s;
  $anim-ease: cubic-bezier(0.6, 0.05, 0.15, 0.95);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin: 0.4em;
  background: $gradient-primary;

  &:nth-child(1) {
    animation: bouncing $anim-drt alternate infinite $anim-ease;
  }

  &:nth-child(2) {
    animation: bouncing $anim-drt $anim-drt/4 alternate infinite $anim-ease backwards;
  }

  &:nth-child(3) {
    animation: bouncing $anim-drt $anim-drt/2 alternate infinite $anim-ease backwards;
  }
}
</style>
