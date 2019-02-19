<template>
  <div>
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
      title: 'Лайки на пост',
      action: this.$route.params.post,
      inputs: [
        {
          type: 'hidden',
          name: 'id',
          value: this.$store.state.services.likeStandart.id
        },
        {
          type: 'hidden',
          description: 'Ссылка на пост',
          name: 'param',
          value: `https://www.instagram.com/p/${this.$route.params.post}`
        },
        {
          label: 'Сколько лайков вы хотите?',
          description: 'Количество лайков на пост',
          name: 'value',
          value: this.$store.state.services.likeStandart.min,
          step: 50,
          min: this.$store.state.services.likeStandart.min,
          max: this.$store.state.services.likeStandart.max,
          price: this.$store.state.services.likeStandart.price,
          type: 'number'
        }
      ],
      url: 'profile/order'
    }
  }
}
</script>
