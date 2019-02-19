// import { api } from '@/plugins/http-api'

const state = {
  list: [
    {
      title: 'Instagram',
      background: 'linear-gradient(39deg, #fbac49 0%, #e63760 49%, #7e3a94 100%)',
      img: require('@/assets/icons/contacts/inst.svg'),
      url: 'https://instagram.com'
    },
    {
      title: 'Telegram',
      background: 'linear-gradient(39deg, #15afff 0%, #1552ff 100%)',
      img: require('@/assets/icons/contacts/tg.svg'),
      url: 'https://t.me'
    },
    {
      title: 'VK',
      background: 'linear-gradient(39deg, #01a0c6 0%, #8a2de0 100%)',
      img: require('@/assets/icons/contacts/vk.svg'),
      url: 'https://vk.com'
    },
    {
      title: 'YouTube',
      background: 'linear-gradient(39deg, #c42037 0%, $color-primary 100%)',
      img: require('@/assets/icons/contacts/youtube.svg'),
      url: 'https://youtube.com'
    },
    {
      title: 'Facebook',
      background: 'linear-gradient(39deg, #00ceff 0%, #33249f 100%)',
      img: require('@/assets/icons/contacts/fb.svg'),
      url: 'https://facebook.com'
    }
  ]
}

const mutations = {
  SET_URLS (state, payload) {
    payload.forEach((el, i) => {
      state.list[i].url = el
    })
  }
}

const actions = {
  init ({ commit }) {
    // api.get('profile/socials')
    //   .then(response => {
    //     const urls = response.data.data
    //     commit('SET_URLS', urls)
    //     console.log('socials', response)
    //   })
    const urls = [
      'https://www.instagram.com/upme_app/',
      'http://t.me/upme_support',
      'https://vk.com/upmeapp',
      'https://www.youtube.com/channel/UCsop8u8yegf0FxP1DBQSI1w',
      'https://www.facebook.com/upmeappru'
    ]
    commit('SET_URLS', urls)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
