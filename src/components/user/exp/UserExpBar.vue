<template>
  <div class="user-exp-bar">
    <div
      :style="{ width: progress + '%' }"
      class="user-exp-bar-progress"/>
    <span class="user-exp-bar-value">
      {{ min }}/{{ max }} UP
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', [
      'experience',
      'currentLevel',
      'nextLevel'
    ]),
    min () {
      return this.experience - this.currentLevel.experience
    },
    max () {
      return this.nextLevel.experience - this.currentLevel.experience
    },
    progress () {
      return this.min / this.max * 100
    }
  }
}
</script>

<style lang="scss" scoped>
.user-exp-bar {
  position: relative;
  display: block;
  text-align: center;
  transform: translate3d(-4px, 0, 0);
  width: 242px;
  max-width: 100%;
  border-radius: 2em;
  box-shadow: 0 0 1em rgba($color-shadow, 0.5);
  font-size: 14px;
  padding: 0.1em;

  &.profile-exp-bar {
    background-color: #f1f1f1;
    box-shadow: none;
  }
}
.user-exp-bar-progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 2em;
  border-radius: inherit;
  background: transparent linear-gradient(to left, #e9bec0 0%, #ef0828 100%);
  transition: width 0.3s;
}
.user-exp-bar-value {
  position: relative;
}
</style>
