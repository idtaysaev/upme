<template>
  <upme-page class="page-rating">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="rating">
      <div class="rating-layout">
        <div class="rating-prizes">
          <ul class="rating-prizes-list rating-prizes-list-laureates">
            <li
              v-for="prize in laureatesPrizes"
              :key="prize.place"
              class="rating-prizes-list-item">
              {{ prize.prize }}
            </li>
          </ul>
          <ul class="rating-prizes-list">
            <li
              v-for="prize in restPrizes"
              :key="prize.place"
              class="rating-prizes-list-item">
              {{ prize.place }}: {{ prize.prize }}
            </li>
          </ul>
        </div>
        <div class="rating-lists">
          <div class="rating-lists-top">
            <rating-list
              :rating="laureates"
              class="rating-list-laureates"/>
          </div>
          <div
            v-if="rest.length"
            class="rating-lists-bottom">
            <rating-list
              :rating="rest"
              :animation-delay="0.8"
              class="rating-list-rest"/>
          </div>
        </div>
      </div>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import RatingList from '@/components/rating/RatingList.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    UpmePage,
    RatingList
  },
  data () {
    return {
      title: 'Рейтинг'
    }
  },
  computed: {
    ...mapGetters('rating', [
      'laureates',
      'rest',
      'laureatesPrizes',
      'restPrizes'
    ])
  },
  mounted () {
    this.$store.dispatch('rating/init')
  }
}
</script>

<style lang="scss" scoped>
.rating {
  counter-reset: rating;
}
.rating-layout {
  @include respond-to(small) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .rating-lists {
      width: 70%;
    }

    .rating-prizes {
      width: 25%;
      padding: 2.7em 0;
    }
  }
}
.rating-prizes {
  margin-bottom: 2em;
  @include respond-to(small) {
    margin-bottom: 0;
  }
}
.rating-prizes-list {
  display: flex;
  justify-content: space-between;

  .rating-prizes-list-item {
    flex-grow: 1;
    &:not(:last-child) {
      margin-right: 1em;
    }
  }

  font-size: 10px;

  @include respond-to(x-small) {
    font-size: 16px;
  }

  @include respond-to(small) {
    font-size: 19px;
    flex-direction: column;
    .rating-prizes-list-item {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 2.4em;
      }
    }
  }
}
.rating-prizes-list-laureates {
  margin-bottom: 1em;
  @include respond-to(small) {
    margin-bottom: 2.4em;
  }
  .rating-prizes-list-item {
    &:nth-child(1) {
      background-color: gold;
      background-image: linear-gradient(29deg, #ceae56 0%, #fdeea9 50%, #c7a84d 100%);
    }

    &:nth-child(2) {
      background-color: silver;
      background-image: linear-gradient(29deg, #898989 0%, #fcfcfc 29%, #949494 64%, #f5f5f5 100%);
    }

    &:nth-child(3) {
      background-color: brown;
      background-image: linear-gradient(29deg, #75432c 0%, #bd8556 28%, #ebbd85 45%, #d2a876 61%, #ae7645 81%, #75422d 100%);
    }
  }
}
.rating-prizes-list-item {
  border-radius: 10px;
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  text-align: center;
  padding: 0.6em 1em;
  font-weight: 700;
}
.rating-lists-bottom {
  padding: 0 1em;
}
</style>
