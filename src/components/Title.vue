<template>
  <h1 v-bind:style="{ textAlign: computedAlign }">Voting Machine</h1>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      show: true,
      align: 'center'
    }
  },
  computed: {
    computedAlign: function () {
      return this.align
    }
  },
  created: function () {
    this.$root.$on('title-true', () => {
      this.align = 'center'
    })

    this.$root.$on('title-false', () => {
      console.log('hide')
      this.align = 'left'
    })
  }
}
</script>
