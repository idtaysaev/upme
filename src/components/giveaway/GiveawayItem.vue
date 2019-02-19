<template>
  <div class="giveaway-item">
    <h2 class="giveaway-title">
      {{ giveaway.title }}
    </h2>
    <div class="giveaway-images">
      <div class="img-container">
        <img
          :src="giveaway.image"
          alt="">
      </div>
    </div>
    <carousel
      :navigation-enabled="true"
      :pagination-enabled="false"
      :per-page="1"
      navigation-prev-label="<"
      navigation-next-label=">"
      class="giveaway-stats-carousel">
      <slide>
        <section class="giveaway-stats">
          <h3 class="giveaway-stats-title">Статистика аккаунта</h3>
          <div class="giveawat-stats-list-container">
            <ul class="giveaway-stats-list">
              <li
                v-for="(statsMetaItem, i) in giveaway.params"
                :key="i"
                :class="'giveaway-stats-item-'+statsMetaItem.class"
                class="giveaway-stats-item">
                <p class="giveaway-stats-item-description">
                  <strong class="giveaway-stats-item-value">
                    {{ statsMetaItem.title }}
                  </strong>
                  <br>
                  {{ statsMetaItem.text }}
                </p>
              </li>
            </ul>
          </div>
        </section>
      </slide>
      <!-- <slide>
        <section class="giveaway-stats">
          <h3 class="giveaway-stats-title">Список блогеров</h3>
          <div class="giveawat-stats-list-container">
            <ul class="giveaway-stats-blogers">
              <li
                v-for="(bloger, i) in giveaway.blogers"
                :key="i"
                class="giveaway-stats-bloger">
                <div class="giveawat-stats-bloger-layout">
                  <a
                    :href="'https://instagram.com/'+bloger.username"
                    class="img-container bloger-avatar-link"
                    target="_blank">
                    <img
                      :src="bloger.avatar"
                      class="bloger-avatar"
                      alt="">
                  </a>
                  <div>
                    <h4 class="bloger-title">
                      {{ bloger.name }} {{ bloger.surname }}
                    </h4>
                    <p>
                      Аудитория {{ bloger.followers }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </slide> -->
    </carousel>
    <hr class="giveaway-hr">
    <div class="giveaway-info">
      <p class="giveaway-info-subscribers-growth">
        Рост Подписчиков
        <br>
        <strong class="giveaway-info-value">
          {{ giveaway.followers }}
        </strong>
      </p>
      <p class="giveaway-info-date">
        Начало Giveaway:
        <br>
        <strong class="giveaway-info-value">
          {{ giveawayDate }}
        </strong>
      </p>
    </div>
    <div class="giveaway-bottom">
      <strong class="giveaway-price">Стоимость: {{ giveaway.price }} &#x20bd;</strong>
      <a
        v-if="giveaway.type === 3"
        class="giveaway-btn-submit"
        @click.prevent="submit">{{ types[giveaway.type] }}</a>
      <p
        v-else-if="giveaway.type === 2"
        class="giveaway-type">
        {{ types[giveaway.type] }}
      </p>
      <p
        v-else-if="giveaway.type === 1"
        class="giveaway-type">
        {{ types[giveaway.type] }}
      </p>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    giveaway: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      types: [
        'Участие',
        'Закрыто',
        'Вы уже участвуете',
        'Участие'
      ],
      statsShowing: false
    }
  },
  computed: {
    giveawayDate () {
      // return new Date(this.giveaway.date_start).toISOString().split('T')[0]
      const date = new Date(this.giveaway.date_start)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      day = day < 10 ? ('0' + day) : day
      return `${year}.${month}.${day}`
    }
  },
  methods: {
    submit () {
      const payment = {
        action: 'Участие в Giveaway',
        descriptions: [
          `Участие в ${this.giveaway.title}`
        ],
        price: this.giveaway.price,
        url: 'profile/giveaways',
        fields: {
          id: this.giveaway.id
        }
      }
      this.$store.dispatch('payment/setPayment', payment)
      this.$router.push('/profile/payment')
    }
  }
}
</script>

