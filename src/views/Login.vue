<template>
  <upme-main class="login-page">
    <upme-logo class="big"/>
    <auth-form
      :action="loginAction"
      class="login-form small-form">
      <h1 class="auth-form-title">Войти</h1>
      <!-- <label for="login">Логин</label> -->
      <div class="form-block">
        <input
          id="login"
          v-model="login"
          type="text"
          placeholder="Логин"
          required>
      </div>
      <!-- <label for="password">Пароль</label> -->
      <div class="form-block">
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Пароль"
          required>
      </div>
      <div class="form-block-double">
        <div class="form-block form-block-checkbox">
          <input
            id="remember"
            v-model="remember"
            type="checkbox">
          <label for="remember">Запомнить</label>
        </div>
        <div class="form-block form-block-forgot">
          <router-link to="/forgot-password">Забыли пароль?</router-link>
        </div>
      </div>
      <p v-if="message">
        {{ message }}
      </p>
      <div class="form-block form-block-submit">
        <button-loading
          :loading="loading"
          :completed="completed"
          label="Войти"/>
      </div>
      <div
        v-if="providers.length"
        class="auth-form-separator">
        <span>или</span>
      </div>
      <div
        v-if="providers.length"
        class="auth-form-social">
        <!-- <a
          v-for="provider in providers"
          :href="authorizeUrl(provider.id, clients[provider.id], 1)"
          :key="provider.id"
          class="img-container img-social">
          <img
            src="@/assets/icons/social/fb.svg"
            alt="Facebook">
        </a> -->
        <!-- <a
          v-for="provider in providers"
          :href="authorizeUrl(provider.id, clients[provider.id], 1)"
          :key="provider.id"
          class="img-container img-social">
          <img
            src="@/assets/icons/social/fb.svg"
            alt="Facebook">
        </a> -->
        <!-- <a
          href=""
          title="Facebook"
          class="img-container img-social">
          <img
            src="@/assets/icons/social/fb.svg"
            alt="Facebook">
        </a>
        <a
          href=""
          title="VK"
          class="img-container img-social">
          <img
            src="@/assets/icons/social/vk.svg"
            alt="VK">
        </a>
        <a
          href=""
          title="Google+"
          class="img-container img-social">
          <img
            src="@/assets/icons/social/gl.svg"
            alt="Google+">
        </a> -->
      </div>
    </auth-form>
  </upme-main>
</template>

<script>
import UpmeMain from '@/components/layout/UpmeMain.vue'
import UpmeLogo from '@/components/elements/UpmeLogo.vue'
import AuthForm from '@/components/forms/AuthForm.vue'
import ButtonLoading from '@/components/elements/ButtonLoading.vue'
import { mapGetters } from 'vuex'
// import { api } from '@/plugins/http-api'

export default {
  components: {
    UpmeMain,
    UpmeLogo,
    AuthForm,
    ButtonLoading
  },
  data () {
    return {
      login: '',
      password: '',
      message: undefined,
      remember: false,
      providers: [],
      clients: {},
      loading: false,
      completed: false
    }
  },
  computed: {
    ...mapGetters([
      'authStatus'
    ])
  },
  mounted () {
    // api.get('login')
    //   .then(response => {
    //     console.log('oauth', response)
    //     this.providers = response.data.data.oauth2_providers
    //     this.clients = response.data.data.client_ids
    //   })
  },
  methods: {
    async loginAction () {
      this.message = ''
      this.loading = true
      const { login, password, remember } = this
      await this.$store.dispatch('authRequest', { login, password, remember })
      if (this.authStatus === 'success') {
        setTimeout(() => { this.loading = false }, 500)
        if (this.$route.params.wallet) {
          this.$router.push('/profile/wallet/replenishment/1000')
        } else {
          this.$router.push('/profile')
        }
      } else {
        this.loading = false
        this.message = this.authStatus
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
