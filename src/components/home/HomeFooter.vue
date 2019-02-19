<template>
  <footer class="home-footer">
    <div class="home-footer-layout">
      <p class="home-footer-link-container">
        <a href="//www.free-kassa.ru/"><img src="//www.free-kassa.ru/img/fk_btn/6.png"></a>
      </p>
      <p class="home-footer-link-container">
        <router-link
          to="/about"
          class="home-footer-link">О нас</router-link>
      </p>
      <p class="home-footer-link-container">
        <router-link
          to="/terms-of-use"
          class="home-footer-link">Условия использования</router-link>
      </p>
      <p class="home-footer-link-container">
        <router-link
          to="/privacy-policy"
          class="home-footer-link">Политика конфиденциальности</router-link>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
.home-footer {
  padding: 2em 0;
  border-top: 2px solid $color-primary;
  text-align: center;
}
.home-footer-layout {
  @include respond-to(x-small) {
    display: flex;
    justify-content: center;
    align-items: center;
    .home-footer-link-container {
      margin-bottom: 0;
      margin-right: 1em;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.home-footer-link-container {
  margin-bottom: 0.6em;
  &:last-child {
    margin-bottom: 0;
  }
}
.home-footer-link {
  font-size: 16px;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.1em;

  &:hover {
    border-bottom-color: $color-primary;
    opacity: 0.8;
  }
}
</style>
