<template>
  <header class="home-header">
    <upme-container>
      <div class="home-header-layout">
        <upme-logo/>
        <p class="home-header-actions">
          <a
            class="btn btn-registration"
            href="#registration"
            @click="navigate">Регистрация</a>
          <router-link
            class="btn btn-profile"
            to="/profile">Личный кабинет</router-link>
        </p>
      </div>
    </upme-container>
  </header>
</template>

<script>
import UpmeLogo from '@/components/elements/UpmeLogo.vue'
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
export default {
  components: {
    UpmeLogo,
    UpmeContainer
  },
  methods: {
    navigate (event) {
      if (this.$route.name !== 'home') {
        event.preventDefault()
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  padding: 2em 0;
  @include respond-to(large) {
    padding: 4em 0;
  }
}
/deep/ .upme-logo {
    svg {
      @include respond-to(x-small) {
        width: 208px;
      }
      @include respond-to(small) {
        width: 240px;
      }
    }
  }
.btn {
  font-size: 16px;
  @include respond-to(x-small) {
    font-size: 22px;
    padding: 0.4em 1em;
  }
  @include respond-to(x-large) {
    font-size: 26px;
    padding: 0.4em 2em;
  }
}
.home-header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-registration {
  display: none;
  @include respond-to(medium) {
    position: relative;
    display: inline-block;
    margin-right: 0.2em;
    text-shadow: 0 0 5em $color-primary;
    background: none;
    background: #F1641C linear-gradient(32deg, #f3c111 0%, #ee0727 100%);
    padding: 0.4em 2em;
    box-shadow: 0 0 2em rgba(#F1641C, 0.8);
    &:hover,
    &:focus {
      box-shadow: 0 0 0.8em rgba(#F1641C, 0.8);
    }
  }
  @include respond-to(x-large) {
    padding: 0.8em 3em;
  }
}
.btn-profile {
  @include respond-to(medium) {
    background: none;
    color: inherit;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      opacity: 0.6;
    }
  }
}
.home-header-actions {
  @include respond-to(medium) {
    display: flex;
    align-items: center;
  }
}
</style>
