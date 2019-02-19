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
      title: 'Сохранения',
      inputs: [
        {
          type: 'hidden',
          name: 'id',
          value: this.$store.state.services.saving.id
        },
        {
          label: 'Ссылка на пост',
          description: 'Ссылка на пост',
          name: 'param',
          type: 'url',
          value: ''
        },
        {
          label: 'Количество сохранений на пост',
          description: 'Количество сохранений на пост',
          name: 'value',
          value: this.$store.state.services.saving.min,
          step: 50,
          min: this.$store.state.services.saving.min,
          max: this.$store.state.services.saving.max,
          price: this.$store.state.services.saving.price,
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
