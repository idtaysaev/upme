<template>
  <upme-page class="page-content">
    <h1 slot="header">
      {{ title }}
    </h1>
    <nav class="content-nav">
      <router-link
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        class="content-nav-link">
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
      title: 'Контент',
      links: [
        {
          url: '/profile/content/photo',
          title: 'Фото'
        }
        // {
        //   url: '/profile/content/presets',
        //   title: 'Пресеты'
        // },
        // {
        //   url: '/profile/content/vine',
        //   title: 'Вайн'
        // },
        // {
        //   url: '/profile/content/design',
        //   title: 'Оформление'
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content-nav {
  display: flex;
  font-size: 23px;
  margin-bottom: 1em;
}
.content-nav-link {
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
