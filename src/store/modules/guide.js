// import { api } from '@/plugins/http-api'

const state = {
  videos: []
}

const mutations = {
  SET_VIDEOS (state, payload) {
    state.videos = payload
  }
}

const actions = {
  initVideos ({ commit }) {
    // api.get('/profile/content')
    //   .then(response => {
    //     console.log('videos', response)
    //     const videos = response.data.data
    //     commit('SET_VIDEOS', videos)
    //   })
    const videos = [
      {
        'id': 1,
        'name': 'Биржа активности',
        'video': 'https://www.youtube.com/embed/vGD7W-e3-DY'
      },
      {
        'id': 2,
        'name': 'Продвижение',
        'video': 'https://www.youtube.com/embed/OV1YLE38nGM'
      },
      {
        'id': 3,
        'name': 'Премиум',
        'video': 'https://www.youtube.com/embed/c6ZgY4b1wKU'
      },
      {
        'id': 4,
        'name': 'WheelMe',
        'video': 'https://www.youtube.com/embed/KP_-AanPg7s'
      },
      {
        'id': 5,
        'name': 'Задания',
        'video': 'https://www.youtube.com/embed/UQKTKO3Bi0c'
      }
    ]
    commit('SET_VIDEOS', videos)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
