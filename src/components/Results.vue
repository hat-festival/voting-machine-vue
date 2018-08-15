<template>
  <div id='pie'>
    <h2>EMF Camp 2018 would rather fight</h2>
    <pie-chart :data='results'
      :colors="['#f44242', '#f49b42']"
      ></pie-chart>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

Chart.defaults.pie.cutoutPercentage = 5
Chart.defaults.global.legend.position = 'right'
// Chart.defaults.global.legend.labels.fontFamily = 'Amatic SC'
Chart.defaults.global.legend.labels.fontFamily = 'Kirang Haerang'
Chart.defaults.global.legend.labels.fontSize = 24
Chart.defaults.global.elements.arc.borderWidth = 5
Chart.defaults.global.elements.arc.borderColor = 'rgb(243, 239, 224)'

export default {
  name: 'Results',
  data () {
    return {
      results: {
        duck: 1,
        horses: 1
      }
    }
  },
  mounted () {
    var self = this
    axios.get('http://localhost:9292/results')
      .then(response => (
        self.results = response.data
      ))
  }
}
</script>
