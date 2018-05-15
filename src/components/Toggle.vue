<template>
  <div>
    <a v-on:click='toggle' v-on-click-outside='close'>
      <icon name='bars'></icon>
    </a>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  name: 'Toggle',
  mixins: [onClickOutside],
  props: [
    'toggle',
    'close'
  ]
}
</script>
