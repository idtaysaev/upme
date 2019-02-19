<template>
  <div class="user-exp">
    <router-link to="/profile/tasks">
      <div class="user-exp-layout">
        <span class="btn user-exp-level">
          {{ currentLevel.title }}
        </span>
        <user-exp-bar/>
      </div>
    </router-link>
  </div>
</template>

<script>
import UserExpBar from '@/components/user/exp/UserExpBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    UserExpBar
  },
  computed: {
    ...mapState('user', [
      'currentLevel'
    ])
  }
}
</script>

<style lang="scss" scoped>
.user-exp-layout {
  display: flex;
  align-items: center;
}
.user-exp-level {
  position: relative;
  &.btn {
    padding-right: 2em;
    font-weight: bold;
  }
  &::after {
    content: "";
    background-image: url("../../assets/icons/header/up-arrow.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 50%;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: 0;
    right: -1px;
    height: 1.72em;
    width: 1.72em;
    transition: background-position 0.3s;
  }

  &:hover {
    &::after {
      background-position-y: 40%;
    }
  }
}
.user-exp-bar {
  display: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  @include respond-to(large) {
    display: block;
  }
}
</style>
