<template>
  <div>
    <Foldable :title='title' :content='readme' type='markdown'></Foldable>
  </div>
</template>

<script>
import axios from 'axios'
import Foldable from './Foldable'

export default {
  name: 'Readme',
  props: [
    'title',
    'endPoint'
  ],
  components: {
    Foldable
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
