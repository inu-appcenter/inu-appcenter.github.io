<template lang="pug">
  div#project
    INUM(v-if="this.$route.path === '/INUM'")
    INUClub(v-if="this.$route.path === '/INUClub'")
    UnivCam(v-if="this.$route.path === '/UnivCam'")
    INUBus(v-if="this.$route.path === '/INUBus'")
    Cafeteria(v-if="this.$route.path === '/Cafeteria'")
</template>

<script>
// '@/markdown/*' 에 위치한 마크다운 파일들을 import 하고, 위에서 router로 불러오기 + '@/routes/index.js' 에 등록 필수
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
