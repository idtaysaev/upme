// import { api } from '@/plugins/http-api'

const state = {
  price: '',
  ready: false,
  action: '',
  descriptions: [],
  url: 'profile/order',
  fields: {},
  history: [],
  historyLoading: false
}

const getters = {
  missing ({ price }, getters, rootState, rootGetters) {
    return rootGetters['user/ballance'] - price < 0
  },
  missingValue ({ price }, getters, rootState, rootGetters) {
    return price - rootGetters['user/ballance']
  }
}

const mutations = {
  SET_PAYMENT (state, payload) {
    Object.assign(state, payload)
  },
  SET_HISTORY (state, payload) {
    state.history = payload
  },
  SET_INITIAL_PAYMENT (state) {
    const initial = {
      price: '',
      ready: false,
      action: '',
      descriptions: [],
      url: 'profile/order',
      fields: {},
      history: []
    }
    Object.assign(state, initial)
  },
  SET_HISTORY_LOADING_STATUS (state, payload) {
    state.loading = payload
  }
}

const actions = {
  setPayment ({ commit }, payload) {
    commit('SET_PAYMENT', payload)
  },
  async initHistory ({ commit, state }) {
    if (!state.loading) {
      await commit('SET_HISTORY_LOADING_STATUS', true)
      // await api.get('profile/payments/history')
      //   .then(response => {
      //     console.log('history', response)
      //     const history = response.data.data.payments
      //     if (history) {
      //       commit('SET_HISTORY', history.reverse())
      //     }
      //   })
      const history = await [
        {
          'date': '2018-12-17 21:10:40',
          'operation': 'Внесение',
          'value': 9500,
          'status': 'process'
        },
        {
          'date': '2018-12-17 04:05:09',
          'operation': 'Внесение',
          'value': 600,
          'status': 'process'
        },
        {
          'date': '2018-12-17 04:03:14',
          'operation': 'Внесение',
          'value': 3500,
          'status': 'process'
        },
        {
          'date': '2018-12-04 02:10:17',
          'operation': 'Внесение',
          'value': 4,
          'status': 'completed'
        },
        {
          'date': '2018-12-04 01:50:39',
          'operation': 'Внесение',
          'value': 1001,
          'status': 'process'
        },
        {
          'date': '2018-12-04 00:45:19',
          'operation': 'Внесение',
          'value': 100,
          'status': 'process'
        },
        {
          'date': '2018-12-04 00:40:21',
          'operation': 'Внесение',
          'value': 100,
          'status': 'process'
        },
        {
          'date': '2018-11-30 02:17:46',
          'operation': 'Внесение',
          'value': 4500,
          'status': 'process'
        },
        {
          'date': '2018-11-30 02:16:27',
          'operation': 'Внесение',
          'value': 3500,
          'status': 'process'
        },
        {
          'date': '2018-11-30 02:13:39',
          'operation': 'Внесение',
          'value': 4500,
          'status': 'process'
        },
        {
          'date': '2018-11-30 02:13:17',
          'operation': 'Внесение',
          'value': 2500,
          'status': 'process'
        }
      ]
      await commit('SET_HISTORY', history.reverse())
      commit('SET_HISTORY_LOADING_STATUS', false)
    }
  },
  setInitialPayment ({ commit }) {
    commit('SET_INITIAL_PAYMENT')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
