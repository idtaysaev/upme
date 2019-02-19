<template>
  <upme-page class="page-activity">
    <h1 slot="header">
      {{ title }}
    </h1>
    <transition
      name="fade"
      mode="out-in">
      <!-- <div v-if="false"> -->
      <div v-if="!canComment">
        <p
          v-if="message"
          class="comment-message">
          {{ message }}
        </p>
        <p class="comments-need">
          Оставьте еще {{ commentsLeft }} комментариев, и Вы сможете написать свой собственный!
        </p>
        <ul
          v-if="comments"
          class="comments">
          <comment
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"/>
        </ul>
        <p v-else>
          Комментариев пока нет!
        </p>
      </div>
      <div
        v-else
        class="success-comment">
        <div class="success-comment-top">
          <div class="img-container">
            <img
              src="@/assets/icons/forms/success.svg"
              alt="Ура! Поздравляем!">
          </div>
          <h2 class="success-comment-title">
            Поздравляем!
          </h2>
          <p>
            Теперь ты можешь сам разместить публикацию.
          </p>
        </div>
        <form
          class="success-comment-form"
          @submit.prevent="submit">
          <label for="comment-url">Введите ссылку вашей публикации</label>
          <input
            id="comment-url"
            v-model="link"
            type="url"
            name="comment-url"
            required>
          <label for="comment-description">Описание и ваши пожелания</label>
          <textarea
            id="comment-description"
            v-model="comment"
            name="comment-description"
            required/>
          <p class="success-comment-hint">
            85 символов ограничение
          </p>
          <button
            class="btn success-comment-submit"
            type="submit">Опубликовать</button>
        </form>
      </div>
    </transition>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import Comment from '@/components/activity/Comment.vue'
// import { api } from '@/plugins/http-api'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    UpmePage,
    Comment
  },
  data () {
    return {
      title: 'Биржа активности',
      statuses: {
        start: 'Пройти',
        verifying: 'Проверяется',
        completed: 'Выполнено'
      },
      link: '',
      comment: '',
      message: ''
    }
  },
  computed: {
    ...mapState('activity', [
      'comments',
      'commentsLeft'
    ]),
    ...mapGetters('activity', [
      'canComment'
    ])
  },
  mounted () {
    this.$store.dispatch('activity/init')
  },
  methods: {
    async submit () {
      if (this.canComment) {
        // let data = {
        //   link: this.link,
        //   comment: this.comment
        // }
        // await api.post('profile/comments/add', data)
        //   .then(response => {
        //     console.log(response)
        //     this.message = 'Вы только что оставили свой комментарий. Продолжайте в том же духе!'
        //     this.$store.dispatch('activity/init')
        //   })
        this.message = 'Вы только что оставили свой комментарий. Продолжайте в том же духе!'
        this.$store.dispatch('activity/init')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  margin-bottom: 2em;
  @include respond-to(small) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    .comment {
      width: 48%;
      width: calc(50% - 1em);
      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }
}
.comments-need {
  margin-bottom: 1em;
}
.comment-message {
  margin-bottom: 1em;
}
.success-comment {
  max-width: 469px;
  margin: 0 auto;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
.success-comment-top {
  text-align: center;
  background-image: linear-gradient(66deg, #15ff73 0%, #fff715 100%);
  border-radius: 15px;
  padding: 2em;
}
.success-comment-title {
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  font-weight: 700;
  font-size: 21px;
}
.success-comment-form {
  padding: 2em 1em;

  input,
  textarea {
    margin-bottom: 0.6em;
    background-color: transparent;
    color: inherit;
    padding: 0.3em;
    transition: all 0.3s;
    border: 1px solid #7d76a0;
    border-radius: 10px;
    box-shadow: none;
  }

  label {
    padding-left: 10px;
    margin-bottom: 0.4em;
    font-size: 14px;
  }
}
.success-comment-hint {
  color: #c6c6c6;
}
.success-comment-submit {
  display: block;
  margin-left: auto;
}
</style>
