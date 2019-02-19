// import { api } from '@/plugins/http-api'

const state = {
  rating: [],
  prizes: [],
  loading: false
}

const getters = {
  laureates (state) {
    return state.rating.slice(0, 3)
  },
  rest (state) {
    return state.rating.slice(3)
  },
  laureatesPrizes (state) {
    return state.prizes.slice(0, 3)
  },
  restPrizes (state) {
    return state.prizes.slice(3)
  }
}

const mutations = {
  SET_RATING (state, payload) {
    state.rating = payload
  },
  SET_PRIZES (state, payload) {
    state.prizes = payload
  },
  SET_LOADING_STATUS (state, payload) {
    state.loading = payload
  }
}

const actions = {
  async init ({ commit, state }) {
    if (!state.loading) {
      await commit('SET_LOADING_STATUS', true)
      // await api.get('profile/raiting')
      //   .then(response => {
      //     console.log('rating', response)
      //     const rating = response.data.data.leaders
      //     const prizes = [
      //       {
      //         place: '1',
      //         prize: 'Премиум на 3 месяца'
      //       },
      //       {
      //         place: '2',
      //         prize: 'Премиум на месяц'
      //       },
      //       {
      //         place: '3',
      //         prize: 'Премиум на 2 недели'
      //       },
      //       {
      //         place: '4-10',
      //         prize: '1000 UP'
      //       },
      //       {
      //         place: '11-25',
      //         prize: '500 UP'
      //       },
      //       {
      //         place: '26-50',
      //         prize: '250 UP'
      //       },
      //       {
      //         place: '51-100',
      //         prize: '5 спинов'
      //       }
      //     ]
      //     commit('SET_RATING', rating)
      //     commit('SET_PRIZES', prizes)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
      const rating = [
        {
          'id': 1379,
          'first_name': 'Алексей',
          'last_name': 'Абузяров',
          'username': 'Alexabuzyarov',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/e79f3053375cb462e669ed0020f0472f/5C9F3F46/t51.2885-19/s150x150/10608106_994162147327708_443459350_a.jpg',
          'experience': 657
        },
        {
          'id': 1388,
          'first_name': 'Елизавета ',
          'last_name': 'Галимова',
          'username': 'galimova_elizaveta',
          'avatar': '/img/no-avatar.png',
          'experience': 550
        },
        {
          'id': 1393,
          'first_name': 'Алёна',
          'last_name': 'Швец',
          'username': 'odinokigolubka',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/69207fd24eefeea651874ddd5c66b401/5C9DB133/t51.2885-19/s150x150/30602190_1676872469061336_4890567942992822272_n.jpg',
          'experience': 530
        },
        {
          'id': 1398,
          'first_name': 'Лера',
          'last_name': 'Варнакова',
          'username': 'leravarnakova',
          'avatar': '/img/no-avatar.png',
          'experience': 517
        },
        {
          'id': 1392,
          'first_name': 'Тимур ',
          'last_name': 'Вахитов',
          'username': 'inkognito_inkognito11',
          'avatar': 'https://instagram.fhel5-1.fna.fbcdn.net/vp/d4b03697979a881841e59daaf2fe2684/5CA9347A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg',
          'experience': 504
        },
        {
          'id': 1411,
          'first_name': 'Андрей',
          'last_name': 'Камбур',
          'username': 'kambur19',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/5f5e2bc7347e0b53a193d8f8c3d794f1/5C9C1E71/t51.2885-19/s150x150/43913307_284293345421144_8722990862058913792_n.jpg',
          'experience': 360
        },
        {
          'id': 1378,
          'first_name': 'Матвей',
          'last_name': 'Гордиенко',
          'username': 'mot_gordienko',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/15167d92be6ff8099024b93d20ba6958/5CB2365C/t51.2885-19/s150x150/44885395_1872651716146574_7514037841173676032_n.jpg',
          'experience': 357
        },
        {
          'id': 1389,
          'first_name': 'Алина',
          'last_name': 'Гаврилова',
          'username': 'a_agav',
          'avatar': '/img/no-avatar.png',
          'experience': 197
        },
        {
          'id': 1381,
          'first_name': 'Aleksey',
          'last_name': 'Brusentsev',
          'username': 'Justbrus',
          'avatar': 'https://instagram.fhel6-1.fna.fbcdn.net/vp/a22cb00f9e1bddef35b45b3cdbf8411e/5C9032FA/t51.2885-19/s150x150/41544221_326223917929352_3382464372562460672_n.jpg',
          'experience': 170
        },
        {
          'id': 1373,
          'first_name': 'Henry',
          'last_name': 'Cavill',
          'username': 'henrycavill',
          'avatar': 'https://instagram.fhel6-1.fna.fbcdn.net/vp/050fb8576b8596571ba083c29ed83fa3/5CA732E0/t51.2885-19/s150x150/10299788_1632819743635060_1564818683_a.jpg',
          'experience': 150
        },
        {
          'id': 1382,
          'first_name': 'Андрей',
          'last_name': 'Груздев',
          'username': 'mr.canvinus',
          'avatar': 'https://instagram.frix2-1.fna.fbcdn.net/vp/b6d2526c9ff88d53afd6b27e7e438c4b/5C99DB2F/t51.2885-19/s150x150/37834625_239606353331469_2290255731082919936_n.jpg',
          'experience': 127
        },
        {
          'id': 1401,
          'first_name': 'Антон',
          'last_name': 'Коршунов',
          'username': 'tonykorshunov',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/fb5dabfd50c383cb011858da692a00fc/5CAEC23C/t51.2885-19/s150x150/14156629_607074769467150_1620392100_a.jpg',
          'experience': 70
        },
        {
          'id': 1380,
          'first_name': 'Saveliy',
          'last_name': 'Zakharchenko',
          'username': 'Ave_7_Day',
          'avatar': 'https://instagram.fhel6-1.fna.fbcdn.net/vp/c2e2f642a052ac57438718c9f8985cac/5C9F1763/t51.2885-19/s150x150/29739324_180853182538614_8864025892863606784_n.jpg',
          'experience': 60
        },
        {
          'id': 1390,
          'first_name': 'Вероника',
          'last_name': 'Шишкина',
          'username': 'veronika_shishkina',
          'avatar': '/img/no-avatar.png',
          'experience': 50
        },
        {
          'id': 1412,
          'first_name': 'Любовь',
          'last_name': 'Лазебная',
          'username': 'lazebnayluba',
          'avatar': 'https://instagram.fiev2-1.fna.fbcdn.net/vp/7b120bd41a38a785a576932d80fa70cb/5C8F7E6D/t51.2885-19/s150x150/23416465_361937787589173_1944637449326034944_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'experience': 30
        },
        {
          'id': 1414,
          'first_name': 'Михаил',
          'last_name': 'Типцов',
          'username': 'mikhailtipcov',
          'avatar': 'https://instagram.fiev2-1.fna.fbcdn.net/vp/0c5aa7047a07747956acba6c5e184ffc/5CA14640/t51.2885-19/s150x150/12568233_439747766224948_940443191_a.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'experience': 30
        },
        {
          'id': 1405,
          'first_name': 'Ксения',
          'last_name': 'Максименко',
          'username': 'ksyhamaksimenko',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/5471cd7ff8845441edd549fa61994137/5C989FE2/t51.2885-19/s150x150/37603339_1762471517207199_2301032937899950080_n.jpg',
          'experience': 20
        },
        {
          'id': 1399,
          'first_name': 'Магомед',
          'last_name': 'Теликаев',
          'username': 'm.telikaev',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/e4f0caa98b32446d96e4c5951d8c33bd/5C98066D/t51.2885-19/s150x150/12783374_1737539289792815_1983736490_a.jpg',
          'experience': 10
        },
        {
          'id': 1403,
          'first_name': 'Катя',
          'last_name': 'Герасименко',
          'username': 'ketrinager',
          'avatar': '/img/no-avatar.png',
          'experience': 10
        },
        {
          'id': 1416,
          'first_name': 'Анастасия ',
          'last_name': 'Жарких ',
          'username': 'nastysha_zhark',
          'avatar': '/img/no-avatar.png',
          'experience': 10
        },
        {
          'id': 1395,
          'first_name': 'Василий',
          'last_name': 'Крутов',
          'username': '_krutov_v',
          'avatar': '/img/no-avatar.png',
          'experience': 7
        },
        {
          'id': 1410,
          'first_name': 'Дмитрий',
          'last_name': 'Дмитров',
          'username': 'Ghhhhhh',
          'avatar': 'https://instagram.fsub6-2.fna.fbcdn.net/vp/dc651f3c631c68d6e0789e2d7c8af2e5/5C8EBFF1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg',
          'experience': 7
        },
        {
          'id': 2,
          'first_name': 'Юрий',
          'last_name': 'Локтионов',
          'username': 'loktionov_yura',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1374,
          'first_name': 'Маша',
          'last_name': 'Фомина',
          'username': 'mahafoma',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1375,
          'first_name': 'Роман',
          'last_name': 'Дмитров',
          'username': 'more_emociy_one',
          'avatar': 'https://instagram.fhel6-1.fna.fbcdn.net/vp/80bd06f2f6d5e8d7fa73f4b24336518c/5CAD3A5E/t51.2885-19/s150x150/40539418_327636044461704_4963198378293854208_n.jpg',
          'experience': 0
        },
        {
          'id': 1383,
          'first_name': 'Иван',
          'last_name': 'Кудря',
          'username': 'voice_of_the_mind',
          'avatar': 'https://instagram.frix2-1.fna.fbcdn.net/vp/3bb6eddb14e900c2a875520735dd79e9/5C904E46/t51.2885-19/s150x150/41665062_2154216324802360_9031464668912156672_n.jpg',
          'experience': 0
        },
        {
          'id': 1384,
          'first_name': 'UP',
          'last_name': 'ME',
          'username': 'upme_app',
          'avatar': 'https://instagram.frix2-1.fna.fbcdn.net/vp/fd5409391e7a123722dd55d3a604ed23/5CB1DCBB/t51.2885-19/s150x150/43914761_318528322296901_5149234302604541952_n.jpg',
          'experience': 0
        },
        {
          'id': 1387,
          'first_name': 'Алексей',
          'last_name': 'Давыдов',
          'username': 'davydaleks',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/a365038a437669639bf9cf0d4e8f2991/5C916627/t51.2885-19/s150x150/31310668_1932242623506843_1612192051309314048_n.jpg',
          'experience': 0
        },
        {
          'id': 1391,
          'first_name': 'Дарья',
          'last_name': 'Белова',
          'username': 'green_cutetea',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1394,
          'first_name': 'Munis',
          'last_name': 'Mirzoaminov',
          'username': 'munis41k',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1396,
          'first_name': 'Владлена ',
          'last_name': 'Чермакова ',
          'username': 'Vlada_cube',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1397,
          'first_name': 'Инесса',
          'last_name': 'Моисеева',
          'username': 'msv_nss_',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1400,
          'first_name': 'Екатерина',
          'last_name': 'Тальянская',
          'username': 'taly_kate',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/184d6c8d0f24dcbc105a543f592e14db/5C91BAA7/t51.2885-19/s150x150/35574854_489969771424377_2477823335220641792_n.jpg',
          'experience': 0
        },
        {
          'id': 1402,
          'first_name': 'Влада',
          'last_name': 'Кавтунова',
          'username': 'fffuck.off',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1404,
          'first_name': 'Тагир',
          'last_name': 'Гарипов',
          'username': 'shokoladnyy_mir',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1406,
          'first_name': 'Дени',
          'last_name': 'Гериханов',
          'username': 'gerikhanov_041',
          'avatar': 'https://scontent-arn2-1.cdninstagram.com/vp/8ec96e3a221c5d31fa32b48edfee6dc7/5C94DC37/t51.2885-19/s150x150/36160787_1309940602473508_7719062069303050240_n.jpg',
          'experience': 0
        },
        {
          'id': 1407,
          'first_name': 'Ксения',
          'last_name': 'Нуйкина',
          'username': '_your_muse_15',
          'avatar': '/img/no-avatar.png',
          'experience': 0
        },
        {
          'id': 1408,
          'first_name': 'hee',
          'last_name': 'crypto',
          'username': 'cryptomannn',
          'avatar': 'https://instagram.frix2-1.fna.fbcdn.net/vp/21bd89cbf0d12e114f332faa2620565b/5CAF5109/t51.2885-19/s150x150/28430540_1649554805127760_1469730322563203072_n.jpg',
          'experience': 0
        },
        {
          'id': 1409,
          'first_name': 'Teya',
          'last_name': 'Shans',
          'username': 'Teoshanskaya',
          'avatar': 'https://instagram.fhel6-1.fna.fbcdn.net/vp/e293bb35db548d63d09e417fcae0f951/5C9E0BC6/t51.2885-19/s150x150/19120732_316562275465411_8179952312597348352_a.jpg',
          'experience': 0
        },
        {
          'id': 1413,
          'first_name': 'Игорь',
          'last_name': 'Горюшинский',
          'username': 'Goryushinsky',
          'avatar': 'https://instagram.fiev2-1.fna.fbcdn.net/vp/e4f2edd085213c38bef457946e05a626/5CA58AD3/t51.2885-19/s150x150/27580823_561982714182408_8862799769894912000_n.jpg?_nc_ht=instagram.fiev2-1.fna.fbcdn.net',
          'experience': 0
        },
        {
          'id': 1415,
          'first_name': 'Иван',
          'last_name': 'Петросов',
          'username': 'luxury_moscow_kids',
          'avatar': 'https://instagram.fhen1-1.fna.fbcdn.net/vp/bd605380765797eb9745f56780c5f4e1/5CBC0C25/t51.2885-19/s150x150/47586159_274264643246520_5987949116666150912_n.jpg?_nc_ht=instagram.fhen1-1.fna.fbcdn.net',
          'experience': 0
        }
      ]
      const prizes = [
        {
          place: '1',
          prize: 'Премиум на 3 месяца'
        },
        {
          place: '2',
          prize: 'Премиум на месяц'
        },
        {
          place: '3',
          prize: 'Премиум на 2 недели'
        },
        {
          place: '4-10',
          prize: '1000 UP'
        },
        {
          place: '11-25',
          prize: '500 UP'
        },
        {
          place: '26-50',
          prize: '250 UP'
        },
        {
          place: '51-100',
          prize: '5 спинов'
        }
      ]
      await commit('SET_RATING', rating)
      await commit('SET_PRIZES', prizes)
      commit('SET_LOADING_STATUS', false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
