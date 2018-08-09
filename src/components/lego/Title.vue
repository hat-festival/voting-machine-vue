<template>
  <transition name='title-anim'>
    <h1 v-if='this.$store.state.title'>
      <router-link to='/'>Voting Machine</router-link>
    </h1>
  </transition>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang='scss'>
h1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
