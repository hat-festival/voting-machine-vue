<template>
  <div>
    <Foldable title='Docker' :content='content' type='markdown'></Foldable>
  </div>
</template>

<script>
import docker from '../../../DOCKER.md'
import Foldable from './Foldable'

export default {
  name: 'Addresses',
  components: {
    Foldable
  },
  data () {
    return {
      content: docker
    }
  }
}
</script>
