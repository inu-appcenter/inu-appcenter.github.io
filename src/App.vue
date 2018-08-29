<template lang="pug">
  div#app
    Header
    router-view
    Footer
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Kakao from '@/components/Kakao'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer,
    Kakao
  },
  updated () {
    let getAnchorTags = document.querySelectorAll('#markdown a');
    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if(!getAnchorTarget)
        anchor.setAttribute('target', '_blank')
    })
  }
}
</script>

<style lang="scss">

</style>
