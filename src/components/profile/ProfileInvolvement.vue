<template>
  <div class="profile-involvement">
    <div class="profile-involvement-top">
      <section class="profile-involvement-top-section">
        <h2 class="profile-involvement-title">
          Instagram
        </h2>
        <p class="profile-involvement-description">
          <strong>Вовлечённость</strong> - это общая активность пользовательей на аккаунте или отдельном посте. Складывается из отношения лайков и комментариев к общему числу подписчиков.
        </p>
      </section>
    </div>
    <!-- <div class="profile-involvement-bottom">
      <section>
        <h2 class="profile-involvement-title">
          График вовлеченности
        </h2>
        <chart-carousel>
          <slide
            v-for="(week, i) in weeks"
            :key="i">
            <div>
              <involvement-chart
                :labels="week.labels"
                :data="week.data"
                style="position: relative;"/>
            </div>
          </slide>
        </chart-carousel>
      </section>
    </div> -->
  </div>
</template>

<script>
import InvolvementChart from '../charts/InvolvementChart.js'
import ChartCarousel from '../charts/ChartCarousel.vue'
import { Slide } from 'vue-carousel'

export default {
  components: {
    InvolvementChart,
    ChartCarousel,
    Slide
  },
  data () {
    return {
      weeks: [
        {
          labels: ['25.12', '26.12', '27.12', '28.12', '29.12', '30.12'],
          data: [0, 60, 36, 90, 70, 0]
        },
        {
          labels: ['31.12', '01.01', '02.01', '03.01', '04.01', '05.01'],
          data: [0, 20, 36, 90, 20, 0]
        }
      ]
    }
  },
  computed: {
    // week () {
    //   let posts = this.$store.state.posts.posts
    //   let i = 0
    //   let days = []
    //   while (i < posts.length) {
    //     const date = new Date(posts[i].date)
    //     // const day = date.getDate()
    //     days.push(date)
    //     i++
    //   }
    //   return days
    // }
  }
}
</script>

<style lang="scss" scoped>
.profile-involvement {
  margin-bottom: 2em;
}
.profile-involvement-top {
  // background-image: url("../../assets/img/profile/involvement-top-background.png"), linear-gradient(37deg, #c42037 0%, $color-primary 100%);
  background-color: $color-primary;
  background-image: linear-gradient(37deg, #c42037 0%, $color-primary 100%);
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  border-radius: 16px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  padding: 2em 0;

  @include respond-to(x-small) {
    padding-bottom: 4em;
  }

  @include respond-to(small) {
    padding-left: 2em;
    padding-right: 2em;
  }

  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/profile/involvement-top-background.png");
    background-size: cover;
    opacity: 0.2;
  }
}
.profile-involvement-top-section {
  position: relative;
}
.profile-involvement-bottom {
  position: relative;
  background-color: black;
  background-image: url("../../assets/img/profile/involvement-bottom-background.png");
  background-size: cover;
  color: white;
  border-radius: 16px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  padding: 2em 0.2em;
  margin-top: 2em;

  @include respond-to(small) {
    padding: 2em;
  }

  @include respond-to(x-small) {
    margin: -2em 2em 0;
  }
}
.profile-involvement-title {
  font-size: 23px;
  text-align: center;
  margin-bottom: 1em;
}
.profile-involvement-description {
  font-size: 16px;
  padding: 0 2em;
}
</style>
