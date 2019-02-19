<template>
  <li
    :class="classes[status]"
    class="task">
    <h2 class="task-title">
      {{ task.title }}
    </h2>
    <p v-if="task.instruction">
      {{ task.instruction }}
    </p>
    <div class="task-layout">
      <a
        :href="task.url"
        class="btn"
        target="_blank"
        rel="nofollow noopener"
        @click.passive="submit">
        {{ statuses[status] }}
      </a>
      <span class="task-reward">
        +{{ task.experience }} UP
      </span>
    </div>
  </li>
</template>

<script>
// import { api } from '@/plugins/http-api'
export default {
  props: {
    task: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      status: this.task.status - 1,
      statuses: [
        'Выполнить',
        'Проверяется',
        'Выполнено',
        'Ошибка'
      ],
      classes: [
        '',
        'verifying',
        'completed',
        'error'
      ],
      message: ''
    }
  },
  watch: {
    task () {
      this.status = this.task.status - 1
    }
  },
  methods: {
    submit () {
      if (this.status === 0) {
        // const data = {
        //   id: this.task.id
        // }
        // api.post('profile/tasks', data)
        //   .then(response => {
        //     console.log(response)
        //     setTimeout(() => {
        //       this.status = 1
        //     }, 200)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //     this.status = 3
        //   })
        setTimeout(() => {
          this.status = 1
        }, 200)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  position: relative;
  padding: 1em 2em;
  border-radius: 20px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  margin-bottom: 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 12px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: linear-gradient(to top, #c42037 0%, $color-primary 100%);
  }

  &.verifying {
    .btn {
      background: #ffe110 linear-gradient(27deg, #f3a948 0%, #ffe110 100%);
      box-shadow: 0 0 1em rgba(#ffe110, 0.4);
    }
    &::before {
      background-image: linear-gradient(to top, #f3a948 0%, #ffe110 100%);
    }
  }

  &.completed {
    .btn {
      background: #15ff73 linear-gradient(27deg, #15ff73 0%, #fff715 100%);
      box-shadow: 0 0 1em rgba(#15ff73, 0.4);
      color: $color-text;
    }
    &::before {
      background-image: linear-gradient(to top, #15ff73 0%, #fff715 100%);
    }
  }

  .btn {
    padding: 0.2em 1em;
    margin-right: 0.4em;
    @include respond-to(x-small) {
      padding: 0.2em 2em;
    }
  }
}
.task-title {
  margin-bottom: 0.4em;
}
.task-description {
  margin-bottom: 1em;
}
.task-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-reward {
  padding: 0.2em 1em;
  border-radius: 15px;
  background-image: linear-gradient(27deg, #15ff73 0%, #fff715 100%);
}
.task-url {
  margin-bottom: 1em;
}
.task-form {
  background: transparent;
  color: inherit;
  padding: 0;

  .btn {
    color: white;
  }
}
</style>
