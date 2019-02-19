<template>
  <upme-page class="page-promotion">
    <h1 slot="header">
      {{ title }}
    </h1>
    <nav class="likes-nav">
      <router-link
        v-for="link in links"
        :to="link.url"
        :key="link.title"
        class="likes-nav-link">
        {{ link.title }}
      </router-link>
    </nav>
    <transition
      name="page"
      mode="out-in">
      <router-view/>
    </transition>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Лайки',
      links: [
        {
          url: '/profile/promotion/likes/standart',
          title: 'Standart'
        },
        {
          url: '/profile/promotion/likes/auto',
          title: 'Auto'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.likes-nav {
  display: flex;
  font-size: 23px;
  margin-bottom: 1em;
}
.likes-nav-link {
  border-bottom: 4px solid transparent;
  transition: all 0.3s;

  &:not(:last-child) {
    margin-right: 1em;
  }

  &.router-link-active {
    color: #c81e34;
    border-bottom-color: #c81e34;
  }
}
</style>
