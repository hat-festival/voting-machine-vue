import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import App from './App'
import Question from './components/Question'
import About from './components/About'

Vue.use(Buefy, { defaultIconPack: 'fa' })
Vue.use(VueRouter)

Vue.component('icon', Icon)

const routes = [
  {
    path: '/',
    component: Question
  },
  {
    path: '/about',
    component: About
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
