<template>
  <div id='nav'>
    <a
      class='toggle small-disc'
      v-on:click='show = !show'
      v-on-click-outside='close'
      >
      <icon name='bars'></icon>
    </a>
    <transition name='fade'>
      <ul
        class='nav flex-column'
        id='nav'
        v-if='show'
        >
        <li>
          <router-link
            v-bind:to="'/'"
            >
            Question
          </router-link>
        </li>
        <li>
          <router-link
            v-bind:to="'/about'"
            >
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
