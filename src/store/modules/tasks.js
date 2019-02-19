// import { api } from '@/plugins/http-api'

const state = {
  list: [],
  loading: false
}

const mutations = {
  SET_TASKS (state, payload) {
    state.list = payload
  },
  SET_LOADING_STATUS (state, payload) {
    state.loading = payload
  }
}

const actions = {
  async init ({ commit, state }) {
    if (!state.loading) {
      await commit('SET_LOADING_STATUS', true)
      // await api.get('profile/tasks')
      //   .then(response => {
      //     console.log('tasks', response)
      //     const tasks = response.data.data.tasks
      //     commit('SET_TASKS', tasks)
      //   })
      const tasks = await [
        {
          'id': 1,
          'title': 'Подпишись на наш Instagram',
          'description': null,
          'instruction': null,
          'url': 'https://www.instagram.com/upme_app/',
          'experience': 50,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 2,
          'title': 'Подпишись на группу ВК',
          'description': null,
          'instruction': null,
          'url': 'https://vk.com/upmeapp',
          'experience': 50,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 3,
          'title': 'Оставь комментарий под постом в Instagram',
          'description': null,
          'instruction': null,
          'url': 'https://www.instagram.com/p/BqNhCweBJHg/',
          'experience': 100,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 4,
          'title': 'Оставь комментарий под постом в ВК',
          'description': null,
          'instruction': null,
          'url': 'https://vk.com/upmeapp?w=wall-173232272_15',
          'experience': 100,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 5,
          'title': 'Напиши отзыв в direct',
          'description': null,
          'instruction': null,
          'url': 'https://www.instagram.com/upme_app/',
          'experience': 50,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 6,
          'title': 'Запиши сторис с отзывом и укажи наш профиль Instagram',
          'description': null,
          'instruction': null,
          'url': 'https://www.instagram.com/',
          'experience': 100,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 7,
          'title': 'Выложи пост с хэштегом #upme',
          'description': null,
          'instruction': null,
          'url': 'https://www.instagram.com/',
          'experience': 100,
          'type': 2,
          'date': null,
          'status': 1
        },
        {
          'id': 8,
          'title': 'Выложи пост в тематике лайфстайл',
          'description': null,
          'instruction': null,
          'url': 'https://www.instagram.com/',
          'experience': 100,
          'type': 2,
          'date': null,
          'status': 1
        }
      ]
      await commit('SET_TASKS', tasks)
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
