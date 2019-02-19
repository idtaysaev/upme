<template>
  <ol class="rating-list">
    <li
      v-for="(rating, i) in rating"
      :key="rating.username"
      :style="{ animationDelay: animationDelay + i*0.2+'s' }"
      class="rating-list-item">
      <div class="rating-list-item-layout">
        <div class="img-container">
          <a
            :href="'https://instagram.com/'+rating.username"
            target="_blank">
            <img
              :src="rating.avatar"
              :alt="rating.username">
          </a>
        </div>
        <h2 class="rating-list-item-title">
          <a
            :href="'https://instagram.com/'+rating.username"
            target="_blank">
            @{{ rating.username }}
          </a>
        </h2>
        <span class="rating-list-item-value">
          {{ rating.experience }} UP
        </span>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    rating: {
      required: true,
      type: Array
    },
    animationDelay: {
      default: 0,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.rating-list {
  border-radius: 10px;
  padding: 1em;

  @include respond-to(x-small) {
    padding: 2em 3em;
  }

  a {
    &:hover {
      opacity: 0.7;
    }
  }
}
.rating-list-laureates {
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  box-shadow: 0 0 60px rgba($color-primary, 0.6);

  .rating-list-item:nth-child(1) {
    .rating-list-item-value {
      background-color: gold;
      background-image: linear-gradient(29deg, #ceae56 0%, #fdeea9 50%, #c7a84d 100%);
    }
  }

  .rating-list-item:nth-child(2) {
    .rating-list-item-value {
      background-color: silver;
      background-image: linear-gradient(29deg, #898989 0%, #fcfcfc 29%, #949494 64%, #f5f5f5 100%);
    }
  }

  .rating-list-item:nth-child(3) {
    .rating-list-item-value {
      background-color: brown;
      background-image: linear-gradient(29deg, #75432c 0%, #bd8556 28%, #ebbd85 45%, #d2a876 61%, #ae7645 81%, #75422d 100%);
    }
  }
}
.rating-list-rest {
  background-color: white;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.rating-list-item {
  display: block;
  margin-bottom: 1.6em;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: slideUp, fadeIn;
  animation-delay: 1s;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(97) {
    .rating-list-item-layout {
      &::before {
        font-size: 21px;
      }
    }
  }
  .img-container {
    width: 71px;
    height: 71px;
    flex-shrink: 0;
  }
  img {
    border-radius: 50%;
  }
}
.rating-list-item-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3em;

  &::before {
    content: counter(rating);
    position: absolute;
    left: 0;
    counter-increment: rating;
    font-weight: 700;
    font-size: 25px;
    margin-right: 30px;
  }

  .img-container {
    margin-right: 30px;
  }
}
.rating-list-item-title {
  display: none;

  @include respond-to(x-small) {
    display: block;
    font-weight: 700;
    margin-right: 30px;

    width: 181px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @include respond-to(small) {
    font-size: 20px;
  }
}

.rating-list-item-value {
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: $color-primary;
  background-image: linear-gradient(20deg, #c42037 0%, $color-primary 100%);
  color: white;
  text-align: center;
  padding: 0.6em 1em;
  font-weight: 700;

  @include respond-to(x-small) {
    font-size: 19px;
  }
}
</style>
