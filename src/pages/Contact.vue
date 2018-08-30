<template lang="pug">
  div#contact
    div.container
      div.page__wrapper
        div.contact__title
          h1.contact__title--text {{nameKo}}

</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'contact',
  data () {
    return {
      nameKo: globalVar.nameKo,
      nameEn: globalVar.nameEn,
      kakaoURL: globalVar.kakaoURL,
      mailTo: globalVar.mailTo,
      callTo: globalVar.callTo,
      fbURL: globalVar.fbURL,
    }
  }
}
</script>

<style lang="scss">

</style>
