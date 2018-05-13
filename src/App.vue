<template>
  <div id='app'>
    <Nav></Nav>
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
    Nav
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/bulma-core';

html {
  background-color: $secondary;
}

body {
  font-family: 'Amatic SC';
  width: 90%;
  margin: auto;
  text-align: center;
  color: $primary;
  overflow: hidden;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

.or {
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
</style>
