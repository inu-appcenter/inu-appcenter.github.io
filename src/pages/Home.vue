<template lang="pug">
  div#home
    div.alt--container Home
      a(
        v-for="(value, key) in projectList"
        :key="key"
      ) {{ value.title }}
</template>

<script>
import UnivCam from '../md/projects/univcam.md'

export default {
  name: 'home',
  data () {
    return {
      projectList: {
        univcam: {
          title: 'UnivCam'
        }
      }
    }
  },
  components: {
    UnivCam
  }
}
</script>

<style lang="scss">

</style>
