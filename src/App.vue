<template>
  <div id='app'>
    <Nav></Nav>
    <transition name='page' mode='out-in'>
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/lego/Nav'
import Footer from './components/lego/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/bulma-core';

html {
  background-color: $secondary;
}

body {
  font-family: $default-font, monospace;
  width: 90%;
  margin: auto;
  text-align: center;
  color: $primary;
  overflow: hidden;
  margin-top: $header-height;
  margin-bottom: $footer-height;
}

::-webkit-scrollbar {
    display: none;
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

.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateZ(-20%);
}

#header, #footer {
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  background-color: $secondary;
  opacity: 0.9;
  z-index: 90;

  hr {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
  }

  a {
    text-decoration: none;
    color: $link-colour;
  }
}

#header {
  top: 0;
  height: $header-height;

  hr {
    bottom: 0;
  }
}

#footer {
  bottom: 0;
  height: $footer-height;

  hr {
    top: 0;
  }
}
</style>
