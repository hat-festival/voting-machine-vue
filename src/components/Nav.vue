<template>
  <div>
    <div id='header'>
      <a class='nav-toggle' v-on:click='toggle' v-on-click-outside='close'>
        <icon name='bars'></icon>
      </a>
      <transition name='title-anim'>
        <h1 v-if='title'>
          <router-link to='/'>Voting Machine</router-link>
        </h1>
      </transition>
      <hr>
      <div class='tabs is-centered'>
        <transition name='tabs-anim'>
          <ul v-if='menu'>
            <li>
              <router-link v-bind:to="'/'">
                Question
              </router-link>
            </li>
            <li>
              <router-link v-bind:to="'/results'">
                Results
              </router-link>
            </li>
            <li>
              <router-link v-bind:to="'/chain'">
                Chain
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
    </div>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Nav',
  mixins: [onClickOutside],
  data () {
    return {
      menu: false,
      title: true
    }
  },
  methods: {
    toggle () {
      this.title = !this.title
      this.menu = !this.menu
    },
    close () {
      this.title = true
      this.menu = false
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: $secondary;
  height: 70px;
  z-index: 90;

  hr {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
  }

  a {
    text-decoration: none;
    color: $primary;
  }

  .nav-toggle {
    background-color: transparent;
    right: $padding * 4;
    top: $padding * 4;
    color: $primary;
    position: fixed;
    z-index: 99;
  }
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.title-anim-enter-active,
.title-anim-leave-active,
.tabs-anim-enter-active,
.tabs-anim-leave-active
{
  transition: transform 1s;
}

.title-anim-enter-to,
.title-anim.leave,
.tabs-anim-enter-to,
.tabs-anim.leave
{
  transform: translateX(0);
}

.title-anim-enter,
.title-anim-leave-to
{
  transform: translateX(-$translate-distance);
}

.tabs-anim-enter,
.tabs-anim-leave-to
{
  transform: translateX($translate-distance);
}

.tabs {
  font-size: 2em;
}
</style>
