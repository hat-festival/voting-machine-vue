<template>
  <div
    id='question'
    >
    <h2>{{ question.premise }}</h2>
    <div
      class='columns is-vcentered'
      >
      <div
        class='column'
        >
        <a
          class='disc'
          v-on:click='vote(0)'
          >
          {{ question.options[0] }}
        </a>
      </div>
      <div
        class='column'
        >
        <span class='or'>or</span>
      </div>
      <div
        class='column'
        >
        <a
          class='disc'
          v-on:click='vote(1)'
          >
          {{ question.options[1] }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
var endPoint = 'http://localhost:9292/questions/horses-ducks'
export default {
  name: 'Question',
  data () {
    return {
      question: {
        premise: '',
        options: []
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
    },
    divide: function (value) {
      var divided = []
      var buffer = ''
      $.each(value.split(' '), function (index, word) {
        if ((buffer.length + word.length) > 12) {
          divided.push(buffer)
          buffer = word
        } else {
          buffer += `${word} `
        }
      })
      divided.push(buffer)
      return divided.join('<br>')
    }
  }
}
</script>
