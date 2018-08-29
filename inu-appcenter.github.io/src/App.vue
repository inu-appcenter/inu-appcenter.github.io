<template lang="pug">
  div#app
    Header
    router-view
    Kakao
</template>


<script>
import Header from './components/Header'
import Kakao from './components/Kakao'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
    Kakao
  }
}
</script>

<style lang="scss">

</style>
