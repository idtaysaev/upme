// import { api } from '@/plugins/http-api'

const state = {
  payments: [],
  coeff: 0.3
}

const getters = {
  payments (state) {
    return state.payments.filter(el => el.status === 'complete')
  },
  sum (state, getters) {
    let values = getters.payments.map(el => el.value)
    return Math.round(values.reduce((prev, cur) => prev + cur * state.coeff, 0))
  },
  link (state, getters, rootState, rootGetters) {
    return `https://upmeapp.ru/?ref=${rootGetters['user/id']}`
  }
}

const mutations = {
  SET_PAYMENTS (state, payload) {
    state.payments = payload
  }
}

const actions = {
  init ({ commit }) {
    // api.get('profile/referals')
    //   .then(response => {
    //     console.log('referal', response)
    //     if (response.data.data) {
    //       const payments = response.data.data.payments
    //       if (payments) {
    //         commit('SET_PAYMENTS', payments.reverse())
    //       }
    //     }
    //   })
    const payments = [
      {
        'date': '2018-12-04 02:10:22',
        'operation': 'Внесение',
        'value': 3,
        'status': 'complete'
      },
      {
        'date': '2018-12-04 02:08:05',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 02:06:54',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:59:30',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:55:23',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:51:34',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:51:03',
        'operation': 'Внесение',
        'value': 101,
        'status': 'complete'
      },
      {
        'date': '2018-12-04 01:48:29',
        'operation': 'Внесение',
        'value': 101,
        'status': 'complete'
      },
      {
        'date': '2018-12-04 01:44:43',
        'operation': 'Внесение',
        'value': 1,
        'status': 'complete'
      },
      {
        'date': '2018-12-04 01:41:50',
        'operation': 'Внесение',
        'value': 1,
        'status': 'error'
      },
      {
        'date': '2018-12-04 01:39:42',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:37:23',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:33:44',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:32:07',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:31:07',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:19:38',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:18:57',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:16:50',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:11:42',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 01:03:46',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 00:54:00',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 00:21:23',
        'operation': 'Внесение',
        'value': 1,
        'status': 'process'
      },
      {
        'date': '2018-12-04 00:20:45',
        'operation': 'Внесение',
        'value': 10,
        'status': 'process'
      },
      {
        'date': '2018-12-04 00:17:05',
        'operation': 'Внесение',
        'value': 550,
        'status': 'process'
      },
      {
        'date': '2018-12-02 13:57:56',
        'operation': 'Внесение',
        'value': 2226,
        'status': 'process'
      },
      {
        'date': '2018-11-29 21:17:10',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 18:29:41',
        'operation': 'Внесение',
        'value': 133337,
        'status': 'process'
      },
      {
        'date': '2018-11-29 18:08:05',
        'operation': 'Внесение',
        'value': 4500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 15:58:39',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 15:58:22',
        'operation': 'Внесение',
        'value': 5500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 15:56:29',
        'operation': 'Внесение',
        'value': 5000,
        'status': 'process'
      },
      {
        'date': '2018-11-29 15:31:34',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 14:50:50',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 14:50:16',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 14:48:36',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 14:44:39',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 14:43:50',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 13:54:51',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 13:50:14',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 12:45:39',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 12:45:35',
        'operation': 'Внесение',
        'value': 1300,
        'status': 'process'
      },
      {
        'date': '2018-11-29 12:21:03',
        'operation': 'Внесение',
        'value': 10000,
        'status': 'process'
      },
      {
        'date': '2018-11-29 12:10:25',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 11:45:20',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 03:19:37',
        'operation': 'Внесение',
        'value': 14000,
        'status': 'process'
      },
      {
        'date': '2018-11-29 03:14:06',
        'operation': 'Внесение',
        'value': 4500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 03:12:36',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 03:07:44',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 03:04:08',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:51:13',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:50:33',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:50:06',
        'operation': 'Внесение',
        'value': 4500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:49:57',
        'operation': 'Внесение',
        'value': 5500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:47:02',
        'operation': 'Внесение',
        'value': 2500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:44:52',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:43:46',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:42:39',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:41:05',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:40:24',
        'operation': 'Внесение',
        'value': 2500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:32:10',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:31:47',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:30:27',
        'operation': 'Внесение',
        'value': 3500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:29:38',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:28:51',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 02:20:04',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-29 01:09:41',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:53:46',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:51:43',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:51:39',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:51:22',
        'operation': 'Внесение',
        'value': 100,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:50:17',
        'operation': 'Внесение',
        'value': 500,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:48:05',
        'operation': 'Внесение',
        'value': 0,
        'status': 'process'
      },
      {
        'date': '2018-11-28 23:48:02',
        'operation': 'Внесение',
        'value': 1500,
        'status': 'process'
      }
    ]
    commit('SET_PAYMENTS', payments.reverse())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
