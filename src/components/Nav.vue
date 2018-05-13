<template>
  <div id='nav'>
    <a class='toggle small-disc' v-on:click='show = !show' v-on-click-outside='close'>
      <icon name='bars'></icon>
    </a>
    <transition name='fade'>
      <ul class='nav' id='nav' v-if='show'>
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
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Nav',
  mixins: [onClickOutside],
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () { this.show = false }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/variables';

.nav {
  text-align: right;
  position: fixed;
  top: $padding;
  right: $padding * 10;
  padding-left: $padding;
  background-color: $secondary;
  opacity: 0.7;
  padding-right: $padding;
  z-index: 99;

  li {
    a {
      font-size: 2em;
      padding: 0;
      margin: 0;
      color: $primary;
      transition: color $hover-transition-time $hover-transition-type;

      &:hover {
        text-decoration: none;
        color: darken($primary, 10%);
      }
    }
  }
}

.toggle {
  font-size: 1.5em;
  cursor: pointer;
  z-index: 99;
  transition: color $hover-transition-time $hover-transition-type;
  position: fixed;
  top: $padding * 3;
  right: $padding * 4;
  color: $secondary;

  &:hover {
    color: darken($primary, 10%);
    color: darken($secondary, 10%);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
