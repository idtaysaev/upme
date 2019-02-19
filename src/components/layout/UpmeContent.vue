<template>
  <div
    :class="{ 'safari-no-hover': safariNoHover }"
    class="upme-content">
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      safariNoHover: false
    }
  }
  // mounted () {
  //   let timer

  //   this.$el.addEventListener('scroll', () => {
  //     clearTimeout(timer)
  //     if (!this.safariNoHover) {
  //       this.safariNoHover = true
  //     }

  //     timer = setTimeout(() => {
  //       this.safariNoHover = false
  //     }, 500)
  //   }, false)
  // }
}
</script>

<style lang="scss" scoped>
.upme-content {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  height:100%;
  height: 100vh;
  transform: translateZ(0);
  @include respond-to(medium) {
    box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
  }
}
</style>
