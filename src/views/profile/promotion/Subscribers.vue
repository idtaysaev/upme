<template>
  <upme-page class="page-promotion">
    <h1 slot="header">
      {{ title }}
    </h1>
    <payment-form
      :inputs="inputs"
      :action="title"
      :url="url"/>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import PaymentForm from '@/components/forms/PaymentForm.vue'
export default {
  components: {
    UpmePage,
    PaymentForm
  },
  data () {
    return {
      title: 'Подписчики',
      inputs: [
        {
          type: 'hidden',
          name: 'id',
          value: this.$store.state.services.follower.id
        },
        {
          type: 'hidden',
          name: 'param',
          value: this.$store.state.user.username
        },
        {
          label: 'Сколько подписчиков нужно?',
          description: 'Количество подписчиков',
          name: 'value',
          value: this.$store.state.services.follower.min,
          step: 50,
          min: this.$store.state.services.follower.min,
          max: this.$store.state.services.follower.max,
          price: this.$store.state.services.follower.price,
          type: 'number'
        }
      ],
      url: 'profile/order'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-promotion {
  text-align: left;
  // padding-bottom: 0;
}
</style>
