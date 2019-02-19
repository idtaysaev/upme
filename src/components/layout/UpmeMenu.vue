<template>
  <div class="upme-menu-container">
    <transition name="fade">
      <div
        v-show="active"
        class="upme-menu-overlay"
        @click="closeMenu()"/>
    </transition>
    <div
      :class="{ active: active }"
      class="upme-menu">
      <upme-container>
        <div class="upme-menu-top">
          <upme-logo url="/profile"/>
        </div>
        <nav>
          <ul
            v-for="(linksGroup, i) in linksFiltered"
            :key="i"
            class="upme-menu-links-group">
            <li
              v-for="link in linksGroup"
              :key="link.url">
              <router-link
                :to="link.url"
                :class="link.class"
                :exact="link.exact"
                class="upme-menu-link"
                @click.native="closeMenu()">
                <div class="img-container">
                  <img
                    :src="link.img"
                    :alt="link.title">
                </div>
                <p>
                  {{ link.title }}
                </p>
              </router-link>
            </li>
          </ul>
        </nav>
      </upme-container>
    </div>
  </div>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
import UpmeLogo from '@/components/elements/UpmeLogo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    UpmeContainer,
    UpmeLogo
  },
  data () {
    return {
      links: [
        [
          {
            title: 'Профиль',
            url: '/profile',
            img: require('@/assets/icons/menu/home.svg'),
            show: true,
            exact: true
          }
        ],
        [
          {
            title: 'Биржа активности',
            url: '/profile/activity',
            img: require('@/assets/icons/menu/exchange.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Продвижение',
            url: '/profile/promotion',
            img: require('@/assets/icons/menu/heart.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Giveaway',
            url: '/profile/giveaway',
            img: require('@/assets/icons/menu/gift.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Контент',
            url: '/profile/content',
            img: require('@/assets/icons/menu/content.svg'),
            show: true,
            exact: false
          },
          {
            title: 'WheelMe',
            url: '/profile/wheel-me',
            img: require('@/assets/icons/menu/wheel.svg'),
            show: true,
            exact: false
          }
        ],
        [
          {
            title: 'Кошелек',
            url: '/profile/wallet',
            img: require('@/assets/icons/menu/wallet.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Задания',
            url: '/profile/tasks',
            img: require('@/assets/icons/menu/check.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Рейтинг',
            url: '/profile/rating',
            img: require('@/assets/icons/menu/star.svg'),
            show: true,
            exact: false
          }
        ],
        [
          {
            title: 'Как пользоваться?',
            url: '/profile/how-to-use',
            img: require('@/assets/icons/menu/question.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Контакты',
            url: '/profile/contacts',
            img: require('@/assets/icons/menu/contacts.svg'),
            show: true,
            exact: false
          },
          {
            title: 'Реферальная система',
            url: '/profile/wallet/referal',
            img: require('@/assets/icons/menu/share.svg'),
            show: this.$store.getters['user/isBloger'],
            exact: false
          }
        ]
      ]
    }
  },
  computed: {
    ...mapState('menu', [
      'active'
    ]),
    linksFiltered () {
      return this.links.map(linksGroup => linksGroup.filter(link => link.show))
    }
  },
  methods: {
    closeMenu () {
      if (this.active) {
        this.$store.dispatch('menu/close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upme-menu {
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.2s ease-in-out;
  background-color: white;
  padding-bottom: 5em;

  &.active {
    transform: translate3d(0, 0, 0);
  }

  @include respond-to(medium) {
    transform: none;
    position: static;
    padding-bottom: 0;
  }
}
.upme-menu-overlay {
  position: fixed;
  z-index: 11;
  right: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  @include respond-to(medium) {
    display: none;
  }
}
.upme-menu-top {
  padding: 25px 0;
}
.upme-menu-links-group {
  &:not(:last-child) {
    border-bottom: 1px solid #d5d5d6;
  }
}
.upme-menu-link {
  padding: 1em;
  display: flex;
  align-items: center;
  .img-container {
    margin-right: 2em;
    img {
      width: 16px;
    }
  }
  &:hover,
  &.router-link-active {
    opacity: 0.6;
  }
}
</style>
