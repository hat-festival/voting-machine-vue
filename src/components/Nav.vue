<template>
  <div>
    <div id='header'>
      <a class='nav-toggle' v-on:click='toggle' v-on-click-outside='close'>
        <icon name='bars'></icon>
      </a>
      <transition name='scoot'>
        <h1 v-if='scoot'>
          <router-link to='/'>Voting Machine</router-link>
        </h1>
      </transition>
      <hr>
      <transition name='menu'>
        <ul v-if='menu' class='nav'>
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
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Nav',
  mixins: [onClickOutside],
  data () {
    return {
      menu: false,
      scoot: true
    }
  },
  methods: {
    toggle () {
      this.scoot = !this.scoot
      this.menu = !this.menu
    },
    close () {
      this.scoot = true
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

.nav {
  position: absolute;
  top: 0;
  right: 600px;
}

.scoot-enter-active,
.scoot-leave-active,
.menu-enter-active,
.menu-leave-active
{
  transition: transform 1s;
}

.scoot-enter, .scoot-leave-to {
  transform: translateX(-600px);
}

.scoot-enter-to, .scoot.leave {
    transform: translateX(000px);
}

.menu-enter, .menu-leave-to {
  transform: translateX(600px);
}

.menu-enter-to, .menu.leave {
    transform: translateX(000px);
}

.nav {
  font-size: 2em;
  right: $padding * 12;
  top: $padding;
  li {
    float: left;
    a {
      color: $primary;
    }
    &:after {
      content: '::'
    }
    &:last-child:after {
      content: ''
    }
    padding: $padding;
  }
}

</style>
