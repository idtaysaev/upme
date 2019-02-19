<template>
  <div class="profile-audience">
    <section>
      <h2 class="profile-audience-title">
        Аудитория
      </h2>
      <chart-carousel>
        <slide
          v-for="(stat, i) in audience"
          :key="i">
          <div>
            <audience-chart
              :labels="stat.labels"
              :data="stat.data"
              :colors="stat.colors"
              :title="stat.title"/>
          </div>
        </slide>
      </chart-carousel>
    </section>
  </div>
</template>

<script>
import AudienceChart from '../charts/AudienceChart.js'
import ChartCarousel from '../charts/ChartCarousel.vue'
import { Slide } from 'vue-carousel'

export default {
  components: {
    AudienceChart,
    ChartCarousel,
    Slide
  },
  data () {
    return {
      audience: [
        {
          title: 'Пол',
          labels: ['Мужчины', 'Женщины'],
          data: [60, 40],
          colors: [
            '#91d5fa',
            '#e57689'
          ]
        },
        {
          title: 'Страны',
          labels: ['Россия', 'Украина', 'Казахстан', 'Беларусь', 'Франция', 'Другие'],
          data: [77, 4, 4, 1, 1, 13],
          colors: [
            '#91d5fa',
            '#e57689',
            '#ecbb3b',
            '#3f8f50',
            '#4977d7',
            '#e0e0e0'
          ]
        },
        {
          title: 'Города',
          labels: ['Москва', 'Санкт-Петербург', 'Казань', 'Краснодар', 'Екатеринбург', 'Тюмень', 'Уфа', 'Другие'],
          data: [40, 9, 7, 5, 1, 1, 1, 23],
          colors: [
            '#91d5fa',
            '#e57689',
            '#ecbb3b',
            '#3f8f50',
            '#91d5fa',
            '#e57689',
            '#4977d7',
            '#e0e0e0'
          ]
        },
        {
          title: 'Аудитория по подписчикам',
          labels: ['0-10', '10-100', '100-1к', '1к-10к', '10к-100к', '100к-1М', '1М+'],
          data: [40, 9, 7, 5, 1, 1, 1],
          colors: [
            '#91d5fa',
            '#e57689',
            '#ecbb3b',
            '#3f8f50',
            '#91d5fa',
            '#e57689',
            '#4977d7'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-audience {
  position: relative;
  background-color: #f1f1f1;
  border-radius: 16px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  padding: 2em;
  margin-bottom: 2em;

  /deep/ .chart-carousel {
    .VueCarousel-navigation-button {
      color: $color-text;
    }
    .VueCarousel-navigation {
      position: absolute;
      top: 3.4em;
      right: 32%;

      @include respond-to(x-small) {
        top: 1.5em;
        right: 3em;
      }

      &::before {
        content: "Тип";
        left: -4.6em;
      }
    }
  }

}
.profile-audience-title {
  font-size: 23px;
  text-align: center;
  margin-bottom: 1em;
}
</style>
