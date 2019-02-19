<template>
  <div class="likes-standart">
    <ul class="likes-post-list">
      <li
        v-for="post in postsShown"
        :key="post.link"
        class="likes-post-list-item">
        <router-link
          :to="'/profile/promotion/likes/standart/'+getPostId(post.link)"
          class="likes-post">
          <div
            :style="{ backgroundImage: `url(${post.image})` }"
            class="likes-post-img"/>
          <div class="likes-post-meta">
            <p class="likes-post-meta-likes">
              {{ post.likes }}
            </p>
            <p class="likes-post-meta-comments">
              {{ post.comments }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="likes-more-container">
      <button
        v-if="numberShown < posts.length"
        class="btn likes-more"
        @click="showMore">Больше</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      numberShown: 12,
      moreCount: 12
    }
  },
  computed: {
    ...mapState('posts', {
      posts: 'list'
    }),
    postsShown () {
      return this.posts.slice(0, this.numberShown)
    }
  },
  methods: {
    getPostId (url) {
      return url.replace('https://www.instagram.com/p', '').replace('/', '')
    },
    showMore () {
      this.numberShown += this.moreCount
    }
  }
}
</script>

<style lang="scss" scoped>
.likes-post-list {
  @include respond-to(x-small) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .likes-post-list-item {
      width: 48%;
      width: calc(50% - 1em);

      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }
  }

  @include respond-to(small) {
    justify-content: flex-start;
    .likes-post-list-item {
      width: 30%;
      width: calc(100% / 3 - 4em / 3);
      transition: opacity 0.3s;
      margin-right: 2em;

      &:hover {
        opacity: 0.7;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:nth-last-child(3) {
        margin-bottom: 0;
      }
    }
  }

  @include respond-to(medium) {
    padding: 0 4em;
  }
}
.likes-post-list-item {
  margin-bottom: 2em;

  &:last-child {
    margin-bottom: 0;
  }
}
.likes-post-meta {
  padding: 0.6em 1em;
  background-color: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: #c81e34;
  font-weight: 700;
  display: flex;
  justify-content: center;
}
.likes-post-meta-likes {
  margin-right: 1.2em;
  &::before {
    content: "";
    width: 27px;
    height: 23px;
    display: inline-block;
    margin-right: 0.6em;
    background-image: url('../../../../assets/icons/promotion/likes/likes.svg');
  }
}
.likes-post-meta-comments {
  &::before {
    content: "";
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-right: 0.6em;
    background-image: url('../../../../assets/icons/promotion/likes/comments.svg');
  }
}
.likes-post-meta-likes,
.likes-post-meta-comments {
  display: flex;
  align-items: center;
}
.likes-post-img {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 100%;
  height: 0;
}
.likes-more-container {
  text-align: center;
  margin-top: 1em;
  .btn {
    font-size: 23px;
  }
}
</style>
