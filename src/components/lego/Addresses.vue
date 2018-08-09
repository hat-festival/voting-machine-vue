<template>
  <div>
    <code v-for='address in addresses' :key='address'>[{{ address }}]</code>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Addresses',
  data () {
    return {
      addresses: ['0.0.0.0']
    }
  },
  mounted () {
    var self = this
    axios.get('http://localhost:9292/addresses')
      .then(response => (
        self.addresses = response.data['addresses']
      ))
  }
}
</script>
