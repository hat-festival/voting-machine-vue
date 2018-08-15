<template>
  <div id='equestreum-readme'>
    <h2>Equestreum Blockchain <a @click="toggleShow" href='#'>
      <icon :name="showEquestreum ? 'angle-double-up' : 'angle-double-down'"></icon>
    </a></h2>
    <div v-show-slide:400:ease-in-out='showEquestreum'>
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
var endPoint = 'http://localhost:9292/readme?gem=equestreum'

export default {
  name: 'EquestreumReadme',
  components: {
    VueMarkdown
  },
  data () {
    return {
      readme: '',
      showEquestreum: false
    }
  },
  methods: {
    toggleShow () {
      this.showEquestreum = !this.showEquestreum
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
