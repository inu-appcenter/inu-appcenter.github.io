<template lang="pug">
  div#univcam
    UnivCam#markdown
</template>

<script>
import {globalVar} from '@/globalVar'
import UnivCam from '@/md/projects/univcam.md'

// https://www.npmjs.com/package/vue-markdown-loader

export default {
  name: 'univcam',

  data () {
    return {
      baseURI: globalVar.univCam,
    }
  },

  components: {
    UnivCam
  },
}
</script>

<style lang="scss">

</style>
