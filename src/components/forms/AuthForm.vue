<template>
  <base-form
    :action="action"
    class="auth-form">
    <slot/>
  </base-form>
</template>

<script>
import BaseForm from './BaseForm'
export default {
  components: {
    BaseForm
  },
  props: {
    action: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  background: white;
  color: $color-text;
  // background-image: linear-gradient(23deg, #ee0727 0%, #f3c111 100%);
  box-shadow: 0 1em 6em #ee0727;
  max-width: 600px;
  margin: 0 auto;
  font-size: 20px;
  border-radius: 20px;

  @include respond-to(x-small) {
    font-size: 27px;
  }

  @include respond-to(medium) {
    font-size: 20px;
  }

  @include respond-to(x-large) {
    max-width: 800px;
    font-size: 27px;
  }

  /deep/ input {
    box-shadow: none;
    border-radius: 0;
    padding: 0 0 0.2em;
    background: transparent;
    color: inherit;
    border-bottom: 2px solid $color-primary;
    transition: border-bottom-color 0.3s;

    &:focus {
      border-bottom-color: black;
    }
  }

  /deep/ button[type=submit] {
    background-color: $color-primary;
    background-image: linear-gradient(30deg, #c42037 0%, $color-primary 100%);
    color: white;
    font-size: 26px;
    border-radius: 1em;
    font-weight: bold;

    &.loading,
    &.completed {
      color: transparent;
    }
  }

  /deep/ .form-block-submit {
    text-align: center;
  }
  &.reg-form {
    position: relative;
    .form-block-submit {
      margin-top: 1em;
    }
    button[type=submit] {
      @include respond-to(x-small, max) {
        font-size: 18px;
        padding: 0.5em 1em;
      }
    }
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      opacity: 0;
      transition: all 0.3s;
    }
    &.completed {
      &::after {
        opacity: 0.5;
        z-index: 1;
      }
    }
  }
  &.small-form {
    margin-top: 2em;
    max-width: 500px;
    @include respond-to(medium) {
      max-width: 400px;
    }
    @include respond-to(x-large) {
      max-width: 600px;
    }
  }
  /deep/.form-block-forgot {
    text-align: right;
    font-size: 16px;
    @include respond-to(x-small) {
      font-size: 20px;
    }

    @include respond-to(small) {
      font-size: 25px;
    }

    @include respond-to(medium) {
      font-size: 20px;
    }

    @include respond-to(x-large) {
      font-size: 25px;
    }
  }
}
/deep/ .auth-form-title {
  text-align: center;
  margin-bottom: 0.4em;
  font-size: 36px;
  color: #484848;
  @include respond-to(x-small) {
    font-size: 44px;
  }
  @include respond-to(medium) {
    text-align: left;
  }
}
/deep/ .auth-form-separator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #7a7a7a;
  margin-bottom: 1em;
  &::before,
  &::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #d6d6d6;
    flex-grow: 1;
  }
  &::before {
    margin-right: 0.6em;
  }
  &::after {
    margin-left: 0.6em;
  }
}
/deep/ .auth-form-social {
  display: flex;
  justify-content: center;
  align-items: center;
  .img-social {
    background-color: $color-primary;
    background-image: linear-gradient(40deg, #c42037 0%, #ff030f 100%);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    @include respond-to(x-small) {
      width: 75px;
      height: 75px;
    }
    img {
      width: 60%;
    }
    &:not(:last-child) {
      margin-right: 1em;
    }
    box-shadow: 0 0 1em rgba($color-primary, 0.6);
    &:hover {
      box-shadow: 0 0 2em rgba($color-primary, 0.6);
    }
    &:focus {
      box-shadow: 0 0 0.6em rgba($color-primary, 0.8);
    }
  }
}
/deep/ .auth-form-link {
  color: $color-primary;
  opacity: 0.8;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom-color: $color-primary;
  }
}
</style>
