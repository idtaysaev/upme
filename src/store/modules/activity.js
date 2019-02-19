// import { api } from '@/plugins/http-api'

const state = {
  comments: [],
  canComment: false,
  commentsLeft: 10,
  loading: false
}

const getters = {
  canComment (state) {
    return state.canComment || state.commentsLeft <= 0
  },
  commentsLeft (state) {
    return state.commentsLeft
  }
}

const mutations = {
  SET_COMMENTS (state, payload) {
    state.comments = payload
  },
  SET_STATUS (state, payload) {
    state.canComment = payload
  },
  SET_COMMENTS_LEFT (state, payload) {
    state.commentsLeft = payload
  },
  SET_LOADING_STATUS (state, payload) {
    state.loading = payload
  }
}

const actions = {
  async init ({ commit, state }) {
    if (!state.loading) {
      await commit('SET_LOADING_STATUS', true)
      // await api.get('profile/comments')
      //   .then(response => {
      //     console.log('comments', response)
      //     const comments = response.data.data.comments
      //     const canComment = response.data.data.can_comment
      //     const commentsLeft = response.data.data.comments_need
      //     commit('SET_COMMENTS', comments)
      //     commit('SET_STATUS', canComment)
      //     commit('SET_COMMENTS_LEFT', commentsLeft)
      //   })
      const data = await {
        'can_comment': false,
        'comments': [
          {
            'id': 9,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/Bpo7BTrgab_/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/877d14ed456bb82c338941585bdb4c88/5CA2404A/t51.2885-15/e35/44498874_1983399061959789_8246959512038713562_n.jpg',
            'comment': 'Как вам фото?',
            'status': 1
          },
          {
            'id': 10,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/BqNhCweBJHg/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/d5663220e1ddc74ccac8a3dc8434cd70/5C9135EC/t51.2885-15/e35/44509954_572721873157660_8287239123249956240_n.jpg',
            'comment': 'Отметь друзей или оцени платформу',
            'status': 1
          },
          {
            'id': 11,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/BqFuIzPlyeB/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/c6f7dfebcf7827f72b69f4a38301d2bc/5CA796FD/t51.2885-15/e35/44672752_457508037990570_5831714337484112733_n.jpg',
            'comment': 'Интересно ваше отношение к тем, кто не платит долги',
            'status': 1
          },
          {
            'id': 12,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/BqPo1MBgs_l/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/774c8b2544da8488b274e4a930ceeac6/5CA688A0/t51.2885-15/e35/42515509_360036098084760_994884927798506742_n.jpg',
            'comment': 'Кто вас вдохновляет?',
            'status': 1
          },
          {
            'id': 13,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/Bq7fAXYFuVk/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/6502282d33743ab4c0a39ba55af7d3d7/5C965BEE/t51.2885-15/e35/45577388_2189068838030326_497552678014790050_n.jpg',
            'comment': 'Какие у вас ближайшие цели?',
            'status': 1
          },
          {
            'id': 14,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/Bq0be8mlpkj/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/b5e7e9ae0c1776e3bc7a9f573e1be543/5CA02D04/t51.2885-15/e35/44889253_202570450675046_8531483695160250553_n.jpg',
            'comment': 'Можно ли нарушить закон во благо?',
            'status': 1
          },
          {
            'id': 15,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/BqzwjcgFI7A/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/207d4029895cc2de967e647bac77d3db/5CADAB4C/t51.2885-15/e35/45335363_584618125326501_4996274257434051013_n.jpg',
            'comment': 'Запускали ли вы свой проект?',
            'status': 1
          },
          {
            'id': 16,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/BqupaMsFPYo/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/775287d2b8295bc4ecca157d05d4c54c/5CA6A180/t51.2885-15/e35/44923109_1880167102020704_3269940851557287661_n.jpg',
            'comment': 'Раскачиваете ли вы свой Инстаграм?',
            'status': 1
          },
          {
            'id': 17,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/Bqpeg0yl6uR/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/329c52ad160c522dc1533f9e0f9ddbbb/5C8DE664/t51.2885-15/e35/44611491_584916875274074_1331523543800973036_n.jpg',
            'comment': 'Как вы формируете свое окружение?',
            'status': 1
          },
          {
            'id': 18,
            'user_id': 2,
            'url': 'https://www.instagram.com/p/Bq2mehAAEC3/',
            'image': 'https://scontent-arn2-1.cdninstagram.com/vp/5974c4e0c9018c72d5171aca2aca54db/5CB1C201/t51.2885-15/e35/46721257_2545543982128935_2050529107586887875_n.jpg',
            'comment': 'Ходите ли вы на выставки?',
            'status': 1
          }
        ],
        'comments_need': 10
      }
      const comments = data.comments
      const canComment = data.can_comment
      const commentsLeft = data.comments_need
      commit('SET_COMMENTS', comments)
      commit('SET_STATUS', canComment)
      commit('SET_COMMENTS_LEFT', commentsLeft)
      commit('SET_LOADING_STATUS', false)
    }
  },
  updateCommentsLeft ({ commit, state }) {
    let count = state.commentsLeft - 1
    commit('SET_COMMENTS_LEFT', count)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
