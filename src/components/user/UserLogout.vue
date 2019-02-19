<template>
  <div class="logout">
    <a
      class="logout-link"
      href="/logout"
      @click.prevent="logout()">Выход</a>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logoutRequest')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.logout {
  font-size: 0;
  opacity: 0.6;

  @include respond-to(small) {
    font-size: 11px;
    .logout-link {
      width: auto;
      height: auto;
      background: none;
      transform: none;
    }
  }
}
.logout-link {
  display: block;
  width: 30px;
  height: 30px;
  background: url("../../assets/icons/header/logout.svg") no-repeat center;
  transform: rotate(180deg);
  background-size: contain;

  &:hover {
    opacity: 0.6;
  }
}
</style>
