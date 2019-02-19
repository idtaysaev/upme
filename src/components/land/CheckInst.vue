<template>
  <section class="home-check-inst">
    <upme-container>
      <h2 class="home-check-inst-title">
        Проверь свой Instagram
      </h2>
      <p class="check-inst-hint">
        Введи ниже ссылку на свой аккаунт
      </p>
      <form
        class="check-inst-form"
        @submit.prevent="checkInst()">
        <div class="form-block check-inst-input-container">
          <input
            v-model="nickname"
            :disabled="statsShown"
            class="check-inst-input"
            type="text"
            placeholder="Instagram nickname"
            required>
        </div>
        <div class="form-block">
          <button-loading
            :loading="checking"
            :completed="statsShown"
            label="Проверить"
            class="check-inst-btn"/>
        </div>
      </form>
      <!-- <p class="check-inst-input-container">
        <input
          v-model="nickname"
          :disabled="statsShown"
          class="check-inst-input"
          type="text"
          placeholder="Instagram nickname">
      </p>
      <p class="check-inst-btn-container check-inst-btn-check-container">
        <button
          :disabled="statsShown"
          class="btn check-inst-btn"
          type="button"
          @click="checkInst()">Проверить</button>
      </p> -->
      <p
        v-if="message"
        class="check-inst-message">
        {{ message }}
      </p>
    </upme-container>
    <transition name="check-inst">
      <div
        v-if="statsShown"
        class="check-inst-result">
        <upme-container>
          <div class="check-inst-result-top">
            <p class="check-inst-url-container">
              <a
                :href="'https://instagram.com/'+nickname"
                class="btn check-inst-url">
                @{{ nickname }}
              </a>
            </p>
            <p class="check-inst-result-involvement">
              <span class="involvement-hint">Вовлечённость</span> (ER) {{ stats.ER.toFixed(1) }}%
            </p>
          </div>
          <div class="check-inst-stats">
            <div class="check-inst-stats-layout">
              <div class="check-inst-stats-subscribers">
                <div class="img-container">
                  <img
                    src="@/assets/icons/land/stats-sub.svg"
                    alt="">
                </div>
                <p>
                  {{ stats.totalFollowers }}
                </p>
              </div>
              <div class="check-inst-stats-average">
                <p class="check-inst-stats-averate-title">
                  Средняя статистика на пост:
                </p>
                <div class="check-inst-stats-average-layout">
                  <div class="check-inst-stats-likes">
                    <div class="img-container">
                      <img
                        src="@/assets/icons/land/stats-likes.svg"
                        alt="">
                    </div>
                    <p>
                      {{ stats.averageLikes }}
                    </p>
                  </div>
                  <div class="check-inst-stats-comments">
                    <div class="img-container">
                      <img
                        src="@/assets/icons/land/stats-com.svg"
                        alt="">
                    </div>
                    <p>
                      {{ stats.averageComments }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </upme-container>
        <div class="check-inst-result-hint">
          <p>
            {{ stats.message }}
          </p>
        </div>
        <upme-container>
          <div class="check-inst-result-bottom">
            <!-- <p class="check-inst-fix">
              Исправь это
            </p> -->
            <p class="check-inst-btn-container">
              <a
                class="btn check-inst-btn"
                href="#registration">Стать популярнее</a>
            </p>
          </div>
        </upme-container>
      </div>
    </transition>
    <div class="decor">
      <div class="decor-item decor-item-circle decor-item-1"/>
      <div class="decor-item decor-item-circle decor-item-2"/>
      <div
        :class="{ 'decor-fix': statsShown }"
        class="decor-item decor-item-circle decor-item-3"/>
    </div>
  </section>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
import ButtonLoading from '@/components/elements/ButtonLoading.vue'
// import { api } from '@/plugins/http-api'

export default {
  components: {
    UpmeContainer,
    ButtonLoading
  },
  data () {
    return {
      statsShown: false,
      nickname: '',
      stats: {
        totalFollowers: 1500,
        averageLikes: 500,
        averageComments: 3,
        ER: 3,
        avatar: '',
        message: 'Ваш Instagram интересен только самым близким'
      },
      checking: false,
      message: ''
    }
  },
  methods: {
    checkInst () {
      this.checking = true
      this.message = ''

      if (this.nickname) {
        if (this.nickname.includes('@')) {
          this.nickname = this.nickname.replace('@', '')
        }

        if (this.nickname.includes('instagram.com')) {
          this.nickname = this.nickname.split('instagram.com/')[1].replace('/', '')
        }

        if (this.nickname.includes('http')) {
          this.message = 'Неверный формат'
        }

        // let params = {
        //   nickname: this.nickname
        // }

        // api.get('home', { params })
        //   .then(response => {
        //     console.log(response)
        //     const code = response.data.code
        //     switch (code) {
        //       case 100:
        //         Object.assign(this.stats, response.data.data)
        //         this.statsShown = true
        //         break
        //       case 103:
        //         this.message = 'Пользователь не найден'
        //         break
        //       case 104:
        //         this.message = 'Аккаунт является приватным'
        //         break
        //       default:
        //         this.message = 'Пользователь не найден или аккаунт закрыт'
        //         break
        //     }
        //     this.checking = false
        //   })
        setTimeout(() => {
          this.checking = false
          this.message = 'Недоступно в демонстрационной версии'
        }, 1000)
      } else {
        this.message = 'Введите nickname'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-check-inst {
  padding: 2em 0;
  @include respond-to(large) {
    padding-bottom: 10em;
  }
}
.home-check-inst-title {
  color: #484848;
  font-size: 30px;
  text-align: center;
  margin-bottom: 0.4em;
  @include respond-to(x-small) {
    font-size: 44px;
  }
  @include respond-to(medium) {
    text-align: left;
  }
}
.check-inst-hint {
  position: relative;
  display: inline-block;
  max-width: 98%;
  padding: 0.5em 1em 0.4em 0;
  border-top-right-radius: 38px;
  border-bottom-right-radius: 38px;
  background-color: transparent;
  background-image: linear-gradient(to right, #F1641C 0%, #ee0727 100%);
  color: white;
  font-size: 23px;
  margin-bottom: 1em;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    left: -200%;
    right: 100%;
    background-image: linear-gradient(to right, #f3c111 0%, #F1641C 100%);
  }
  @include respond-to(x-small) {
    padding-right: 2em;
  }
}
.form-block.check-inst-input-container {
  text-align: center;
  margin-bottom: 2em;
  @include respond-to(medium) {
    text-align: left;
  }
}
.check-inst-input {
  box-shadow: none;
  border-bottom: 2px solid $color-primary;
  color: $color-text;
  border-radius: 0;
  max-width: 400px;
  font-size: 27px;
  padding: 0 0 0.2em;
  background-color: transparent;
}
.check-inst-btn-container {
  text-align: center;
}
.check-inst-btn-check-container {
  @include respond-to(medium) {
    text-align: left;
  }
}
.check-inst-btn {
  font-size: 26px;
  padding: 0.4em 2em;
}
.check-inst-message {
  text-align: center;
  margin-top: 1em;
  @include respond-to(medium) {
    text-align: left;
  }
}
.check-inst-result {
  margin-top: 4em;
  position: relative;
}
.check-inst-result-top {
  @include respond-to(large) {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    .check-inst-url-container {
      margin-bottom: 0;
      margin-right: 1.6em;
    }
    .check-inst-result-involvement {
      margin-bottom: 0;
    }
  }
}
.check-inst-url-container {
  text-align: center;
  margin-bottom: 1em;
}
.check-inst-url {
  font-size: 26px;
  color: #535353;
  background: transparent;
  border: 2px solid $color-primary;
  box-shadow: none;
  padding: 0.4em 2em;

  &:hover,
  &:focus {
    opacity: 0.6;
    box-shadow: none;
  }
}
.check-inst-result-involvement {
  text-align: center;
  font-size: 22px;
  color: #535353;
  font-weight: 700;
  margin-bottom: 0.6em;
  @include respond-to(x-small) {
    font-size: 35px;
  }
}
.involvement-hint {
  border-bottom: 1px solid;
}
.check-inst-result-hint {
  background-color: $color-primary;
  background-image: linear-gradient(-257deg, #c42037 0%, #ff030f 100%);
  color: white;
  padding: 1em;
  text-align: center;
  font-size: 26px;
  margin: 0.6em 0;
  @include respond-to(small) {
    font-size: 40px;
  }
  @include respond-to(large) {
    background: none;
    color: inherit;
    max-width: 1080px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    text-align: left;
  }
}
.check-inst-fix {
  position: relative;
  text-align: center;
  font-size: 27px;
  color: #3f3f3f;
  margin-bottom: 0.6em;
  padding-bottom: 2em;

  &::after {
    content: ">";
    position: absolute;
    right: 50%;
    bottom: 0;
    transform: translate3d(50%, 0, 0) scaleX(2) rotate(90deg);
    font-size: 40px;
    font-weight: 100;
    animation: check-bounce 2s infinite alternate ease-in-out;
  }
}
.check-inst-result-bottom {
  @include respond-to(large) {
    display: flex;
    align-items: center;

    .check-inst-fix {
      padding-bottom: 0;
      padding-right: 2em;
      margin-bottom: 0;
      margin-right: 1em;

      &::after {
        right: 0;
        bottom: 50%;
        transform: translate3d(0, 50%, 0) scaleY(2);
        animation: none;
      }
    }
  }
}
.check-inst-stats {
  font-size: 28px;
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
  color: #535353;
  @include respond-to(x-small) {
    font-size: 39px;
  }
  @include respond-to(large) {
    margin: 0;
    max-width: 800px;
  }
}
.check-inst-stats-layout {
  @include respond-to(x-small) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .img-container {
    margin-bottom: 0.2em;
  }
}
.check-inst-stats-subscribers {
  padding: 0 1em;
  @include respond-to(x-small) {
    padding-bottom: 1em;
  }
  @include respond-to(large) {
    padding: 0 2em 1em 0;
  }
}
.check-inst-stats-likes {
  padding: 0 1em;
  @include respond-to(x-small) {
    padding: 0 0.2em;
  }
  @include respond-to(small) {
    padding: 0 1em;
  }
  @include respond-to(large) {
    padding: 0 2.3em;
  }
}
.check-inst-stats-comments {
  padding: 0 1em;
  @include respond-to(x-small) {
    padding: 0 0.2em;
  }
  @include respond-to(small) {
    padding: 0 1em;
  }
  @include respond-to(large) {
    padding: 0 2.3em;
  }
}
.check-inst-stats-average {
  @include respond-to(x-small) {
    padding: 0 0.6em 1em;
    border-left: 1px solid $color-primary;
  }
}
.check-inst-stats-averate-title {
  font-size: 27px;
  margin-bottom: 0.4em;
}
.check-inst-stats-average-layout {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @include respond-to(x-small) {
    justify-content: space-between;
  }
}
.decor-item-1 {
  bottom: 5%;
  right: -2%;
  width: 193px;
  height: 190px;
  background-image: linear-gradient(45deg, #c42037 0%, #ff030f 100%);
  box-shadow:
    -2em 2em 8em 1em rgba(#f3c111, 0.5),
    -2em -2em 8em 1em rgba($color-primary, 0.5);
}
.decor-item-2 {
  top: 40%;
  left: -11%;
  width: 255px;
  height: 250px;
  background-image: linear-gradient(45deg, #c42037 0%, #ff030f 100%);
  box-shadow:
    2em 2em 8em 1em rgba(#f3c111, 0.5),
    2em -2em 8em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    left: -5%;
  }
}
.decor-item-3 {
  top: 21%;
  right: 13%;
  width: 248px;
  height: 244px;
  background-image: linear-gradient(45deg, #f3c111 0%, #ee0727 100%);
  transition: right 1s ease-in;
  box-shadow:
    0 2em 6em 1em rgba(#f3c111, 0.6),
    2em -2em 8em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    top: 25%;
    right: 10%;
  }
  &.decor-fix {
    right: 5%;
  }
}
</style>
