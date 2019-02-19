<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 15px;

  &.wide {
    @include respond-to(medium) {
      padding: 0 40px;
    }
  }
  .home-banner &,
  .home-header & {
    max-width: 1320px;
  }
}
</style>
