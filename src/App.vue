<template>
  <div id="app">
    <app-nav></app-nav>
    <h1>Voting Machine</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    'app-nav': Nav
  }
}
</script>

<style lang="scss">
@import 'src/assets/sass/variables';

html {
  background-color: $secondary;
}

body {
  font-family: 'Amatic SC';
  width: 90%;
  margin: auto;
  text-align: center;
  color: $primary;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

hr {
  margin: $padding;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, $secondary, $primary, $secondary);
}

.disc {
  display:flex;
  align-items: center;
  justify-content: center;
  width: $btn-diameter;
  height:$btn-diameter;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: $secondary;
  text-decoration:none;
  background: $primary;
  font-size:2.5em;
  font-weight: bold;
  margin: auto;
  transition: background-color $hover-transition-time $hover-transition-type;
  &:hover {
    background-color: darken($primary, 10%);
    color: darken($secondary, 10%);
  }
}

.small-disc {
  @extend .disc;
  width: $btn-diameter * 0.1;
  height: $btn-diameter * 0.1;
}

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
