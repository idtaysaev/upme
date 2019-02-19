import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import HomeHome from '@/views/home/Home.vue'
import PrivacyPolicy from '@/views/home/PrivacyPolicy.vue'
import TermsOfUse from '@/views/home/TermsOfUse.vue'
import About from '@/views/home/About.vue'

import Login from '@/views/Login.vue'
import Forgot from '@/views/Forgot.vue'
import Reset from '@/views/Reset.vue'
import NotFound from '@/views/NotFound.vue'

import Profile from '@/views/Profile.vue'
import ProfileHome from '@/views/profile/profile/Home.vue'
import ProfileInfo from '@/views/profile/profile/Info.vue'
import ProfileEdit from '@/views/profile/profile/Edit.vue'

import Premium from '@/views/profile/Premium.vue'
import Activity from '@/views/profile/Activity.vue'
import Giveaway from '@/views/profile/Giveaway.vue'
import HowToUse from '@/views/profile/HowToUse.vue'
import Promotion from '@/views/profile/Promotion.vue'
import Rating from '@/views/profile/Rating.vue'
import Tasks from '@/views/profile/Tasks.vue'

import Contacts from '@/views/profile/Contacts.vue'
import Support from '@/views/profile/Support.vue'

import Wallet from '@/views/profile/Wallet.vue'
import WalletHome from '@/views/profile/wallet/Home.vue'
import WalletReferal from '@/views/profile/wallet/Referal.vue'
import WalletReplenishment from '@/views/profile/wallet/Replenishment.vue'

import WheelMe from '@/views/profile/WheelMe.vue'
import PaymentSpins from '@/views/profile/wallet/PaymentSpins.vue'

import Content from '@/views/profile/Content.vue'

import ContentPhoto from '@/views/profile/content/Photo.vue'
import ContentPhotoDefault from '@/views/profile/content/photo/Default.vue'
import ContentPhotoGrid from '@/views/profile/content/photo/Grid.vue'

import ContentPresets from '@/views/profile/content/Presets.vue'
import ContentVine from '@/views/profile/content/Vine.vue'
import ContentDesign from '@/views/profile/content/Design.vue'

import PromotionHome from '@/views/profile/promotion/Home.vue'
import Likes from '@/views/profile/promotion/Likes.vue'
import LikesAuto from '@/views/profile/promotion/likes/Auto.vue'
import LikesStandart from '@/views/profile/promotion/likes/Standart.vue'
import LikesPost from '@/views/profile/promotion/likes/Post.vue'

import Lives from '@/views/profile/promotion/Lives.vue'
import Savings from '@/views/profile/promotion/Savings.vue'
import Stories from '@/views/profile/promotion/Stories.vue'
import Subscribers from '@/views/profile/promotion/Subscribers.vue'
import Videos from '@/views/profile/promotion/Videos.vue'

import Message from '@/views/profile/messages/Message.vue'
import Payment from '@/views/profile/messages/Payment.vue'

import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const ifBloger = (to, from, next) => {
  if (store.getters['user/isBloger']) {
    next()
    return
  }
  next('/profile/wallet')
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    const isSimilar = to.name === from.name
    if (!isSimilar) {
      const profile = document.querySelector('.upme-content')
      if (profile) {
        setTimeout(() => {
          profile.scrollTop = 0
        }, 500)
      }
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: HomeHome,
          name: 'home'
        },
        {
          path: 'privacy-policy',
          component: PrivacyPolicy,
          name: 'privacy-policy'
        },
        {
          path: 'terms-of-use',
          component: TermsOfUse,
          name: 'terms-of-use'
        },
        {
          path: 'about',
          component: About,
          name: 'about'
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/forgot-password',
      component: Forgot,
      name: 'forgot',
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/reset-password',
      component: Reset,
      name: 'reset',
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/login/:wallet',
      component: Login,
      name: 'login-wallet',
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/profile',
      component: Profile,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: '',
          component: ProfileHome,
          children: [
            {
              path: '',
              name: 'profile',
              component: ProfileInfo
            },
            {
              path: 'edit',
              component: ProfileEdit
            }
          ]
        },
        {
          path: 'premium',
          name: 'premium',
          component: Premium
        },
        {
          path: 'activity',
          name: 'activity',
          component: Activity
        },
        {
          path: 'content',
          component: Content,
          children: [
            {
              path: '',
              redirect: 'photo'
            },
            {
              path: 'photo',
              component: ContentPhoto,
              children: [
                {
                  path: '',
                  name: 'content',
                  component: ContentPhotoDefault
                },
                {
                  path: ':photographer',
                  name: 'photographer',
                  component: ContentPhotoGrid
                }
              ]
            },
            {
              path: 'presets',
              component: ContentPresets
            },
            {
              path: 'vine',
              component: ContentVine
            },
            {
              path: 'design',
              component: ContentDesign
            }
          ]
        },
        {
          path: 'giveaway',
          name: 'giveaway',
          component: Giveaway
        },
        {
          path: 'how-to-use',
          name: 'how-to-use',
          component: HowToUse
        },
        {
          path: 'promotion',
          component: Promotion,
          children: [
            {
              path: '',
              component: PromotionHome,
              name: 'promotion'
            },
            {
              path: 'likes',
              component: Likes,
              children: [
                {
                  path: '',
                  redirect: 'standart'
                },
                {
                  path: 'standart',
                  component: LikesStandart
                },
                {
                  path: 'standart/:post',
                  component: LikesPost
                },
                {
                  path: 'auto',
                  component: LikesAuto
                }
              ]
            },
            {
              path: 'lives', component: Lives
            },
            {
              path: 'savings', component: Savings
            },
            {
              path: 'stories', component: Stories
            },
            {
              path: 'subscribers', component: Subscribers
            },
            {
              path: 'videos', component: Videos
            }
          ]
        },
        {
          path: 'rating',
          name: 'rating',
          component: Rating
        },
        {
          path: 'contacts',
          name: 'contacts',
          component: Contacts
        },
        {
          path: 'tasks',
          name: 'tasks',
          component: Tasks
        },
        {
          path: 'wallet',
          component: Wallet,
          children: [
            {
              path: '',
              component: WalletHome,
              name: 'wallet'
            },
            {
              path: 'referal',
              component: WalletReferal,
              beforeEnter: ifBloger
            },
            {
              path: 'replenishment',
              component: WalletReplenishment
            },
            {
              path: 'replenishment/:price',
              component: WalletReplenishment
            },
            {
              path: 'success',
              component: Message,
              props: {
                message: 'Оплата прошла успешно!'
              }
            },
            {
              path: 'error',
              component: Message,
              props: {
                message: 'Произошла ошибка при оплате!',
                type: 'error'
              }
            },
            {
              path: 'spins',
              component: PaymentSpins
            }
          ]
        },
        {
          path: 'wheel-me',
          name: 'wheel-me',
          component: WheelMe
        },
        {
          path: 'support',
          name: 'support',
          component: Support
        },
        {
          path: 'support/success',
          name: 'support-success',
          component: Message,
          props: {
            message: 'Ваше сообщение успешно отправлено!'
          }
        },
        {
          path: 'payment',
          name: 'payment',
          component: Payment
        }
      ]
    },
    {
      path: '/404',
      component: NotFound,
      name: '404'
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
