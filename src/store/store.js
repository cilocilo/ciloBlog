import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import {changeLanguage} from './actions'
import {CHANGELANG} from './mutations'

Vue.use(Vuex)

// load language data to vuex
// let language = localStorage.getItem('x-language')
// if (!language) {
//   localStorage.setItem('x-language', 'cn')
//   language = 'cn'
// }
// document.title = data[language].website.title

const state = {
  lang: localStorage.getItem('x-language') || 'cn',
  data: data[localStorage.getItem('x-language') || 'cn']
}

const actions = {
  changeLanguage
}

const mutations = {
  CHANGELANG
}

// create store
export default new Vuex.Store({
  state,
  actions,
  mutations
})