<style lang="scss" scoped>
.giveaway-item {
  border-radius: 10px;
  background-color: $color-primary;
  background-image: linear-gradient(41deg, #c42037 0%, #ff030f 100%);
  color: white;
  padding: 1em;
  @include respond-to(xx-small) {
    padding: 2em;
  }
  @include respond-to(small) {
    width: 400px;
    max-width: 100%;
  }
  @include respond-to(medium) {
    padding: 1em;
  }
  @include respond-to(large) {
    padding: 2em;
  }
}
.giveaway-title {
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  margin-bottom: 0.8em;
  @include respond-to(xs-small) {
    font-size: 29px;
  }
  @include respond-to(small) {
    font-size: 24px;
  }
}
.giveaway-images {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;

  max-width: 350px;
  margin: 0 auto 1.6em;
}
.giveaway-images-item {
  width: 30%;
  position: relative;

  &:nth-child(1) {
    transform: translate3d(10%, 0, 0);
  }

  &:nth-child(2) {
    z-index: 1;
    transform: scale(1.4);
  }

  &:nth-child(3) {
    transform: translate3d(-10%, 0, 0);
  }
}
.giveaway-image {
  border-radius: 50%;
  box-shadow: -5px 15px 60px rgba(0, 0, 0, 0.49);
}
.giveaway-nickname {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.2em;
  @include respond-to(xs-small) {
    font-size: 29px;
  }
  @include respond-to(small) {
    font-size: 20px;
  }
}
.giveaway-nickname-link {
  &:hover {
    opacity: 0.7;
  }
}
.giveaway-stats-carousel {
  position: relative;
  z-index: 1;

  /deep/ .VueCarousel-navigation-button {
    top: 5%;
    color: white;
    transform: translate3d(0, -50%, 0) scaleY(1.8);
    line-height: 1;
    font: inherit;
    font-size: 30px;
  }
}
.giveaway-stats-title {
  position: relative;
  z-index: 1;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.6em;
  @include respond-to(xs-small) {
    font-size: 20px;
  }
  @include respond-to(small) {
    font-size: 17px;
  }
}
.giveaway-stats-list {
  display: flex;
  flex-wrap: wrap;
  @include respond-to(xs-small) {
    padding: 0 8%;
  }
  @include respond-to(small) {
    padding: 0;
  }
}
.giveaway-stats-item {
  width: 50%;
  width: calc(50% - 0.6em);
  display: flex;
  margin-bottom: 0.4em;

  &:nth-last-child(1),
  &:nth-last-child(2) {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 37.5px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex-shrink: 0;
    margin-right: 0.4em;
    @include respond-to(x-small) {
      width: 40px;
      height: 50px;
      margin-right: 0.6em;
    }
    @include respond-to(medium) {
      width: 30px;
      height: 37.5px;
    }
    @include respond-to(large) {
      width: 40px;
      height: 50px;
    }
  }

  &-followers {
    &::before {
      background-image: url("../../assets/icons/giveaway/subscribers.svg")
    }
  }
  &-likes {
    &::before {
      background-image: url("../../assets/icons/giveaway/likes.svg")
    }
  }
  &-comments {
    &::before {
      background-image: url("../../assets/icons/giveaway/comments.svg")
    }
  }
  &-location {
    &::before {
      background-image: url("../../assets/icons/giveaway/location.svg")
    }
  }
  &-age {
    &::before {
      background-image: url("../../assets/icons/giveaway/age.svg")
    }
  }
  &-sex {
    &::before {
      background-image: url("../../assets/icons/giveaway/sex.svg")
    }
  }
}
.giveaway-stats-item-value {
  font-size: 18px;
  font-weight: 700;
  @include respond-to(xs-small) {
    font-size: 24px;
  }
  @include respond-to(small) {
    font-size: 18px;
  }
}
.giveaway-stats-item-description {
  font-size: 13px;
  @include respond-to(xs-small) {
    font-size: 17px;
  }
  @include respond-to(small) {
    font-size: 13px;
  }
}
.giveaway-stats-bottom {
  text-align: center;
}
.giveaway-stats-toggle {
  position: relative;
  background: transparent;
  transition: all 0.3s;
  padding: 4px;
  width: 28px;
  height: 28px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 12px;
    height: 2px;
    background-color: white;
    top: 46%;
  }

  &::before {
    left: 4px;
    transform: rotate(45deg);
  }

  &::after {
    right: 4px;
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 0.6;
  }

  &.giveaway-stats-toggle-rotate {
    transform: rotate(180deg);
  }
}
.giveaway-hr {
  width: 100%;
  margin: 1em auto;
  height: 1px;
  background: white;
}
.giveaway-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6em;
  @include respond-to(xs-small) {
    font-size: 27px;
  }
  @include respond-to(small) {
    font-size: 17px;
  }
}
.giveaway-info-value {
  @include respond-to(xs-small) {
    font-size: 29px;
  }
  @include respond-to(small) {
    font-size: 19px;
  }
}
.giveaway-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.giveaway-price {
  @include respond-to(xs-small) {
    font-size: 29px;
  }
  @include respond-to(small) {
    font-size: 19px;
  }
}
.giveaway-btn-submit {
  border-radius: 1em;
  background-color: white;
  color: $color-primary;
  padding: 0.4em 2em;
  font-size: 16px;
  box-shadow: 0 0 0.6em white;

  @include respond-to(xs-small) {
    font-size: 29px;
  }
  @include respond-to(small) {
    font-size: 17px;
  }

  &:hover {
    opacity: 0.6;
  }
}
.bloger-avatar {
  border-radius: 50%;
  width: 63px;
  height: 63px;
  box-shadow: -2px 2px 20px rgba(0, 0, 0, 0.49);
  @include respond-to(xs-small) {
    width: 90px;
    height: 90px;
  }
  @include respond-to(small) {
    width: 63px;
    height: 63px;
  }
}
.giveaway-stats-blogers {
  max-height: 200px;
  overflow: auto;
  padding: 0.2em 0;
}
.giveaway-stats-bloger {
  margin-bottom: 2em;
  &:last-child {
    margin-bottom: 0;
  }
}
.giveawat-stats-bloger-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bloger-avatar-link {
  margin-right: 1em;
  flex-shrink: 0;

  @include respond-to(x-small) {
    margin-right: 2em;
  }
  @include respond-to(medium) {
    margin-right: 1em;
  }
  @include respond-to(large) {
    margin-right: 2em;
  }

  &:hover {
    opacity: 0.6;
  }
}
.bloger-title {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0.2em;
  @include respond-to(x-small) {
    font-size: 18px;
  }
  @include respond-to(xs-small) {
    font-size: 24px;
  }
  @include respond-to(small) {
    font-size: 18px;
  }
  @include respond-to(medium) {
    font-size: 14px;
  }
  @include respond-to(large) {
    font-size: 18px;
  }
}
.giveaway-type {
  @include respond-to(xs-small) {
    font-size: 29px;
  }
  @include respond-to(small) {
    font-size: 17px;
  }
}
</style>
