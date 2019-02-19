const state = {
  active: false
}

const mutations = {
  TOGGLE (state, payload) {
    state.active = payload
  }
}

const actions = {
  open ({ commit }) {
    commit('TOGGLE', true)
  },
  close ({ commit }) {
    commit('TOGGLE', false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
