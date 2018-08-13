import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VShowSlide from 'v-show-slide'

import 'buefy/lib/buefy.css'
import 'vue-awesome/icons'
import 'csshake'
import Icon from 'vue-awesome/components/Icon'
import { directive as onClickOutside } from 'vue-on-click-outside'
import App from './App'
import Question from './components/Question'
import About from './components/About'
import Chain from './components/Chain'
import Results from './components/Results'

Vue.use(Buefy, { defaultIconPack: 'fa' })
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VShowSlide)

Vue.component('icon', Icon)
Vue.directive('on-click-outside', onClickOutside)

Chart.defaults.global.legend.fontFamily = 'Amatic SC'

const store = new Vuex.Store({
  state: {
    title: true,
    menu: false
  },
  mutations: {
    toggle (state) {
      state.title = !state.title
      state.menu = !state.menu
    },
    showTitle (state) {
      state.title = true
      state.menu = false
    }
  }
})

const routes = [
  {
    path: '/',
    component: Question
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/chain',
    component: Chain
  },
  {
    path: '/Results',
    component: Results
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app')
