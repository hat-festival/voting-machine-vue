<template>
  <div>
    <Toggle class='cog-toggle' :toggle='toggleCog' :close='closeCog'></Toggle>
    <transition name='fade'>
      <ul class='cog' v-if='show'>
        <li v-for='address in  addresses' :key='address'>
          {{ address }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import Toggle from './Toggle'

export default {
  name: 'Cog',
  components: {
    Toggle
  },
  data () {
    return {
      show: false,
      addresses: ['0.0.0.0']
    }
  },
  methods: {
    toggleCog () {
      this.show = !this.show
    },
    closeCog () {
      this.show = false
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

<style lang='scss'>
@import 'src/assets/sass/custom';

.cog {
  @include nav();
  left: $padding * 7;
  bottom: $padding;
  text-align: left;
}

.cog-toggle {
  @include toggle();
  left: $padding;
  bottom: $padding;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
