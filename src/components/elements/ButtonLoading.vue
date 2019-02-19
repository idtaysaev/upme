<template>
  <button
    :class="{ loading: loading, completed: completed }"
    :disabled="completed"
    class="btn"
    type="submit">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Подтвердить'
    },
    loading: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  transition: all 0.6s;
  &::before {
    content: "";
    position: absolute;
    left: 40%;
    top: 40%;
    left: calc(50% - 0.5em);
    top: calc(50% - 0.5em);
    width: 1em;
    height: 1em;
    display: block;
    border-radius: 50%;
    border: 4px solid white;
    border-top-color: transparent;
    border-bottom-color: transparent;
    opacity: 0;
    transition: all 0.6s;
    animation: rotate 0.6s infinite;
  }
  &::after {
    content: "";
    position: absolute;
    left: 40%;
    top: 40%;
    left: calc(50% - 0.25em);
    top: calc(50% - 0.5em);
    width: 0.5em;
    height: 1em;
    display: block;
    border: 4px solid white;
    border-left-color: transparent;
    border-top-color: transparent;
    opacity: 0;
    transform: rotate(45deg);
    transition: all 0.6s;
  }
  &.loading {
    color: transparent;
    pointer-events: none;
    &::before {
      opacity: 1;
    }
  }
  &.completed {
    color: transparent;
    &::before {
      opacity: 0;
    }
    &::after {
      opacity: 1;
    }
  }
}
</style>
