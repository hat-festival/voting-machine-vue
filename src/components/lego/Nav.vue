<template>
  <div>
    <div id='header'>
      <Toggle></Toggle>
      <Title></Title>
      <hr>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'
import Toggle from './Toggle'
import Title from './Title'
import Menu from './Menu'

export default {
  name: 'Nav',
  components: {
    Toggle,
    Title,
    Menu
  },
  mixins: [onClickOutside],
  data () {
    return {
      menu: false,
      title: true
    }
  },
  methods: {
    toggle () {
      this.$store.commit('toggle')
    },
    close () {
      this.$store.commit('showTitle')
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: $secondary;
  height: 70px;
  z-index: 90;

  hr {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
  }

  a {
    text-decoration: none;
    color: $link-colour;
  }
}

.title-anim-enter-active,
.title-anim-leave-active,
.tabs-anim-enter-active,
.tabs-anim-leave-active
{
  transition: transform 1s;
}

.title-anim-enter-to,
.title-anim.leave,
.tabs-anim-enter-to,
.tabs-anim.leave
{
  transform: translateX(0);
}

.title-anim-enter,
.title-anim-leave-to
{
  transform: translateX(-$translate-distance);
}

.tabs-anim-enter,
.tabs-anim-leave-to
{
  transform: translateX($translate-distance);
}
</style>
