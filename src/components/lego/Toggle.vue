<template>
  <a class='nav-toggle' v-on:click='toggle' v-on-click-outside='close'>
    <icon name='bars'></icon>
  </a>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Toggle',
  mixins: [onClickOutside],
  methods: {
    toggle () {
      this.$store.commit('toggle')
    },
    close () {
      this.$store.commit('showTitle')
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

.nav-toggle {
  background-color: transparent;
  right: $padding * 4;
  top: $padding * 4;
  color: $primary;
  position: fixed;
  z-index: 99;
}
</style>
