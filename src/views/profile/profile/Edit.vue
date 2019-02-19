<template>
  <div class="profile-edit">
    <base-form
      :action="editProfile"
      class="profile-edit-form">
      <router-link
        to="/profile"
        class="profile-edit-cancel"/>
      <fieldset>
        <legend>
          Редактирование
        </legend>
        <div class="profile-edit-layout">
          <div class="form-block">
            <label for="first-name">Имя</label>
            <input
              id="first-name"
              v-model="user.first_name"
              type="text"
              placeholder="Имя"
              name="first-name"
              maxlength="32"
              required>
          </div>
          <div class="form-block">
            <label for="last-name">Фамилия</label>
            <input
              id="last-name"
              v-model="user.last_name"
              type="text"
              placeholder="Фамилия"
              name="last-name"
              maxlength="32"
              required>
          </div>
          <div class="form-block">
            <label for="age">Возраст</label>
            <input
              id="age"
              v-model="user.age"
              type="number"
              min="1"
              max="200"
              step="1"
              placeholder="Возраст"
              name="age"
              required>
          </div>
          <div class="form-block">
            <label for="city">Город</label>
            <input
              id="city"
              v-model="user.city"
              type="text"
              placeholder="Город"
              name="city"
              maxlength="32"
              required>
          </div>
          <div class="form-block">
            <label for="tel">Телефон</label>
            <input
              id="phone"
              v-model="user.phone"
              type="tel"
              placeholder="Телефон"
              name="phone"
              required>
          </div>
        </div>
        <div class="profile-edit-form-bottom">
          <button type="submit">Сохранить</button>
        </div>
      </fieldset>
    </base-form>
    <hr>
    <base-form
      :action="changePassword"
      class="profile-edit-form">
      <fieldset>
        <legend>
          Изменение пароля
        </legend>
        <div class="form-block">
          <input
            v-model="password"
            type="password"
            placeholder="Новый пароль"
            minlength="6"
            maxlength="64"
            name="password"
            required>
        </div>
        <div class="form-block">
          <input
            v-model="passwordConfirm"
            type="password"
            placeholder="Подтвердите пароль"
            minlength="6"
            maxlength="64"
            name="password_confirm"
            required>
        </div>
        <p
          v-if="message"
          class="error-message">
          {{ message }}
        </p>
        <div class="profile-edit-form-bottom">
          <button type="submit">Изменить пароль</button>
        </div>
      </fieldset>
    </base-form>
  </div>
</template>

<script>
import BaseForm from '@/components/forms/BaseForm.vue'
// import { api } from '@/plugins/http-api'

export default {
  components: {
    BaseForm
  },
  data () {
    return {
      user: {},
      password: '',
      passwordConfirm: '',
      message: ''
    }
  },
  computed: {
    userInitial () {
      return this.$store.state.user
    }
  },
  created () {
    Object.assign(this.user, this.userInitial)
  },
  methods: {
    async editProfile () {
      // const data = {
      //   first_name: this.user.first_name,
      //   last_name: this.user.last_name,
      //   age: this.user.age,
      //   city: this.user.city,
      //   phone: this.user.phone
      // }
      // await api.post('profile/dashboard', data)
      //   .then(response => {
      //     console.log(response)
      //     this.$store.dispatch('user/update', this.user)
      //     this.$router.push('/profile')
      //   })
      this.$store.dispatch('user/update', this.user)
      this.$router.push('/profile')
    },
    changePassword () {
      if (this.password === this.passwordConfirm) {
        this.message = ''
        // const data = {
        //   password: this.password
        // }
        // api.post('profile/change-password', data)
        //   .then(response => {
        //     console.log(response)
        //     this.$router.push('/profile')
        //   })
        //   .catch(error => {
        //     console.log(error)
        //     this.message = 'Неизвестная ошибка, попробуйте позже'
        //   })
        this.$router.push('/profile')
      } else {
        this.message = 'Пароли не совпадают'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-edit-form {
  font-size: 18px;
  @include respond-to(small) {
    font-size: 23px;
  }
  position: relative;
}
.profile-edit-cancel {
  position: absolute;
  top: 1em;
  right: 1em;
  width: 33px;
  height: 33px;
  @include respond-to(small) {
    top: 2em;
    right: 2em;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    display: block;
    background-color: white;
    transition: transform 0.3s ease-in-out;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover {
    &::before {
      transform: rotate(180deg);
    }
    &::after {
      transform: rotate(0);
    }
  }
}
.profile-edit-layout {
  margin-bottom: 1em;

  @include respond-to(small) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .form-block {
      width: 48%;
      width: calc(50% - 0.5em);

      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }
}
.profile-edit-form-bottom {
  text-align: right;
}
</style>
