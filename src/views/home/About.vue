<template>
  <div class="about-page">
    <upme-container>
      <section>
        <h1>
          О нас
        </h1>
        <div v-html="html"/>
      </section>
    </upme-container>
  </div>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
// import { api } from '@/plugins/http-api'
export default {
  components: {
    UpmeContainer
  },
  data () {
    return {
      html: ''
    }
  },
  mounted () {
    // api.get('about')
    //   .then(response => {
    //     this.html = response.data.message
    //     console.log(response.data.message)
    //   })
    this.html = `
      <p>Общество с ограниченной ответственностью «HypeMe Group»</p>
      <p><strong>ИНН:</strong> 7704463921</p>
      <p><strong>ОГРН:</strong> 1187746909272</p>
      <p><strong>КПП:</strong> 770401001</p>
    `
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  padding: 2em 0;
}
</style>
