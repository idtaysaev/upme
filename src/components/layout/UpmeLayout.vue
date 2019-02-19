<template>
  <div class="upme-layout">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.upme-layout {
  @include respond-to(medium) {
    display: flex;
    .upme-menu {
      flex-shrink: 0;
    }
    .upme-content {
      flex-grow: 1;
    }
  }
}
</style>
