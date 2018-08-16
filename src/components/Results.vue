<template>
  <div id='pie'>
    <h2>EMF Camp 2018 would rather fight</h2>
    <pie-chart
      :data='results'
      :colors='colours'
      ></pie-chart>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

Chart.defaults.pie.cutoutPercentage = 5
Chart.defaults.global.legend.position = 'right'
Chart.defaults.global.legend.labels.fontSize = 24
Chart.defaults.global.elements.arc.borderWidth = 5

export default {
  name: 'Results',
  data () {
    return {
      results: {
        duck: 1,
        horses: 1
      },
      colours: ['#f44242', '#f49b42']
    }
  },
  mounted () {
    var self = this
    axios.get('http://localhost:9292/results')
      .then(response => (
        self.results = response.data
      ))

    var style = getComputedStyle(document.body)
    Chart.defaults.global.elements.arc.borderColor = style.getPropertyValue('--colour-secondary')
    Chart.defaults.global.legend.labels.fontFamily = style.getPropertyValue('--font-default')
    Chart.defaults.global.legend.labels.fontColor = style.getPropertyValue('--colour-complementary')
    self.colours = [
      style.getPropertyValue('--colour-primary'),
      style.getPropertyValue('--colour-complementary')
    ]
  }
}
</script>

<style lang='scss'>
// @import 'src/assets/sass/custom';
</style>
