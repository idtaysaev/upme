<template>
  <upme-main class="reset-page">
    <upme-logo class="big"/>
    <auth-form
      :action="resetAction"
      class="auth-form reset-form">
      <h1 class="auth-form-title">Сброс пароля</h1>
      <div class="form-block">
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Пароль"
          required>
      </div>
      <div class="form-block">
        <input
          id="password-confirm"
          v-model="passwordConfirm"
          type="password"
          placeholder="Подтвердите пароль"
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
      password: '',
      passwordConfirm: '',
      message: undefined
    }
  },
  mounted () {
    if (!this.$route.query.reminder || !this.$route.query.email) {
      this.$router.replace('/')
    }
  },
  methods: {
    resetAction () {
      this.message = ''
      // const data = {
      //   email: this.$route.query.email,
      //   password: this.password,
      //   reminder: this.$route.query.reminder
      // }
      // api.post('reset', data)
      //   .then(response => {
      //     this.$router.push('/login')
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     this.message = 'Произошла ошибка, попробуйте позже'
      //   })
      this.$router.push('/login')
    },
    authorizeUrl () {
      return 1
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-page {
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
