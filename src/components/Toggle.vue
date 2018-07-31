<template>
  <div>
    <a v-on:click='toggle' v-on-click-outside='close'>
      <icon :name='this.target.icon'></icon>
    </a>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Toggle',
  mixins: [onClickOutside],
  props: [
    'target'
  ],
  methods: {
    toggle () {
      this.target.show = !this.target.show
    },
    close () {
      this.target.show = false
    }
  }
}
</script>
