<template>
  <div id='api-readme'>
    <h2>API <a @click="toggleShow" href='#'>
      <icon :name="showApi ? 'angle-double-up' : 'angle-double-down'"></icon>
    </a></h2>
    <div v-show-slide:400:ease-in-out='showApi'>
      <vue-markdown :source='readme'></vue-markdown>
      <a @click="toggleShow" href='#'>
        <icon name='angle-double-up'></icon>
      </a>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
var endPoint = 'http://localhost:9292/readme'

export default {
  name: 'ApiReadme',
  components: {
    VueMarkdown
  },
  data () {
    return {
      readme: '',
      showApi: false
    }
  },
  methods: {
    toggleShow () {
      this.showApi = !this.showApi
    }
  },
  mounted () {
    var self = this
    axios.get(endPoint)
      .then(response => (
        self.readme = response.data.readme
      ))
  }
}
</script>
