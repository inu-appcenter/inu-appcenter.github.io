<template lang="pug">
  div#project
    UnivCam(v-if="this.$route.path === '/univcam'")
    INUClub(v-if="this.$route.path === '/inuclub'")
</template>

<script>
import {globalVar} from '@/globalVar'

import UnivCam from '@/projects/markdown/univcam.md'
import INUClub from '@/projects/markdown/inuclub.md'

export default {
  components: {
    UnivCam,
    INUClub,
  },
}
</script>
