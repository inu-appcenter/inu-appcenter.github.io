<template lang="pug">
  div#project
    INUM(v-if="this.$route.path === '/INUM'")
    INUClub(v-else-if="this.$route.path === '/INUClub'")
    UnivCam(v-else-if="this.$route.path === '/UnivCam'")
    INUBus(v-else-if="this.$route.path === '/INUBus'")
    Cafeteria(v-else-if="this.$route.path === '/Cafeteria'")
</template>

<script>
import INUM from '@/markdown/INUM.md'
import INUClub from '@/markdown/INUClub.md'
import UnivCam from '@/markdown/UnivCam.md'
import INUBus from '@/markdown/INUBus.md'
import Cafeteria from '@/markdown/Cafeteria.md'

export default {
  components: {
    INUM,
    INUClub,
    UnivCam,
    INUBus,
    Cafeteria,
  },
}
</script>
