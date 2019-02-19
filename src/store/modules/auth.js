// import { api } from '@/plugins/http-api'

const state = {
  token: localStorage.getItem('token') || '',
  status: ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const mutations = {
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, token) {
    state.status = 'success'
    state.token = token
  },
  AUTH_ERROR (state, status = 'error') {
    state.status = status
    state.token = ''
  },
  AUTH_LOGOUT (state) {
    state.token = ''
    state.status = ''
  }
}

const actions = {
  async authRequest ({ commit, dispatch }, user) {
    // const data = {
    //   login: user.login,
    //   password: user.password,
    //   remember: user.remember
    // }
    // try {
    //   await api.post('login', data)
    //     .then(response => {
    //       console.log('login', response)
    //       if (response.data.data) {
    //         const token = response.data.data.token
    //         localStorage.setItem('token', token)
    //         commit('AUTH_SUCCESS', token)
    //         api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //         return 'success'
    //       } else {
    //         const error = 'Неверный логин или пароль'
    //         commit('AUTH_ERROR', error)
    //         dispatch('cleanSession')
    //         return error
    //       }
    //     })
    // } catch (error) {
    //   commit('AUTH_ERROR', error)
    //   dispatch('cleanSession')
    // }
    const token = await 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTA1OTE2NTUsImV4cCI6MTU1MDU5ODg1NSwianRpIjoiNVZwNFU1RURXTDdWdEpNQ3A3c3BjaSIsInN1YiI6MTM3MywidXNlcm5hbWUiOiJoZW5yeWNhdmlsbCJ9.QGakB1M4by9eQqc_Lmr2o5eb0YpBp8I6-tSW47Hah9g'
    localStorage.setItem('token', token)
    await commit('AUTH_SUCCESS', token)
    return 'success'
  },
  async logoutRequest ({ commit, dispatch }) {
    // await api.get('logout')
    //   .then(response => {
    //     commit('AUTH_LOGOUT')
    //     dispatch('cleanSession')
    //     return 'success'
    //   })
    //   .catch(error => {
    //     return error
    //   })
    commit('AUTH_LOGOUT')
    dispatch('cleanSession')
    return 'success'
  },
  cleanSession () {
    localStorage.removeItem('token')
    // delete api.defaults.headers.common['Authorization']
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
