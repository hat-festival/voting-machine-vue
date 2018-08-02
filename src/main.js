import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
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

Vue.component('icon', Icon)
Vue.directive('on-click-outside', onClickOutside)

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
  router
}).$mount('#app')
