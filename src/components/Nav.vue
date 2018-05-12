<template>
  <div id='nav'>
    <a
      class='toggle small-disc'
      v-on:click='show = !show'
      >
      <icon name='bars'></icon>
    </a>
    <transition name='fade'>
      <ul
        class='nav flex-column'
        id='nav'
        v-if='show'
        >
        <li>
          <router-link
            v-bind:to="'/'"
            >
            Question
          </router-link>
        </li>
        <li>
          <router-link
            v-bind:to="'/about'"
            >
            About
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      show: false
    }
  }
}
</script>
