import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import profile from './modules/profile'
import menu from './modules/menu'
import user from './modules/user'
import rating from './modules/rating'
import giveaway from './modules/giveaway'
import content from './modules/content'
import notifications from './modules/notifications'
import payment from './modules/payment'
import posts from './modules/posts'
import activity from './modules/activity'
import contacts from './modules/contacts'
import tasks from './modules/tasks'
import services from './modules/services'
import premium from './modules/premium'
import referal from './modules/referal'
import guide from './modules/guide'
import live from './modules/live'
import loading from './modules/loading'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuePersist = {
  reducer: state => ({
    user: state.user,
    contacts: state.contacts,
    history: state.history,
    rating: state.rating,
    notifications: state.notifications,
    tasks: state.tasks,
    posts: state.posts,
    referal: state.referal,
    services: state.services,
    payment: state.payment,
    giveaway: state.giveaway,
    content: state.content,
    activity: state.activity,
    premium: state.premium
  }),
  saveState: (key, state, storage) => {
    requestIdleCallback(() => {
      storage.setItem(key, JSON.stringify(state))
    })
  }
}

export default new Vuex.Store({
  plugins: [createPersistedState(vuePersist)],
  modules: {
    auth,
    profile,
    menu,
    user,
    rating,
    giveaway,
    content,
    notifications,
    payment,
    posts,
    activity,
    contacts,
    tasks,
    services,
    premium,
    referal,
    guide,
    live,
    loading
  }
})
