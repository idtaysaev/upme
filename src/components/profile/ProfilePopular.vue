<template>
  <div
    v-if="lastPosts"
    class="profile-popular">
    <section>
      <h2 class="profile-popular-title">
        Последние посты
      </h2>
      <ul class="popular-post-list">
        <li
          v-for="(post, i) in lastPosts"
          :key="i"
          class="popular-post-list-item">
          <a
            :href="post.link"
            target="_blank"
            class="popular-post">
            <div
              :style="{ backgroundImage: `url(${post.image})` }"
              class="popular-post-img"/>
            <div class="popular-post-meta">
              <p class="popular-post-meta-involvement">
                {{ post.er.toFixed(2) }}%
              </p>
              <div class="popular-post-meta-layout">
                <p class="popular-post-meta-likes">
                  {{ post.likes }}
                </p>
                <p class="popular-post-meta-comments">
                  {{ post.comments }}
                </p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('posts', [
      'lastPosts'
    ])
  }
}
</script>

<style lang="scss" scoped>
.profile-popular {
  background-color: #f1f1f1;
  border-radius: 16px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  padding: 2em;
  margin-bottom: 2em;
}
.profile-popular-title {
  font-size: 23px;
  text-align: center;
  margin-bottom: 0.6em;
}

.popular-post-list {
  @include respond-to(x-small) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .popular-post-list-item {
      width: 48%;
      width: calc(50% - 1em);
    }
  }

  @include respond-to(small) {
    justify-content: flex-start;

    .popular-post-list-item {
      width: 30%;
      width: calc(100% / 3 - 4em / 3);
      transition: opacity 0.3s;
      margin-bottom: 0;
      margin-right: 2em;

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
.popular-post-list-item {
  margin-bottom: 2em;
  &:last-child {
    margin-bottom: 0;
  }
}
.popular-post-meta {
  position: relative;
  z-index: 1;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  padding: 0.6em 1em;
  background-color: white;
  border-radius: 16px;
  font-weight: 700;
  margin: -1em 1em 0;
}
.popular-post-meta-involvement {
  text-align: center;
  font-size: 17px;
  margin-bottom: 0.2em;
}
.popular-post-meta-layout {
  display: flex;
  justify-content: center;
  color: #c81e34;
  font-size: 12px;
}
.popular-post-meta-likes {
  margin-right: 1.2em;
  &::before {
    content: "";
    width: 14px;
    height: 12px;
    display: inline-block;
    margin-right: 0.6em;
    background-image: url('../../assets/icons/promotion/likes/likes.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.popular-post-meta-comments {
  &::before {
    content: "";
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 0.6em;
    background-image: url('../../assets/icons/promotion/likes/comments.svg');
    background-size: cover;
  }
}
.popular-post-meta-likes,
.popular-post-meta-comments {
  display: flex;
  align-items: center;
}
.popular-post-img {
  border-radius: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 100%;
  height: 0;
}
</style>
