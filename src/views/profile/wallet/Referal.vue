<template>
  <upme-page class="page-activity">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="referal">
      <div class="referal-top">
        <section class="referal-info">
          <h2 class="referal-title">
            Твоя реферальная ссылка:
          </h2>
          <p class="referal-value">
            {{ link }}
            <button
              v-clipboard:copy="link"
              v-clipboard:success="onCopy"
              class="referal-copy">Скопировать</button>
          </p>
        </section>
      </div>
      <div class="referal-bottom">
        <div class="referal-sum">
          <h2 class="referal-sum-title">
            Всего заработано:
          </h2>
          <p class="referal-sum-value">
            {{ numberWithSpaces(sum) }} &#x20bd;
          </p>
        </div>
        <h2 class="referal-bottom-title">
          Оплаты
        </h2>
        <div
          v-if="payments.length"
          class="table-container">
          <table>
            <tbody>
              <tr
                v-for="operation in payments"
                :key="operation.date">
                <td class="operation-date">
                  {{ operation.date }}
                </td>
                <!-- <td class="operation-type">
                  <b>
                    {{ operation.type }}
                  </b>
                </td>
                <td class="operation-card">
                  {{ operation.card }}
                </td> -->
                <td class="operation-operation">
                  {{ operation.operation }}
                </td>
                <td class="operation-value">
                  <b>
                    {{ operation.value }} &#x20bd;
                  </b>
                </td>
                <td class="operation-status">
                  {{ statuses[operation.status] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          v-else
          class="operation-none-message">
          Пока никто не производил оплату.
        </p>
      </div>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Реферальная система',
      statuses: {
        completed: 'Выполнено',
        process: 'В обработке',
        error: 'Произошла ошибка'
      }
    }
  },
  computed: {
    ...mapGetters('referal', [
      'payments',
      'sum',
      'link'
    ])
  },
  methods: {
    numberWithSpaces (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    onCopy () {
      alert('Ссылка успешно скопирована')
    }
  }
}
</script>

<style lang="scss" scoped>
.referal-top {
  background-color: $color-primary;
  background-image: linear-gradient(36deg, #c42037 0%, $color-primary 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 2em;
  padding: 2em;
  box-shadow: 0 0 60px rgba($color-primary, 0.6);

  @include respond-to(small) {
    padding: 3em 4em;
  }
}
.referal-top-layout {
  text-align: center;
  @include respond-to(small) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

  }
}
.referal-title {
  font-size: 20px;
  margin-bottom: 1em;
  @include respond-to(x-small) {
    font-size: 24px;
  }
  @include respond-to(small) {
    font-size: 33px;
  }
}
.referal-value {
  background: white;
  color: rgba($color-text, 0.7);
  border-radius: 10px;
  // font-size: 16px;
  padding: 0.6em 1.6em;
  box-shadow: 10px 17px 38px rgba(0, 0, 0, 0.33);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @include respond-to(x-small) {
    font-size: 23px;
  }
}
.referal-copy {
  background: none;
  color: #eb0d1d;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.6;
  }
}
.referal-link {
  box-shadow: 0 8px 46px rgba(0, 0, 0, 0.46);
  background-color: white;
  color: $color-primary;
  border-radius: 10px;
  padding: 0.6em 1em;
  font-size: 26px;

  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.46);
  }
}
.referal-bottom {
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: white;
  color: $color-text;
  padding: 3em 0;
}
.referal-sum {
  padding: 0 2rem;
  color: #17d74d;
  margin-bottom: 1em;
  @include respond-to(x-small) {
    padding: 0 4rem;
  }
}
.referal-sum-title {
  font-size: 20px;
  @include respond-to(x-small) {
    font-size: 24px;
  }
  @include respond-to(small) {
    font-size: 33px;
  }
}
.referal-sum-value {
  font-size: 33px;
  font-weight: 300;
  @include respond-to(x-small) {
    font-size: 43px;
  }
  @include respond-to(small) {
    font-size: 53px;
  }
}
.referal-bottom-title {
  padding-left: 2rem;
  font-size: 33px;
  margin-bottom: 1em;
  @include respond-to(x-small) {
    padding-left: 4rem;
  }
}
.operation-none-message {
  padding: 0 2rem;
  @include respond-to(x-small) {
    padding: 0 4rem;
  }
}
</style>
