<template>
  <div id='frontend-readme'>
    <vue-markdown :source='markdown' :prerender='prerender'></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import readme from '../../../README.md'

export default {
  name: 'FrontendReadme',
  components: {
    VueMarkdown
  },
  data () {
    return {
      markdown: readme,
      prerender: function () {
        return readme
          .substring(readme.indexOf('\n') + 1)
          .replace('Documented [here](//github.com/hat-festival/voting-machine)', '<FrontendReadme></FrontendReadme>')
      }
    }
  }
}
</script>
