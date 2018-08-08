<template>
  <div>
    <a class='nav-toggle' v-on:click='toggle' v-on-click-outside='close'>
      <icon :name='bars'></icon>
    </a>
    <div id='header'>
      <h1 v-bind:class='{ left: titleLeft, center: titleCenter }'>Voting Machine</h1>
      <hr class='border'>
    </div>
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
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      menu: false,
      titleCenter: true,
      titleLeft: false
    }
  },
  methods: {
    toggle () {
      this.titleLeft = !this.titleLeft
      this.titleCenter = !this.titleCenter
      this.menu = !this.menu
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
}

h1 {
  position: absolute;
  top: 0;
}

hr.border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
}

.left {
  left: $padding * 12;
}

.center {
  left: 0;
  right: 0;
  margin: auto;
}

.nav {
  @include nav();
  right: $padding * 12;
  top: $padding;
  background-color: $primary;
  li {
    float: left;
    a {
      color: $secondary;
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
