// import { api } from '@/plugins/http-api'

const state = {
  giveaways: [],
  chat: '',
  loading: false
}

const mutations = {
  SET_GIVEAWAYS (state, payload) {
    state.giveaways = payload
  },
  SET_CHAT (state, payload) {
    state.chat = payload
  },
  SET_LOADING_STATUS (state, payload) {
    state.loading = payload
  }
}

const actions = {
  async init ({ commit, state }) {
    if (!state.loading) {
      await commit('SET_LOADING_STATUS', true)
      // await api.get('profile/giveaways')
      //   .then(response => {
      //     console.log('giveaways', response)
      //     const giveaways = response.data.data.giveaways
      //     const chat = response.data.data.giveaway_chat
      //     commit('SET_GIVEAWAYS', giveaways)
      //     commit('SET_CHAT', chat)
      //   })
      const data = {
        'giveaways': [
          {
            'id': 1,
            'title': 'UpStart Give',
            'image': 'https://upmeapp.ru/img/test/upme_giveaway.svg',
            'max_users': 100,
            'current_users': 1,
            'params': [
              {
                'title': '1 млн',
                'text': 'Подписчиков',
                'class': 'followers'
              },
              {
                'title': '50%',
                'text': 'Живут в России',
                'class': 'location'
              },
              {
                'title': '115 000',
                'text': 'Лайков в среднем',
                'class': 'likes'
              },
              {
                'title': '50%',
                'text': 'В возрасте 18-24 лет',
                'class': 'age'
              },
              {
                'title': '3500',
                'text': 'Комментариев в среднем',
                'class': 'comments'
              },
              {
                'title': '70%',
                'text': 'Женщины',
                'class': 'sex'
              }
            ],
            'blogers': [
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              },
              {
                'avatar': '/img/test/bloger.png',
                'name': 'Константин',
                'surname': 'Константинопольский',
                'username': 'henrycavill',
                'followers': '2,3 млн'
              }
            ],
            'followers': 5000,
            'date_start': '2018/12/10 00:00:00',
            'price': 4000,
            'type': 2
          }
        ],
        'giveaway_chat': 'https://t.me/joinchat/CJRP9FgriEATK_fC7GgdgA'
      }
      const giveaways = data.giveaways
      const chat = data.giveaway_chat
      commit('SET_GIVEAWAYS', giveaways)
      commit('SET_CHAT', chat)
      commit('SET_LOADING_STATUS', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
