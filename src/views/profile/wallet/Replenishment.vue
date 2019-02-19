<template>
  <upme-page class="page-replenishment">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="replenishment-form-container">
      <base-form
        :class="{ disabled: readyToConfirm }"
        :action="submit"
        class="replenishment-form">
        <div class="form-block">
          <label for="input.name">
            Пополнить баланс
          </label>
          <div class="input-controller">
            <button
              v-for="(controller, i) in controllersReverse"
              :key="i*2"
              :disabled="(sum - controller) < minOrder"
              type="button"
              class="input-controller-number"
              @click="decrease(controller)">
              {{ controller }}
            </button>
            <button
              :disabled="(sum - 1) < minOrder"
              class="lg-only"
              type="button"
              @click="decrease(50)">
              &#8211;
            </button>
            <input
              id="replenishment"
              v-model.number="sum"
              name="replenishment"
              type="text"
              @change="normalize()">
            <button
              class="lg-only"
              type="button"
              @click="increase(50)">
              +
            </button>
            <button
              v-for="(controller, i) in controllers"
              :key="i*2-1"
              type="button"
              class="input-controller-number"
              @click="increase(controller)">
              {{ controller }}
            </button>
          </div>
        </div>
        <div class="form-block form-block-submit">
          <a href="//www.free-kassa.ru/"><img src="//www.free-kassa.ru/img/fk_btn/6.png"></a>
          <button
            :disabled="sum < minOrder"
            class="btn-replenishment"
            type="submit">Продолжить</button>
        </div>
      </base-form>
    </div>
    <transition name="fade">
      <div
        v-if="readyToConfirm"
        class="replenishment-submit">
        <base-form-action
          action="http://www.free-kassa.ru/merchant/cash.php"
          method="GET">
          <h2 class="replenishment-submit-title">
            Сумма платежа: {{ sum }} &#x20bd;
          </h2>
          <input
            v-for="(value, key) in fields"
            :key="key"
            :name="key"
            :value="value"
            type="hidden">
          <div class="form-block form-block-submit">
            <button type="submit">Оплатить</button>
          </div>
        </base-form-action>
      </div>
    </transition>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import BaseForm from '@/components/forms/BaseForm.vue'
import BaseFormAction from '@/components/forms/BaseFormAction.vue'
// import { api } from '@/plugins/http-api'
import { mapGetters } from 'vuex'

export default {
  components: {
    UpmePage,
    BaseForm,
    BaseFormAction
  },
  data () {
    return {
      title: 'Пополнение',
      sum: 500,
      controllers: [
        100,
        500,
        1000
      ],
      readyToConfirm: false,
      fields: {}
    }
  },
  computed: {
    controllersReverse () {
      return this.controllers.slice().reverse()
    },
    ...mapGetters('user', [
      'minOrder'
    ])
  },
  mounted () {
    let params = this.$route.params
    if (params) {
      this.sum = Number(params.price) >= this.minOrder ? Number(params.price) : this.minOrder
    }
  },
  methods: {
    decrease (number) {
      this.sum = this.sum - number > this.minOrder ? this.sum - number : this.minOrder
    },
    increase (number) {
      this.sum += number
    },
    normalize () {
      if (this.sum < this.minOrder || isNaN(this.sum)) this.sum = this.minOrder
    },
    async submit () {
      if (!this.readyToConfirm) {
        // let params = {
        //   amount: this.sum
        // }
        // await api.get('profile/payments', { params })
        //   .then(response => {
        //     this.readyToConfirm = true
        //     this.fields = response.data.data
        //     console.log('paymentCheck', response)
        //   })
        this.readyToConfirm = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.replenishment-form {
  position: relative;
  text-align: center;
  margin-bottom: 2em;
  box-shadow: 0 0 60px rgba($color-primary, 0.6);
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: white;
    transition: opacity 0.3s;
  }
  &.disabled {
    &::before {
      z-index: 1;
      opacity: 0.6;
    }
  }
  .form-block-submit {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-replenishment {
    margin-left: 1em;
  }
  .input-controller {
    @include respond-to(small, max) {
      font-size: 24px;
      input {
        width: 120px;
      }
    }
  }
  .input-controller-number {
    &:nth-child(1),
    &:nth-child(9) {
      @include respond-to(large, max) {
        display: none;
      }
    }
    &:nth-child(2),
    &:nth-child(8) {
      @include respond-to(x-small, max) {
        display: none;
      }
    }
  }
}
.replenishment-submit {
  text-align: center;
  box-shadow: 0 0 60px rgba($color-primary, 0.6);
  .form-block-submit {
    text-align: center;
    margin-top: 1em;
  }
}
.replenishment-submit-title {
  font-size: 29px;
}
</style>
