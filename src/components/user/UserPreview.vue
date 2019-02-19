<template>
  <div class="user-preview">
    <router-link
      class="user-preview-link"
      to="/profile">
      <div class="user-preview-layout">
        <user-avatar/>
        <p class="user-preview-name">
          {{ firstName }}<br>
          {{ lastName }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import UserAvatar from '@/components/user/UserAvatar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    UserAvatar
  },
  computed: {
    ...mapState('user', {
      firstName: 'first_name',
      lastName: 'last_name'
    })
  }
}
</script>

<style lang="scss" scoped>
.user-preview {
  display: none;
  @include respond-to(medium) {
    display: block;
  }
}
.user-preview-layout {
  display: flex;
  align-items: center;
}
.user-preview-name {
  font-size: 11px;
  max-width: 200px;
  overflow: hidden;
  margin-left: 1em;
}
.user-preview-link {
  &:hover {
    opacity: 0.6;
  }
}
</style>
