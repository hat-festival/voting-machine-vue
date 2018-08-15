<template>
  <div class='shake-trigger'>
    <a class='disc shake-little shake-constant' v-on:click='vote(value)'>
      <slot></slot>
    </a>
  </div>
</template>

<script>
import axios from 'axios'

var endPoint = 'http://localhost:9292/vote'
export default {
  name: 'Button',
  props: [
    'value'
  ],
  methods: {
    vote (choice) {
      axios.post(endPoint, {
        choice: choice
      })
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

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
</style>
