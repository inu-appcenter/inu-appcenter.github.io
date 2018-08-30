<template lang="pug">
  div#univcam
    UnivCam#markdown
</template>

<script>
import UnivCam from '@/md/projects/univcam.md'
import {globalVar} from '@/globalVar'

export default {
  name: 'univcam',
  data () {
    return {
      baseURI: globalVar.univCam
    }
  },
  components: {
    UnivCam
  }
}
</script>

<style lang="scss">
@import '../../style/style.scss';


</style>
