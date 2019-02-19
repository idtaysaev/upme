<template>
  <div>
    <p class="promotion-likes-hint">
      В этом режиме ты можешь подключить автоматическое продвижение на будущие публикации.
    </p>
    <payment-form
      :inputs="inputs"
      :action="title"
      :url="url"/>
  </div>
</template>

<script>
import PaymentForm from '@/components/forms/PaymentForm.vue'
export default {
  components: {
    PaymentForm
  },
  data () {
    return {
      title: 'Автоматическое продвижение',
      inputs: [
        {
          type: 'hidden',
          name: 'id',
          value: this.$store.state.services.likeAuto.id
        },
        {
          label: 'Сколько постов ты хочешь продвинуть?',
          description: 'Количество постов',
          name: 'param',
          value: 2,
          step: 1,
          min: 2,
          max: 100,
          price: 1,
          type: 'number'
        },
        {
          label: 'Количество лайков на пост',
          description: 'Количество лайков на пост',
          name: 'value',
          value: this.$store.state.services.likeAuto.min,
          step: 50,
          min: this.$store.state.services.likeAuto.min,
          max: this.$store.state.services.likeAuto.max,
          price: this.$store.state.services.likeAuto.price,
          type: 'number'
        }
      ],
      url: 'profile/order'
    }
  }
}
</script>

<style lang="scss" scoped>
.promotion-likes-hint {
  margin-bottom: 2em;
  background-color: #ffffff;
  border-radius: 22px;
  color: #373233;
  padding: 0.8em 1.2em;
  display: inline-block;
}
</style>
