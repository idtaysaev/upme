<template>
  <div class="profile-info">
    <div class="profile-info-layout">
      <a
        :title="username"
        :href="url"
        target="_blank"
        class="profile-info-avatar-link">
        <user-avatar class="profile-info-avatar"/>
      </a>
      <div class="profile-info-meta">
        <section>
          <header>
            <div class="profile-info-top-layout">
              <h2 class="profile-info-name">
                {{ fullName }}
              </h2>
              <router-link
                to="/profile/edit"
                title="Редактировать профиль"
                class="profile-edit-link"/>
            </div>
          </header>
          <p class="profile-info-username">
            <a
              :title="username"
              :href="url"
              class="profile-info-username-link"
              target="_blank">
              @{{ username }}
            </a>
          </p>
          <p class="profile-info-level">
            {{ currentLevel.title }}
          </p>
          <div class="profile-info-bottom-layout">
            <user-exp-bar class="profile-exp-bar"/>
            <router-link
              to="/profile/tasks"
              class="profile-info-tasks">Пройти задания</router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/components/user/UserAvatar.vue'
import UserExpBar from '@/components/user/exp/UserExpBar.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    UserAvatar,
    UserExpBar
  },
  computed: {
    ...mapState('user', [
      'currentLevel',
      'username'
    ]),
    ...mapGetters('user', [
      'fullName',
      'url'
    ])
  }
}
</script>

<style lang="scss" scoped>
.profile-info {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  padding: 2em;
  margin-bottom: 2em;
}
.profile-info-layout {
  @include respond-to(x-small) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .profile-info-meta {
      margin-left: 2em;
      flex-grow: 1;
    }

    .profile-info-avatar-link {
      margin-bottom: 0;
    }
  }
}
.profile-info-avatar-link {
  display: block;
  margin: 0 auto 1em;

  &:hover {
    opacity: 0.6;
  }
}
.profile-info-top-layout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.profile-info-name {
  font-size: 16px;
  font-weight: 700;
  @include respond-to(x-small) {
    font-size: 23px;
  }
}
.profile-edit-link {
  padding: 4px;
  width: 35px;
  height: 32px;
  display: inline-block;
  background: url("../../assets/icons/profile/edit.svg") no-repeat center;

  &:hover {
    opacity: 0.6;
  }
}
.profile-info-username {
  font-size: 20px;
  margin-bottom: 0.6em;
}
.profile-info-username-link {
  &:hover {
    opacity: 0.6;
  }
}
.profile-info-level {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.3em;
}
.profile-info-bottom-layout {
  margin-bottom: 1.6em;

  .profile-info-tasks {
    margin: 1.6em 1em 0;
  }
  @include respond-to(small) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profile-info-tasks {
      margin: 0;
    }
  }
}
.profile-info-tasks {
  display: inline-block;
  position: relative;
  background-color: $color-primary;
  background-image: linear-gradient(34deg, #c42037 0%, #ff030f 100%);
  color: white;
  border-radius: 1em;
  padding: 0.2em 1em;
  padding-left: 2em;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    box-shadow: 0 0 1em rgba($color-primary, 0.5);
    background: url("../../assets/icons/profile/tasks.svg") no-repeat center;
    background-size: 50%;
    width: 44px;
    height: 44px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.3s;
  }
  &:hover {
    &::before {
      box-shadow: 0 0 0.4em rgba($color-primary, 0.5);
    }
  }
}
</style>
