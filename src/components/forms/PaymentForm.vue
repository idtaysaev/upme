<template>
  <base-form
    :action="submit"
    class="payment-form">
    <div
      v-for="input in formInputs"
      :key="input.name"
      class="form-block">
      <label :for="input.name">
        {{ input.label }}
      </label>
      <div
        v-if="input.type === 'number'"
        class="input-controller">
        <button
          type="button"
          @click="decrease(input)">
          &#8211;
        </button>
        <input
          :id="input.name"
          :name="input.name"
          v-model.number="input.value"
          type="text"
          @change="normalize(input)">
        <button
          type="button"
          @click="increase(input)">
          +
        </button>
      </div>
      <div
        v-else-if="input.type === 'url'"
        class="url">
        <input
          v-model="input.value"
          :name="input.name"
          :id="input.name"
          type="url"
          placeholder="Ссылка">
      </div>
    </div>
    <div class="form-block form-block-submit">
      <p class="payment-price-container">
        Стоимость: <span class="payment-price">{{ price }} &#x20bd;</span>
      </p>
      <button type="submit">Подтвердить</button>
    </div>
  </base-form>
</template>

<script>
import BaseForm from './BaseForm'
export default {
  components: {
    BaseForm
  },
  props: {
    inputs: {
      required: true,
      type: Array,
      default: () => [
        {
          label: 'Сколько постов ты хочешь продвинуть?',
          description: 'Количество постов для продвижения',
          name: 'posts',
          value: 5,
          step: 50,
          min: 1,
          max: 10000,
          price: 5,
          type: 'number'
        }
      ]
    },
    action: {
      required: true,
      type: String
    },
    url: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      formInputs: this.inputs
    }
  },
  computed: {
    descriptions () {
      return this.formInputs.filter(el => el.description).map(el => `${el.description}: ${el.value}`)
    },
    price () {
      return Math.ceil(this.formInputs.reduce((acc, cur) => cur.type === 'number' ? acc * cur.value * cur.price : acc, 1))
    },
    fields () {
      return this.formInputs.reduce((acc, cur) => { acc[cur.name] = cur.value; return acc }, {})
    }
  },
  methods: {
    decrease (input) {
      if (input.value - input.step >= input.min) input.value -= input.step
    },
    increase (input) {
      input.value += input.step
    },
    normalize (input) {
      if (input.value < input.min || isNaN(input.value)) { input.value = input.min } else if (input.value > input.max) { input.value = input.max }
    },
    submit () {
      const payment = {
        action: this.action,
        descriptions: this.descriptions,
        price: this.price,
        url: this.url,
        fields: this.fields
      }
      this.$store.dispatch('payment/setPayment', payment)
      this.$router.push('/profile/payment')
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-form {
  text-align: center;

  label {
    text-align: left;
  }
}
.form-block-submit {
  @include respond-to(x-small) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.payment-price-container {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0.4em;
  @include respond-to(x-small) {
    margin-bottom: 0;
  }
}
</style>
