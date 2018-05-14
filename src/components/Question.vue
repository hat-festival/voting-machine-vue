<template>
  <div id='question'>
    <h2>{{ question.premise }}</h2>
    <div class='columns is-vcentered'>
      <div class='column'>
        <Button index='0'>{{ question.options[0] }}</Button>
      </div>
      <div class='column'>
        <span class='or'>or</span>
      </div>
      <div class='column'>
        <Button index='1'>{{ question.options[1] }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Button from './Button'

var endPoint = 'http://localhost:9292/question'
export default {
  name: 'Question',
  components: {
    Button
  },
  data () {
    return {
      question: {
        premise: 'Would you rather fight',
        options: [
          'One hundred duck-sized horses?',
          'One horse-sized duck?'
        ]
      }
    }
  },
  mounted () {
    var self = this
    axios.get(endPoint)
      .then(response => (
        self.question = response.data
      ))
  },
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
  @include disc();
}
</style>
