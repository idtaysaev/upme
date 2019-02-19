<template>
  <div class="content-design">
    <h2 class="content-design-title">
      {{ title }}
    </h2>
    <carousel>
      <slide>
        <img
          src="#"
          alt="">
      </slide>
    </carousel>
    <div class="content-design-layout">
      <template v-for="(designItem, i) in design">
        <div
          :key="designItem.title"
          class="content-design-item">
          <div class="img-container content-design-item-image">
            <img
              :src="designItem.img"
              alt="">
          </div>
          <h3 class="content-design-item-title">
            {{ designItem.title }}
          </h3>
        </div>
        <div
          v-if="i < design.length - 1"
          :key="i"
          class="content-design-item content-design-item-plus">
          <span class="content-design-plus">+</span>
        </div>
      </template>
    </div>
    <div class="content-design-bottom">
      <div class="content-design-bottom-layout">
        <h2 class="content-design-bottom-title">
          Стоимость: {{ price }} &#x20bd;
        </h2>
        <a
          class="content-design-link"
          @click.prevent="submit">Купить</a>
      </div>
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
  data () {
    return {
      title: 'Встречают по одежке',
      design: [
        {
          img: '',
          title: 'Аватар'
        },
        {
          img: '',
          title: 'Оформление шапки'
        },
        {
          img: '',
          title: 'Актуальное'
        }
      ],
      price: 1000
    }
  },
  methods: {
    submit () {
      // TODO: continue
      const payment = {
        action: 'Покупка услуги "Оформление профиля"',
        descriptions: [
          // `Участие в ${this.giveaway.title}`
        ],
        price: this.price,
        url: 'profile/content',
        fields: {
          // id: this.giveaway.id
        }
      }
      this.$store.dispatch('payment/setPayment', payment)
      this.$router.push('/profile/payment')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-design-title {
  font-size: 21px;
  // margin-bottom: 1em;
  @include respond-to(small) {
    font-size: 29px;
  }
}
.content-design-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 2em;

  @include respond-to(large) {
    padding: 0 4em;
  }
}
// .content-design-item {
// }
.content-design-item-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: $color-primary;
  background-image: linear-gradient(48deg, #c42037 0%, #ff030f 100%);
  color: white;
  margin: 0 auto 1em;

  @include respond-to(x-small) {
    width: 100px;
    height: 100px;
  }

  @include respond-to(small) {
    width: 130px;
    height: 130px;
  }

  @include respond-to(medium) {
    width: 178px;
    height: 178px;
  }
}
.content-design-item-title {
  font-size: inherit;
  font-weight: normal;

  @include respond-to(small) {
    font-size: 21px;
  }
}
.content-design-item-plus {
  font-size: 51px;
  padding-bottom: 1em;
}
.content-design-bottom {
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 2em;
  padding: 2em 4em;
  box-shadow: 0 0 60px rgba($color-primary, 0.6);
}
.content-design-bottom-layout {
  text-align: center;
  @include respond-to(small) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .content-design-bottom-title {
      margin-bottom: 0;
    }
  }
}
.content-design-bottom-title {
  font-size: 1.6em;
  margin-bottom: 0.4em;
}
.content-design-link {
  display: inline-block;
  cursor: pointer;
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
</style>
