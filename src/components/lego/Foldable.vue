<template>
  <div>
    <h2>{{ title }} <a @click="toggle" href='#'>
      <icon :name="show ? 'angle-double-up' : 'angle-double-down'"></icon>
    </a></h2>
    <div v-show-slide:400:ease-in-out='show'>
      <vue-markdown :source='content' v-if='this.type=="markdown"'></vue-markdown>
      <p class='content' v-text='content' v-if='this.type=="text"'></p>
      <a @click="toggle" href='#'>
        <icon name='angle-double-up'></icon>
      </a>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Foldable',
  props: [
    'title',
    'content',
    'type'
  ],
  components: {
    VueMarkdown
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang='scss'>
.content {
  text-align: center;
}
</style>
