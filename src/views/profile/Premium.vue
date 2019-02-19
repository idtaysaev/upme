<template>
  <upme-page class="page-payment">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="premium">
      <div class="premium-buy">
        <h2 class="premium-buy-title">
          Премиум UpMe
        </h2>
        <carousel
          :per-page="1"
          :navigation-enabled="true"
          :pagination-enabled="false"
          navigation-prev-label=""
          navigation-next-label=""
          class="premium-buy-description-carousel">
          <slide
            v-for="advantage in advantages"
            :key="advantage.text">
            <div class="premium-buy-description">
              <div class="img-container">
                <img
                  :src="advantage.img"
                  alt="">
              </div>
              <p class="premium-buy-description-text">
                {{ advantage.text }}
              </p>
            </div>
          </slide>
        </carousel>
        <div v-if="isPremium">
          <p>
            Премиум активирован
          </p>
          <p>
            Действителен до: {{ premiumEnds }}
          </p>
        </div>
        <base-form
          v-else
          :action="submit"
          class="transparent-form">
          <div class="premium-form-layout">
            <div
              v-for="(plan, i) in plans"
              :key="plan.title"
              class="form-block form-block-radio">
              <input
                :id="'premium-'+i"
                :checked="i === 0"
                :value="i"
                v-model="selected"
                type="radio"
                name="premium">
              <label :for="'premium-'+i">
                <h3 class="premium-title">
                  {{ plan.title }}
                </h3>
                <p class="premium-price">
                  {{ plan.price }} &#x20bd;
                </p>
                <s
                  v-if="plan.oldPrice"
                  class="premium-price-prev">
                  {{ plan.oldPrice }} &#x20bd;
                </s>
              </label>
            </div>
          </div>
          <div class="form-block form-block-submit">
            <button type="submit">Купить</button>
          </div>
        </base-form>
      </div>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import BaseForm from '@/components/forms/BaseForm.vue'
import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    UpmePage,
    BaseForm,
    Carousel,
    Slide
  },
  data () {
    return {
      title: 'Премиум',
      selected: 0,
      advantages: [
        {
          img: require('@/assets/icons/premium/cam.svg'),
          text: 'Доступ к эксклюзивным разделам'
        },
        {
          img: require('@/assets/icons/premium/content.svg'),
          text: 'Скидка на раздел Контент'
        },
        {
          img: require('@/assets/icons/premium/giveaway.svg'),
          text: 'Скидка на раздел Giveaway'
        },
        {
          img: require('@/assets/icons/premium/promotion.svg'),
          text: 'Скидка на раздел Продвижение'
        },
        {
          img: require('@/assets/icons/premium/wheel-me.svg'),
          text: 'Скидка на раздел Wheel Me'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('premium', [
      'plans',
      'isPremium',
      'premiumEnds'
    ])
  },
  methods: {
    submit () {
      const payment = {
        action: 'Покупка премиум',
        descriptions: [
          `Покупка премиум на ${this.plans[this.selected].title}`
        ],
        price: this.plans[this.selected].price,
        url: 'profile/premium',
        fields: {
          price: this.plans[this.selected].price,
          id: this.selected + 1
        }
      }
      this.$store.dispatch('payment/setPayment', payment)
      this.$router.push('/profile/payment')
    }
  }
}
</script>

<style lang="scss" scoped>
.premium-buy {
  background-color: $color-primary;
  background-image: linear-gradient(20deg, #c42037 0%, #ff030f 100%);
  color: white;
  padding: 2em;
  text-align: center;
  border-radius: 10px;
}
.premium-buy-title {
  font-size: 29px;
  margin-bottom: 0.6em;
}
.premium-buy-description-carousel {
  max-width: 595px;
  margin: 0 auto 1em;

  /deep/ .VueCarousel-navigation-button {
    height: 40px;
    width: 40px;
  }
  /deep/ .VueCarousel-navigation-button::before {
    content: "";
    position: absolute;
    top: 0;
    height: 40px;
    width: 40px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  /deep/ .VueCarousel-navigation-next::before {
    background-image: url('../../assets/icons/next.svg');
    right: 6px;
  }

  /deep/ .VueCarousel-navigation-prev::before {
    background-image: url('../../assets/icons/prev.svg');
    left: 6px;
  }
}
.premium-buy-description {
  padding: 0 2em;
  .img-container {
    margin-bottom: 1em;
  }
  @include respond-to(x-small) {
    font-size: 21px;
  }
  @include respond-to(small) {
    display: flex;
    align-items: center;
    justify-content: center;
    .img-container {
      margin-bottom: 0;
    }
  }
}
.premium-buy-description-text {
  margin-left: 1em;
}
.premium-form-layout {
  @include respond-to(small) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .form-block-radio {
      width: 45%;
      width: calc(50% - 0.5em);
      &:nth-last-child(1),
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }
  @include respond-to(large) {
    .form-block-radio {
      width: 25%;
      width: calc(25% - 4em / 3);
      margin-bottom: 0;
    }
  }
}
.premium-title {
  color: $color-primary;
  font-size: 24px;
  margin-bottom: 1em;
}
.premium-price {
  font-weight: bold;
  font-size: 33px;
  margin-bottom: 0.1em;
}
.premium-price-prev {
  font-size: 24px;
  text-decoration-color: $color-primary;
}
</style>
