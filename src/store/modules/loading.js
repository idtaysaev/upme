const state = {
  loading: true
}

const mutations = {
  TOGGLE (state, payload) {
    state.loading = payload
  }
}

const actions = {
  init ({ commit }) {
    setTimeout(() => {
      commit('TOGGLE', false)
    }, 500)
  },
  async turnOn ({ commit }) {
    const maxTime = 5000
    await commit('TOGGLE', true)
    setTimeout(() => {
      commit('TOGGLE', false)
    }, maxTime)
  },
  async turnOff ({ commit }) {
    await commit('TOGGLE', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
