const state = {
  plans: []
}

const getters = {
  plans (state) {
    return state.plans
  },
  isPremium (state, getters, rootState) {
    return !!rootState.user.subscription
  },
  premiumEnds (state, getters, rootState) {
    return rootState.user.subscription_date
  }
}

const mutations = {
  SET_PLANS (state, payload) {
    state.plans = payload
  }
}

const actions = {
  async init ({ commit }) {
    let plans = await [
      {
        title: 'Навсегда',
        price: 2990,
        oldPrice: 8000
      },
      {
        title: '7 дней',
        price: 250
      },
      {
        title: '1 месяц',
        price: 590,
        oldPrice: 1000
      },
      {
        title: '6 месяцев',
        price: 1590,
        oldPrice: 3500
      }
    ]
    commit('SET_PLANS', plans)
    // await api.get('profile/premium')
    //   .then(response => {
    //     console.log('premium', response)
    //     let premium = response.data.data
    //     context.commit('SET_POSTS', premium)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
