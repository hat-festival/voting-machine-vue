<template>
  <div id='about'>
    <h1>Over-engineering at its absolute finest</h1>

    <p>
      Since the dawn of history, one question has troubled the minds of the greatest thinkers: Would you rather fight one hundred duck-sized horses, or one horse-sized duck?
    </p>

    <p>
      We have set out to answer this once and for all, in the most ridiculous way we could think of. It has far, far too many layers:
    </p>
    <hr>
    <ApiReadme></ApiReadme>
    <hr>
    <Addresses></Addresses>
  </div>
</template>

<script>
import Addresses from './lego/Addresses'
import FrontendReadme from './readmes/Frontend'
import ApiReadme from './readmes/Api'

export default {
  name: 'About',
  components: {
    FrontendReadme,
    ApiReadme,
    Addresses
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.3em;
}

p {
  text-align: justify;
  width: 80%;
  margin: auto;
  font-size: 1.2em;
  margin-bottom: $padding * 3;
}

ul {
  width: 80%;
  text-align: justify;
  margin: auto;
  list-style-type: circle;
  padding-left: $padding * 6;
}

a {
  color: $link-colour;
  text-decoration-line: underline;
  text-decoration-style: double;
}

code {
  font-family: $mono-font;
  background-color: transparent;
  font-size: 1em;
  margin: 0;
  padding: 0;
}

pre {
  text-align: left;
  width: 80%;
  margin: auto;
  background-color: transparent;
  color: $orange;
}
</style>
