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
      title: 'Просмотры видео',
      inputs: [
        {
          type: 'hidden',
          name: 'id',
          value: this.$store.state.services.video.id
        },
        {
          label: 'Ссылка на видео',
          description: 'Ссылка на видео',
          name: 'param',
          type: 'url',
          value: ''
        },
        {
          label: 'Количество просмотров на пост',
          description: 'Количество просмотров на пост',
          name: 'value',
          value: this.$store.state.services.video.min,
          step: 50,
          min: this.$store.state.services.video.min,
          max: this.$store.state.services.video.max,
          price: this.$store.state.services.video.price,
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
