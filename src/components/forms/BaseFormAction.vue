<template>
  <form
    :action="action"
    class="base-form">
    <slot/>
  </form>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form {
  background-color: $color-primary;
  background-image: linear-gradient(39deg, #c42037 0%, $color-primary 100%);
  color: white;
  border-radius: 10px;
  padding: 1em;
  @include respond-to(x-small) {
    padding: 2em
  }
  button[type=submit] {
    border: none;
    background-color: white;
    border-radius: 19px;
    color: $color-primary;
    padding: 0.4em 1.2em;
    font-size: 18px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  &.transparent-form {
    background: transparent;
    color: inherit;

    .form-block-submit {
      text-align: left;
    }

    button[type=submit] {
      padding-left: 2em;
      padding-right: 2em;
      box-shadow: 0 0 1.2em white;

      &:hover {
        box-shadow: 0 0 0.6em white;
      }
    }
  }
}
</style>
