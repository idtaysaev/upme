const state = {
  photographers: []
}

const getters = {
  search ({ photographers }) {
    return nickname => photographers.some(photographer => photographer.nickname === nickname)
  },
  photosOf ({ photographers }) {
    return nickname => photographers.find(photographer => photographer.nickname === nickname).photos
  },
  isEmpty ({ photographers }) {
    return photographers.length < 1
  },
  firstLink ({ photographers }, getters) {
    if (!getters.isEmpty) {
      return photographers[0].nickname
    }
  }
}

const mutations = {
  SET_PHOTOGRAPHERS (state, payload) {
    state.photographers = payload
  }
}

const actions = {
  async init ({ commit }) {
    const photographers = await [
      {
        id: 0,
        title: 'Мобильная фотография от Алексея Давыдова',
        nickname: 'davydaleks',
        url: '',
        avatar: 'https://instagram.fiev2-1.fna.fbcdn.net/vp/7ba8820dbf21eea4e3c4e82183217142/5CBFEC6D/t51.2885-15/e35/46556319_215264916027125_822394473106728166_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
        photos: [
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/7ba8820dbf21eea4e3c4e82183217142/5CBFEC6D/t51.2885-15/e35/46556319_215264916027125_822394473106728166_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/f875a7ddde7bf9a03d371b36c6237a8a/5CBF35CC/t51.2885-15/e35/47107726_2176937919004653_445397343239363493_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/8cba18537d7f297ee424f44fea0f990f/5CD52ACB/t51.2885-15/e35/47151769_1935334313228940_1357379333643877713_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/af462fd2942bc99a05c58217821c020f/5C291539/t51.2885-15/e35/44390617_303453043839408_3132233320009522277_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/3430d5053279ed933a52698252824ff7/5CC42E7F/t51.2885-15/e35/44626712_1988632174559485_6361823786951608845_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/32a6d366a0a998dca4cb8062fe1c1576/5C295456/t51.2885-15/e35/44298998_479286875927541_324208847507314603_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/770adb6d0349d0e4f36fbd3b5676be74/5CB9DA14/t51.2885-15/e35/45370869_325951138192189_1639692496636039131_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/72e0a3560d604fcfa83d5591d1d8961f/5C28CF65/t51.2885-15/e35/43913535_711621875870109_8907807070192665_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/0b4882eee7aa7964c340c314e08f749d/5CB63334/t51.2885-15/e35/43816450_186337945608034_6045855059494122061_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net'
        ]
      },
      {
        id: 1,
        title: 'Мобильная фотография от Алексея Давыдова 2',
        nickname: 'davydaleks2',
        url: '',
        avatar: 'https://instagram.fiev2-1.fna.fbcdn.net/vp/7ba8820dbf21eea4e3c4e82183217142/5CBFEC6D/t51.2885-15/e35/46556319_215264916027125_822394473106728166_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
        photos: [
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/9f4061d29c1efd32fd885f9dd513c2f4/5CD9910F/t51.2885-15/e35/43779561_1899803183452381_265681051047871978_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net'
        ]
      },
      {
        id: 2,
        title: 'Мобильная фотография от Алексея Давыдова',
        nickname: 'davydaleks3',
        url: '',
        avatar: 'https://instagram.fiev2-1.fna.fbcdn.net/vp/7ba8820dbf21eea4e3c4e82183217142/5CBFEC6D/t51.2885-15/e35/46556319_215264916027125_822394473106728166_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
        photos: [
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/7ba8820dbf21eea4e3c4e82183217142/5CBFEC6D/t51.2885-15/e35/46556319_215264916027125_822394473106728166_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/f875a7ddde7bf9a03d371b36c6237a8a/5CBF35CC/t51.2885-15/e35/47107726_2176937919004653_445397343239363493_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/8cba18537d7f297ee424f44fea0f990f/5CD52ACB/t51.2885-15/e35/47151769_1935334313228940_1357379333643877713_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/af462fd2942bc99a05c58217821c020f/5C291539/t51.2885-15/e35/44390617_303453043839408_3132233320009522277_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/3430d5053279ed933a52698252824ff7/5CC42E7F/t51.2885-15/e35/44626712_1988632174559485_6361823786951608845_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/32a6d366a0a998dca4cb8062fe1c1576/5C295456/t51.2885-15/e35/44298998_479286875927541_324208847507314603_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/770adb6d0349d0e4f36fbd3b5676be74/5CB9DA14/t51.2885-15/e35/45370869_325951138192189_1639692496636039131_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/72e0a3560d604fcfa83d5591d1d8961f/5C28CF65/t51.2885-15/e35/43913535_711621875870109_8907807070192665_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'https://instagram.fiev2-1.fna.fbcdn.net/vp/0b4882eee7aa7964c340c314e08f749d/5CB63334/t51.2885-15/e35/43816450_186337945608034_6045855059494122061_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net'
        ]
      }
    ]
    commit('SET_PHOTOGRAPHERS', photographers)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
