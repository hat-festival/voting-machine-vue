<template>
  <div id='app'>
    <Nav></Nav>
    <transition name='page' mode='out-in'>
      <router-view></router-view>
    </transition>
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
  margin-top: 70px;
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

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateZ(-20%);
}

</style>
