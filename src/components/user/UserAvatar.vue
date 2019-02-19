<template>
  <div class="img-container user-avatar">
    <img
      :src="avatar"
      alt=""
      class="user-avatar-image">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', [
      'avatar'
    ])
  }
}
</script>

<style lang="scss" scoped>
.user-avatar {
  display: inline-block;
  position: relative;
  width: 55px;
  height: 55px;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    border: 2px solid $color-primary;
    border-radius: 50%;
  }
  &.profile-info-avatar {
    width: 109px;
    height: 109px;
  }
}
.user-avatar-image {
  border-radius: 50%;
}
</style>
