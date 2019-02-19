const state = {
  loading: false
}

const getters = {
  profileLoading ({ loading }) {
    return loading
  }
}

const mutations = {
  SET_PROFILE_LOADING_STATUS (state, payload) {
    state.loading = payload
  }
}

const actions = {
  async initProfile ({ commit, dispatch, getters }) {
    if (!getters.profileLoading) {
      await commit('SET_PROFILE_LOADING_STATUS', true)
      await dispatch('initLoadingStatuses')
      await dispatch('loading/turnOn')
      await dispatch('user/init')
      await dispatch('notifications/init')
      setTimeout(() => {
        dispatch('loading/turnOff')
      }, 400)
      await Promise.all([
        dispatch('giveaway/init'),
        dispatch('rating/init'),
        dispatch('posts/init'),
        dispatch('payment/initHistory'),
        dispatch('contacts/init'),
        dispatch('activity/init'),
        dispatch('tasks/init'),
        dispatch('premium/init'),
        dispatch('referal/init'),
        dispatch('guide/initVideos'),
        dispatch('content/photo/init')
      ])
      commit('SET_PROFILE_LOADING_STATUS', false)
    }
  },
  initLoadingStatuses ({ commit }) {
    return Promise.all([
      commit('activity/SET_LOADING_STATUS', false),
      commit('giveaway/SET_LOADING_STATUS', false),
      commit('notifications/SET_LOADING_STATUS', false),
      commit('payment/SET_HISTORY_LOADING_STATUS', false),
      commit('rating/SET_LOADING_STATUS', false),
      commit('tasks/SET_LOADING_STATUS', false),
      commit('user/SET_LOADING_STATUS', false),
      commit('posts/SET_LOADING_STATUS', false)
    ])
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
