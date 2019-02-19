<template>
  <upme-page class="page-support">
    <div slot="header">
      <h1>
        {{ title }}
      </h1>
    </div>
    <base-form :action="submit">
      <div class="form-block">
        <label for="message">Ваше сообщение</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Ваше сообщбение"
          required/>
      </div>
      <div
        v-if="error"
        class="form-block">
        <p>
          {{ error }}
        </p>
      </div>
      <div class="form-block form-block-submit">
        <button type="submit">Отправить сообщение</button>
      </div>
    </base-form>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import BaseForm from '@/components/forms/BaseForm.vue'
// import { api } from '@/plugins/http-api'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    UpmePage,
    BaseForm
  },
  data () {
    return {
      title: 'Техническая поддержка',
      message: '',
      error: ''
    }
  },
  computed: {
    ...mapState('user', [
      'email',
      'phone'
    ]),
    ...mapGetters('user', [
      'fullName'
    ])
  },
  methods: {
    submit () {
      if (!this.submited) {
        // const data = {
        //   name: this.fullName,
        //   email: this.email,
        //   phone: this.phone,
        //   comment: this.message
        // }
        // api.post('profile/message', data)
        //   .then(response => {
        //     this.$router.push('/profile/support/success')
        //     console.log('support', response)
        //   })
        //   .catch(() => {
        //     this.error = 'Произошла ошибка'
        //   })
        this.$router.push('/profile/support/success')
      }
    }
  }
}
</script>
