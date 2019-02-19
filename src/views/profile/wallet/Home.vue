<template>
  <upme-page class="page-wallet">
    <h1 slot="header">
      {{ title }}
    </h1>
    <div class="wallet">
      <div class="wallet-top">
        <div class="wallet-top-layout">
          <section class="wallet-info">
            <h2 class="wallet-title">
              Баланс UpMe
            </h2>
            <p class="wallet-value">
              {{ numberWithSpaces(ballance) }} &#x20bd;
            </p>
          </section>
          <div>
            <router-link
              class="wallet-link"
              to="/profile/wallet/replenishment">Пополнить</router-link>
          </div>
        </div>
      </div>
      <div class="wallet-bottom">
        <h2 class="wallet-bottom-title">
          Операции
        </h2>
        <div
          v-if="history.length"
          class="table-container">
          <table>
            <tbody>
              <tr
                v-for="operation in history"
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
          Операций пока нет... <router-link to="/profile/wallet/replenishment">Пополните Ваш депозит</router-link>.
        </p>
      </div>
    </div>
  </upme-page>
</template>

<script>
import UpmePage from '@/components/layout/UpmePage.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    UpmePage
  },
  data () {
    return {
      title: 'Кошелек',
      statuses: {
        completed: 'Выполнено',
        process: 'В обработке',
        error: 'Произошла ошибка'
      }
    }
  },
  computed: {
    ...mapGetters('user', [
      'ballance'
    ]),
    ...mapState('payment', [
      'history'
    ])
  },
  mounted () {
    this.$store.dispatch('payment/initHistory')
  },
  methods: {
    numberWithSpaces (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.wallet-top {
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
.wallet-top-layout {
  text-align: center;
  @include respond-to(small) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .wallet-value {
      margin-bottom: 0;
    }
  }
}
.wallet-title {
  font-size: 33px;
}
.wallet-value {
  font-size: 33px;
  font-weight: 300;
  margin-bottom: 0.2em;

  @include respond-to(x-small) {
    font-size: 51px;
  }
}
.wallet-link {
  display: inline-block;
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
.wallet-bottom {
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  background-color: white;
  color: $color-text;
  padding: 3em 0;
}
.wallet-bottom-title {
  padding-left: 4rem;
  font-size: 33px;
  margin-bottom: 1em;
}
.operation-none-message {
  padding: 0 4rem;
}
</style>
