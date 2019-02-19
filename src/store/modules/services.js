const state = {
  likeStandart: {
    id: 1,
    max: 5000000,
    min: 100,
    price: 0.07
  },
  likeAuto: {
    id: 2,
    max: 5000000,
    min: 100,
    price: 0.07
  },
  follower: {
    id: 3,
    max: 50000,
    min: 100,
    price: 0.175
  },
  saving: {
    id: 4,
    max: 1000000,
    min: 250,
    price: 0.07
  },
  video: {
    id: 5,
    max: 10000000,
    min: 500,
    price: 0.014
  },
  storie: {
    id: 6,
    max: 25000,
    min: 100,
    price: 0.14
  },
  live: {
    id: 7,
    max: 50000,
    min: 200,
    price: 0.7
  },
  spin: {
    id: 8,
    max: 1000,
    min: 1,
    price: 10
  }
}

const mutations = {
  SET_SERVICES (state, payload) {
    Object.assign(state, payload)
  }
}

const actions = {
  setServices ({ commit }, payload) {
    commit('SET_SERVICES', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
