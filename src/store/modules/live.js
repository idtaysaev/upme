const state = {
  active: true
}

const getters = {
  isActive ({ active }) {
    return active
  }
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
