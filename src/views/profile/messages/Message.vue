<template>
  <div
    :class="'message-'+types[type].class"
    class="message">
    <h1 class="message-title">
      {{ message }}
    </h1>
    <div class="img-container">
      <img
        :src="types[type].img"
        alt="">
    </div>
    <p>
      <router-link
        class="message-link"
        to="/profile">
        Продолжить
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      types: {
        success: {
          class: 'success',
          img: require('@/assets/icons/forms/success-white.svg')
        },
        error: {
          class: 'error',
          img: require('@/assets/icons/forms/error-white.svg')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  border-radius: 10px;
  padding: 3em 2em;

  &-success {
    background-color: #fff715;
    background-image: linear-gradient(to right, #15ff73 0%, #fff715 100%);
    box-shadow: 0 0 40px rgba(#15ff73, 0.4);
    color: $color-text;
  }

  &-error {
    background-color: $color-primary;
    background-image: linear-gradient(to right, #c42037 0%, $color-primary 100%);
    box-shadow: 0 0 40px rgba($color-primary, 0.4);
    color: white;
  }
}
.message-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1em;
}
.img-container {
  margin-bottom: 2.2em;
}
.message-link {
  font-size: 18px;
  border-radius: 19px;
  padding: 0.4em 1em;
  background: white;
  color: $color-text;

  &:hover {
    opacity: 0.6;
  }
}
</style>
