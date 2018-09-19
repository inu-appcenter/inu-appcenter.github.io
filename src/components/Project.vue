<template lang="pug">
  div#project
    INUClub(v-if="this.$route.path === '/INUClub'")
    INUM(v-if="this.$route.path === '/INUM'")
    UnivCam(v-if="this.$route.path === '/UnivCam'")
    INUBus(v-if="this.$route.path === '/INUBus'")
    Cafeteria(v-if="this.$route.path === '/Cafeteria'")
</template>

<script>
import {globalVar} from '@/globalVar'

import INUClub from '@/markdown/INUClub.md'
import INUM from '@/markdown/INUM.md'
import UnivCam from '@/markdown/UnivCam.md'
import INUBus from '@/markdown/INUBus.md'
import Cafeteria from '@/markdown/Cafeteria.md'

export default {
  components: {
    INUClub,
    INUM,
    UnivCam,
    INUBus,
    Cafeteria,
  },
}
</script>
