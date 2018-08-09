<template>
  <div id='question'>
    <h2>{{ question.premise }}</h2>
    <div class='columns is-vcentered'>
      <div class='column'>
        <Button value='horses'>{{ question.options['horses'] }}</Button>
      </div>
      <div class='column'>
        <span class='or'>or</span>
      </div>
      <div class='column'>
        <Button value='duck'>{{ question.options['duck'] }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Button from './lego/Button'

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
  }
}
</script>
