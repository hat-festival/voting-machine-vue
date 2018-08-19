<template>
  <transition name='title-anim'>
    <h1 v-if='this.$store.state.title'>
      <router-link to='/' v-html='smudgeText ("Voting Machine")'></router-link>
    </h1>
  </transition>
</template>

<script>
export default {
  name: 'Title',
  methods: {
    smudgeText (text) {
      var s = ''
      var words = text
      var len = words.length
      for (var i = 0; i < len; i++) {
        var smudge = Math.random() > 0.99
        if (smudge) {
          s += `<span class='smudge'>`
        }
        s += (words.charAt(i))
        if (smudge) {
          s += `</span>`
        }
      }
      return s
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

h1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.smudge {
  color: $complementary;
}
</style>
