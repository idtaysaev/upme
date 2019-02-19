<template>
  <upme-page class="page-payment">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="payment">
      <div class="payment-layout">
        <div class="payment-info">
          <h2 class="payment-action">
            {{ action }}
          </h2>
          <ul class="payment-descriptions">
            <li
              v-for="description in descriptions"
              :key="description"
              class="payment-description">
              {{ description }}
            </li>
          </ul>
          <p class="payment-price">
            Общая цена: <span class="payment-price-value">{{ price }} &#x20bd;</span>
          </p>
        </div>
        <div class="payment-message">
          <div v-if="missing">
            <p class="payment-message-error">
              На Вашем депозите не хватает {{ missingValue }} &#x20bd;<br>
              Пожалуйста, пополните Ваш депозит:
            </p>
            <p>
              <router-link
                :to="'/profile/wallet/replenishment/'+missingValue"
                class="btn btn-payment">Пополнить</router-link>
            </p>
          </div>
          <p v-else>
            <a
              class="btn btn-payment"
              @click="submit">Оплатить</a>
          </p>
        </div>
      </div>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import { mapState, mapGetters } from 'vuex'
// import { api } from '@/plugins/http-api'

export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Оплата'
    }
  },
  computed: {
    ...mapState('payment', [
      'price',
      'action',
      'descriptions',
      'url',
      'fields'
    ]),
    ...mapGetters('payment', [
      'missing',
      'missingValue'
    ])
  },
  created () {
    if (!this.action) {
      this.$router.replace('/profile/wallet')
    }
  },
  methods: {
    async submit () {
      // await api.post(this.url, this.fields)
      //   .then(async response => {
      //     console.log(response)
      //     await this.$store.dispatch('user/init')
      //     await this.$router.push('/profile/wallet/success')
      //     this.$store.dispatch('payment/setInitialPayment')
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     this.$router.push('/profile/wallet/error')
      //   })
      await this.$store.dispatch('user/init')
      await this.$router.push('/profile/wallet/success')
      this.$store.dispatch('payment/setInitialPayment')
    }
  }
}
</script>

<style lang="scss" scoped>
.payment {
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  border-radius: 10px;
  padding: 2em;
  box-shadow: 0 0 60px rgba($color-primary, 0.6);

  @include respond-to(small) {
    padding: 3em 4em;
  }
}
.payment-layout {
  @include respond-to(large) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .payment-info {
      margin-bottom: 0;
    }
  }
}
.payment-info {
  margin-bottom: 1em;
}
.payment-action {
  margin-bottom: 0.2em;
  font-size: 20px;
  @include respond-to(small) {
    font-size: 30px;
  }
}
.payment-descriptions {
  font-size: 20px;
}
.payment-price {
  font-size: 20px;
}
.payment-price-value {
  font-weight: bold;
}
.btn-payment {
  box-shadow: 0 8px 46px rgba(0, 0, 0, 0.46);
  background: white;
  color: $color-primary;
  border-radius: 10px;
  padding: 0.6em 1em;
  font-size: 26px;

  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.46);
  }
}
.payment-message {
  font-size: 20px;
  text-align: right;
  margin-left: 1em;
}
.payment-message-error {
  margin-bottom: 1em;
}
</style>
