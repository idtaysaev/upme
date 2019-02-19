<template>
  <div class="profile-premium">
    <div
      v-if="isPremium"
      class="profile-premium-layout">
      <p class="profile-premium-description">
        Премиум активирован
      </p>
      <p>
        <router-link
          class="premium-link"
          to="/profile/premium">
          Описание
        </router-link>
      </p>
    </div>
    <div
      v-else
      class="profile-premium-layout">
      <p class="profile-premium-description">
        Премиум не активирован
      </p>
      <p>
        <router-link
          class="premium-link"
          to="/profile/premium">
          Попробовать
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('premium', [
      'isPremium'
    ])
  }
}
</script>

<style lang="scss" scoped>
.profile-premium {
  background-color: $color-primary;
  background-image: linear-gradient(37deg, #c42037 0%, $color-primary 100%);
  color: white;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  border-radius: 16px;
  padding: 2em;
  margin-bottom: 2em;
  text-align: center;

  @include respond-to(small) {
    text-align: left;
    padding: 4em;
  }
}
.premium-link {
  box-shadow: 0 8px 46px rgba(0, 0, 0, 0.46);
  background-color: white;
  color: $color-primary;
  border-radius: 10px;
  padding: 0.6em 1em;
  font-size: 26px;

  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.46);
  }
}
.profile-premium-layout {
  @include respond-to(small) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.profile-premium-description {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 1.6em;

  @include respond-to(x-small) {
    font-size: 24px;
  }

  @include respond-to(small) {
    margin-bottom: 0;
  }
}
</style>
