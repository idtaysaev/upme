<template>
  <div class="user-notifications">
    <button
      class="btn user-notifications-btn"
      @click="toggle">{{ lastNotifications.length }}</button>
    <transition name="fade">
      <div
        v-show="show"
        class="notifications">
        <ul class="notifications-list">
          <li
            v-for="(notification, i) in lastNotifications"
            :key="notification.date+i"
            class="notification">
            <p class="notification-message">{{ notification.message }}</p>
            <!-- <time
              :datetime="notification.date"
              class="notification-date">{{ notification.date.toLocaleDateString("ru") }}</time> -->
            <p class="notification-date">
              <time :datetime="notification.date">{{ notification.date }}</time>
            </p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters('notifications', [
      'lastNotifications'
    ])
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.user-notifications-btn {
  display: flex;
  align-items: center;
  font-weight: bold;
  &::before {
    content: "";
    background-image: url("../../assets/icons/header/notifications.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    width: 0.818181818em;
    height: 1em;
    margin-right: 0.6em;
  }
}
.user-notifications {
  position: relative;
}
.notifications {
  position: absolute;
  z-index: 10;
  bottom: -1em;
  right: -3em;
  width: 350px;
  max-width: 90vw;
  padding: 1em 2em;
  transform: translate3d(0, 100%, 0);
  font-size: 14px;
  @include respond-to(small) {
    right: 0;
  }

  border-radius: 10px;
  background-color: $color-primary;
  background-image: linear-gradient(32deg, #f3c111 0%, #ee0727 100%);
  color: white;
}
.notification {
  padding: 1em 0;

  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:not(:last-child) {
    margin-bottom: 0.5em;
    border-bottom: 1px solid white;
  }
}
.notification-message {
  margin-bottom: 1em;
  font-size: 1.1em;
}
.notification-date {
  text-align: right;
}
</style>
