<template>
  <ul class='nav'>
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
</template>

<script>
export default {
  name: 'Menu'
}
</script>
