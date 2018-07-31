<template>
  <div>
    <Toggle class='nav-toggle' :target='this'></Toggle>
    <transition name='fade'>
      <ul class='nav' v-if='show'>
        <li>
          <router-link v-bind:to="'/'">
            Question
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="'/about'">
            About
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="'/chain'">
            Chain
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import Toggle from './Toggle'

export default {
  name: 'Nav',
  components: {
    Toggle
  },
  data () {
    return {
      show: false,
      icon: 'bars'
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

.nav {
  @include nav();
  right: $padding * 10;
  top: $padding;
  text-align: right;
}

.nav-toggle {
  @include toggle();
  right: $padding * 4;
  top: $padding * 3;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
