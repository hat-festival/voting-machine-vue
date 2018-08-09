<template>
  <div class='tabs is-centered'>
    <transition name='tabs-anim'>
      <ul v-if='this.$store.state.menu'>
        <li>
          <router-link v-bind:to="'/'">
            Question
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="'/results'">
            Results
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="'/chain'">
            Chain
          </router-link>
        </li>
        <li>
          <router-link v-bind:to="'/about'">
            About
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang='scss'>
.tabs {
  font-size: 2em;
}
</style>
