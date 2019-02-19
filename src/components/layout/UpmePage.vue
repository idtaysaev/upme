<template>
  <section class="page">
    <header class="page-header">
      <slot name="header"/>
    </header>
    <slot/>
  </section>
</template>

<style lang="scss" scoped>
.page {
  padding: 1em 0 2em;
}
.page-header {
  margin-bottom: 2em;
}
</style>
