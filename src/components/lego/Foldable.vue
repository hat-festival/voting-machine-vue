<template>
  <div>
    <h2>{{ title }} <a @click="toggle" href='#'>
      <icon :name="show ? 'angle-double-up' : 'angle-double-down'"></icon>
    </a></h2>
    <div v-show-slide:400:ease-in-out='show'>
      <vue-markdown :source='readme'></vue-markdown>
      <a @click="toggle" href='#'>
        <icon name='angle-double-up'></icon>
      </a>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'

export default {
  name: 'Readme',
  props: [
    'title',
    'endPoint'
  ],
  components: {
    VueMarkdown
  },
  data () {
    return {
      readme: '',
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  },
  mounted () {
    var self = this
    axios.get(self.endPoint)
      .then(response => (
        self.readme = response.data.readme
      ))
  }
}
</script>
