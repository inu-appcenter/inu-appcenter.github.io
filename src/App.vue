<template lang="pug">
  div#app
    Header
    router-view
    Footer
    Kakao
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Kakao from './components/Kakao'

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
  }
}
</script>

<style lang="scss">

</style>
