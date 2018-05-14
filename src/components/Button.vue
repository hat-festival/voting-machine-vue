<template>
  <div class='shake-triggger'>
    <a class='disc shake-little shake-constant' v-on:click='vote(index)'>
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
    'index'
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
