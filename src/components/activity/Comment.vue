<template>
  <li
    :class="classes[status]"
    class="comment">
    <div class="comment-layout">
      <div
        :style="{ backgroundImage: `url(${comment.image})`}"
        class="comment-img"/>
      <div class="comment-info">
        <div class="comment-info-text">
          <p class="comment-description">
            {{ comment.comment }}
          </p>
          <p
            v-if="message"
            class="comment-message">
            {{ message }}
          </p>
        </div>
        <div class="comment-actions">
          <a
            :href="comment.url"
            class="btn comment-url"
            target="_blank">
            {{ statuses[status] }}
          </a>
          <button
            class="btn comment-check"
            target="_blank"
            @click="submit">
            Проверить
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
// import { api } from '@/plugins/http-api'
export default {
  props: {
    comment: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      status: 0,
      statuses: [
        'Перейти',
        'Проверяется',
        'Выполнено'
      ],
      classes: [
        '',
        'verifying',
        'completed'
      ],
      message: ''
    }
  },
  methods: {
    submit () {
      if (this.status === 0) {
        // const data = {
        //   id: this.comment.id,
        //   url: this.comment.url
        // }
        this.message = ''
        this.status = 1
        // api.post('profile/comments', data)
        //   .then(response => {
        //     console.log(response)
        //     const code = response.data.code
        //     setTimeout(() => {
        //       switch (code) {
        //         case 100:
        //           this.status = 2
        //           this.$store.dispatch('activity/updateCommentsLeft')
        //           break
        //         case 114:
        //           this.status = 0
        //           this.message = 'Комментарий не найден'
        //           break
        //         default:
        //           this.status = 0
        //           this.message = 'Неизвестная ошибка'
        //           break
        //       }
        //     }, 400)
        //   })
        //   .catch(error => {
        //     console.log(error)
        //     this.message = 'Неизвестная ошибка'
        //   })
        setTimeout(() => {
          this.status = 0
          this.message = 'Недоступно в демонстрационной версии'
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  padding-left: 12px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  margin-bottom: 2em;
  text-align: right;
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
    .comment-url {
      background: #ffe110 linear-gradient(27deg, #f3a948 0%, #ffe110 100%);
      box-shadow: 0 0 1em rgba(#ffe110, 0.4);
    }
    &::before {
      background-image: linear-gradient(to top, #f3a948 0%, #ffe110 100%);
    }
  }

  &.completed {
    .comment-url {
      background: #15ff73 linear-gradient(27deg, #15ff73 0%, #fff715 100%);
      box-shadow: 0 0 1em rgba(#15ff73, 0.4);
      color: $color-text;
    }
    &::before {
      background-image: linear-gradient(to top, #15ff73 0%, #fff715 100%);
    }
  }
  .btn {
    padding: 0.2em 2em;
    width: 100%;
  }
}
.comment-info-text {
  margin-bottom: 1em;
}
.comment-message {
  margin-top: 1em;
}
.comment-actions {
  @include respond-to(x-small) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn {
      width: auto;
    }
    .comment-check {
      margin-bottom: 0;
      margin-left: 1em;
    }
  }
  @include respond-to(small) {
    flex-wrap: wrap;
    .btn {
      width: 100%;
    }
    .comment-check {
      margin-right: 0;
      margin-bottom: 0.6em;
    }
  }
  @include respond-to(large) {
    .btn {
      width: auto;
    }
    .comment-check {
      margin-right: 1em;
      margin-bottom: 0;
    }
  }
}
.comment-check {
  margin-bottom: 0.6em;
  background: #ffe110 linear-gradient(27deg, #f3a948 0%, #ffe110 100%);
  box-shadow: 0 0 2em #ffe110;

  &:hover,
  &:focus {
    box-shadow: 0 0 0.4em #ffe110;
  }
}
.comment-info {
  padding: 1em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.comment-description {
  text-align: left;
}
.comment-layout {
  @include respond-to(x-small) {
    display: flex;
    justify-content: space-between;

    .comment-img {
      flex-shrink: 0;
      width: 107px;
      height: 107px;
    }
  }
}
.comment-img {
  margin: 0 auto;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
