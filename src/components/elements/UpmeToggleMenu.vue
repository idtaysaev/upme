<template>
  <div
    class="upme-toggle-menu"
    @click="openMenu()">
    <span/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('menu', [
      'active'
    ])
  },
  methods: {
    openMenu () {
      if (!this.active) {
        this.$store.dispatch('menu/open')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upme-toggle-menu {
  cursor: pointer;
  width: 26px;
  &::before,
  &::after {
    content: "";
  }
  &::before,
  &::after,
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #f80612;
  }
  &::before,
  span {
    margin-bottom: 4px;
  }
  @include respond-to(medium) {
    display: none;
  }
}
</style>
