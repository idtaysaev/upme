<template>
  <div class="user-wallet">
    <router-link
      class="btn user-wallet-link"
      to="/profile/wallet/replenishment">
      {{ numberWithSpaces(ballance) }} &#x20bd;
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', [
      'ballance'
    ])
  },
  methods: {
    numberWithSpaces (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.user-wallet-link {
  position: relative;
  font-weight: bold;
  &.btn {
    padding-right: 2em;
  }
  &::after {
    content: "";
    background-image: url("../../assets/icons/header/plus.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 40%;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    width: 1.72em;
    transition: all 0.3s;
  }
  &:hover {
    &::after {
      background-size: 46%;
    }
  }
}
</style>
