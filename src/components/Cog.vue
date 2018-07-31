<template>
  <div>
    <Toggle class='cog-toggle' :target='this'></Toggle>
    <transition name='fade'>
      <ul class='cog' v-if='show'>
        <li v-for='address in addresses' :key='address'>
          <code>{{ address }}</code>
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
      addresses: ['0.0.0.0'],
      icon: 'cog'
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
  left: $padding * 5;
  bottom: $padding;
  padding: 0;
  text-align: left;
}

.cog-toggle {
  position: fixed;
  left: $padding;
  bottom: 0;
  a {
    color: $primary;

    &:hover {
      color: darken($primary, 10%);
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
