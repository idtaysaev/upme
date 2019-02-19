<template>
  <upme-page class="page-spins">
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
      title: 'Покупка спинов',
      inputs: [
        {
          type: 'hidden',
          name: 'id',
          value: this.$store.state.services.spin.id
        },
        {
          type: 'hidden',
          name: 'value',
          value: 0
        },
        {
          label: 'Сколько спинов хотите купить?',
          description: 'Количество спинов',
          name: 'param',
          value: this.$store.state.services.spin.min,
          step: 1,
          min: this.$store.state.services.spin.min,
          max: this.$store.state.services.spin.max,
          price: this.$store.state.services.spin.price,
          type: 'number'
        }
      ],
      url: 'profile/order'
    }
  }
}
</script>
