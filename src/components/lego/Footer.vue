<template>
  <div>
    <div id='footer'>
      <hr>
      Follow
      <!-- <a @click="toggleModal" href='#'> -->
        @horses_v_ducks (Mastodon and Twitter)
      <!-- </a> -->
      for the latest updates
    </div>

    <div class="modal is-active animated fadeIn" v-if='showModal'>
      <div class="modal-background"></div>
      <div class="modal-content">
      <Timeline :id="'horses_v_ducks'" :sourceType="'profile'" :options="{ tweetLimit: '1' }"></Timeline>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleModal"></button>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'Footer',
  components: {
    Timeline
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang='scss'>
@import 'src/assets/sass/custom';

.modal {
  z-index: 99;
}
</style>
