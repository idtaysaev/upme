<template>
  <section
    id="registration"
    class="home-registration">
    <upme-container>
      <auth-form
        :class="{ completed: completed }"
        :action="confirm"
        class="reg-form">
        <h2 class="auth-form-title">
          Регистрация
        </h2>
        <div class="form-block-double">
          <div class="form-block">
            <input
              v-model="email"
              type="email"
              placeholder="E-mail"
              name="email"
              required>
          </div>
          <div class="form-block">
            <input
              v-model="username"
              type="text"
              placeholder="Instagram username"
              name="username"
              minlength="2"
              maxlength="64"
              required>
          </div>
        </div>
        <div class="form-block-double">
          <div class="form-block">
            <input
              v-model="firstName"
              type="text"
              placeholder="Имя"
              name="first_name"
              minlength="1"
              maxlength="64"
              required>
          </div>
          <div class="form-block">
            <input
              v-model="lastName"
              type="text"
              placeholder="Фамилия"
              name="last_name"
              minlength="1"
              maxlength="64"
              required>
          </div>
        </div>
        <div class="form-block-double">
          <div class="form-block">
            <input
              v-model="password"
              type="password"
              placeholder="Пароль"
              name="password"
              minlength="6"
              maxlength="64"
              required>
          </div>
          <div class="form-block">
            <input
              v-model="passwordConfirm"
              type="password"
              placeholder="Подтвердите пароль"
              name="password_confirm"
              minlength="6"
              maxlength="64"
              required>
          </div>
        </div>
        <!-- <div class="form-block form-block-checkbox">
          <input
            id="checkbox-age"
            v-model="age"
            type="checkbox"
            name="checkbox_age">
          <label for="checkbox-age">
            <p>
              Я подтверждаю, что мне есть 18 лет
            </p>
          </label>
        </div> -->
        <div class="form-block form-block-checkbox">
          <input
            id="checkbox-use"
            v-model="use"
            type="checkbox"
            name="checkbox_use">
          <label for="checkbox-use">
            <p>
              Я принимаю
              <router-link
                to="/terms-of-use"
                class="auth-form-link">условия использования</router-link>
            </p>
          </label>
        </div>
        <div class="form-block form-block-checkbox">
          <input
            id="checkbox-privacy"
            v-model="privacy"
            type="checkbox"
            name="checkbox_privacy">
          <label for="checkbox-privacy">
            <p>
              Я принимаю
              <router-link
                to="/privacy-policy"
                class="auth-form-link">политику конфиденциальности</router-link>
            </p>
          </label>
        </div>

        <div class="form-block">
          <ul class="form-errors">
            <li
              v-for="error in errors"
              :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <div class="form-block form-block-submit">
          <button-loading
            :loading="loading"
            :completed="completed"
            label="Зарегистрироваться"/>
        </div>
        <!-- TODO: return -->
        <!-- <div class="auth-form-separator">
          <span>или</span>
        </div>
        <div class="auth-form-social">
          <a
            href=""
            title="Facebook"
            class="img-container img-social"
            @click.prevent="deleteCavill()">
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
          </a>
        </div> -->
      </auth-form>
    </upme-container>
    <div class="decor">
      <div class="decor-item decor-item-triangle decor-item-1"/>
      <div class="decor-item decor-item-circle decor-item-2"/>
      <div class="decor-item decor-item-triangle decor-item-3"/>
    </div>
  </section>
</template>

<script>
import UpmeContainer from '@/components/layout/UpmeContainer.vue'
import AuthForm from '@/components/forms/AuthForm.vue'
import ButtonLoading from '@/components/elements/ButtonLoading.vue'
// import { api } from '@/plugins/http-api'

export default {
  components: {
    UpmeContainer,
    AuthForm,
    ButtonLoading
  },
  data () {
    return {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      privacy: false,
      use: false,
      // age: false,
      errors: [],
      loading: false,
      completed: false
    }
  },
  methods: {
    async confirm () {
      if (!this.completed) {
        // TODO: check reg
        this.errors = []
        if (this.email &&
            this.username &&
            this.firstName &&
            this.lastName &&
            this.password &&
            this.password === this.passwordConfirm &&
            this.privacy &&
            this.use) {
          this.loading = true
          // const data = {
          //   email: this.email,
          //   first_name: this.firstName,
          //   last_name: this.lastName,
          //   username: this.username,
          //   password: this.password
          // }
          // if (this.$route.query.ref) {
          //   data.referal = Number(this.$route.query.ref)
          // }
          // await api.post('register', data)
          //   .then(response => {
          //     console.log('reg-login', response)
          //     const code = response.data.code
          //     switch (code) {
          //       case 100:
          //         this.login()
          //         break
          //       case 102:
          //         this.errors.push('Пустые поля')
          //         break
          //       case 103:
          //         this.errors.push('Инстаграм не найден')
          //         break
          //       case 107:
          //         this.errors.push('Переведите аккаунт в публичный режим')
          //         break
          //       case 108:
          //         this.errors.push('Пользователь уже существует')
          //         break
          //       default:
          //         this.errors.push('Неизвестная ошибка')
          //         break
          //     }
          //   })
          //   .catch(error => {
          //     this.errors.push('Неизвестная ошибка')
          //     console.log(error)
          //   })
          this.login()
          this.loading = false
        } else {
          if (this.password !== this.passwordConfirm) {
            this.errors.push('Пароли не совпадают.')
          }
          if (!this.use) {
            this.errors.push('Отметье ваше согласие с условиями использования.')
          }
          if (!this.privacy) {
            this.errors.push('Отметье ваше согласие с политикой конфиденциальности.')
          }
        }
      }
    },
    async login () {
      this.completed = true
      const user = {
        login: this.username,
        password: this.password,
        remember: true
      }
      await this.$store.dispatch('authRequest', user)
      this.$router.push('/profile')
    }
    // async deleteCavill () {
    //   const data = {
    //     id: 1372
    //   }
    //   await api.post('delete', data)
    //     .then(response => {
    //       console.log(response)
    //     })
    // }
  }
}
</script>

<style lang="scss" scoped>
.home-registration {
  padding: 4em 0;
  @include respond-to(large) {
    padding: 12em 0;
  }
}
.decor-item-1 {
  bottom: 10%;
  right: -10%;
  width: 326px;
  height: 326px;
  border-radius: 56px;
  background-image: linear-gradient((52deg-45deg), #c42037 0%, #ff030f 100%);
  box-shadow: -7em 7em 16em 0.4em rgba($color-primary, 0.5);
}
.decor-item-2 {
  top: -30%;
  right: -15%;
  width: 500px;
  height: 500px;
  background-image: linear-gradient(45deg, #f3c111 0%, #ee0727 100%);
  box-shadow: 0 2em 6em 0.4em rgba(#f3c111, 0.8);
  @include respond-to(x-large) {
    top: -40%;
    width: 694px;
    height: 694px;
  }
}
.decor-item-3 {
  top: 10%;
  left: -2%;
  width: 280px;
  height: 280px;
  border-radius: 56px;
  background-image: linear-gradient((52deg-45deg), #c42037 0%, #ff030f 100%);
  box-shadow:
    4em -6em 12em 1em rgba(#f3c111, 0.5),
    4em 6em 12em 1em rgba($color-primary, 0.5);
  @include respond-to(x-large) {
    width: 326px;
    height: 326px;
  }
}
</style>
