<template>
  <div id='api-readme'>
    <vue-markdown :source='readme'></vue-markdown>
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
      readme: ''
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
