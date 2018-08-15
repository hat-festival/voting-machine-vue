<template>
  <div id='chain'>
    <vue-json-pretty
      :data='chain'>
    </vue-json-pretty>
  </div>
</template>

<script>
import axios from 'axios'
import VueJsonPretty from 'vue-json-pretty'

var endPoint = 'http://localhost:9292/chain?reverse=true'
export default {
  name: 'Chain',
  components: {
    VueJsonPretty
  },
  data () {
    return {
      chain: {}
    }
  },
  mounted () {
    var self = this
    axios.get(endPoint)
      .then(response => (
        self.chain = response.data
      ))
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';
#chain {
  text-align: left;
  .vjs__tree {
    font-family: $mono-font;
  }
}
</style>
