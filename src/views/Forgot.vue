<template>
  <upme-main class="forgot-page">
    <upme-logo class="big"/>
    <auth-form
      :class="{ submited: submited }"
      :action="forgotAction"
      class="small-form forgot-form">
      <h1 class="auth-form-title">Восстановление</h1>
      <div class="form-block">
        <input
          id="email"
          v-model="email"
          type="emaii"
          placeholder="email"
          required>
      </div>
      <p
        v-if="message"
        class="form-message">
        {{ message }}
      </p>
      <div class="form-block form-block-submit">
        <button
          class="btn"
          type="submit">Подтвердить</button>
      </div>
    </auth-form>
  </upme-main>
</template>

<script>
import UpmeMain from '@/components/layout/UpmeMain.vue'
import UpmeLogo from '@/components/elements/UpmeLogo.vue'
import AuthForm from '@/components/forms/AuthForm.vue'
// import { api } from '@/plugins/http-api'

export default {
  components: {
    UpmeMain,
    UpmeLogo,
    AuthForm
  },
  data () {
    return {
      email: '',
      message: undefined,
      submited: false
    }
  },
  methods: {
    forgotAction () {
      if (!this.submited) {
        this.message = ''
        // const data = {
        //   email: this.email
        // }
        // api.post('forgot', data)
        //   .then(response => {
        //     this.message = 'Вам на почту пришло письмо со ссылкой сброса'
        //     this.submited = true
        //   })
        //   .catch(error => {
        //     console.log(error)
        //     this.message = 'Произошла ошибка, попробуйте позже'
        //   })
        this.message = 'Вам на почту пришло письмо со ссылкой сброса'
        this.submited = true
      }
    },
    authorizeUrl () {
      return 1
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-page {
  min-height: 100vh;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-form-title {
  font-size: 29px;
}
.form-message {
  font-size: 20px;
}
</style>
