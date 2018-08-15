<template>
  <div>
    <Foldable title='Addresses' :content='addresses' type='text'></Foldable>
  </div>
</template>

<script>
import axios from 'axios'
import Foldable from './Foldable'

export default {
  name: 'Addresses',
  components: {
    Foldable
  },
  data () {
    return {
      addresses: '0.0.0.0',
      content: 'derp'
    }
  },
  mounted () {
    var self = this
    axios.get('http://localhost:9292/addresses')
      .then(response => (
        self.addresses = response.data['addresses'].join(', ')
      ))
  }
}
</script>
