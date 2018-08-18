<template>
  <div id='about'>
    <vue-markdown :source='markdown' :prerender='prerender'></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import readme from '../../README.md'

export default {
  name: 'about',
  components: {
    VueMarkdown
  },
  data () {
    return {
      markdown: readme,
      prerender: function () {
        return readme.substring(readme.indexOf('\n') + 1)
      }
    }
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

#about > div > ul {
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
  font-family: 'Share Tech Mono';
  background-color: transparent;
  font-size: 1em;
  margin: 0;
  padding: 0;
}
</style>
