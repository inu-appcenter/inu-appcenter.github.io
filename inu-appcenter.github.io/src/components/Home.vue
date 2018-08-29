<template lang="pug">
  div#home
    Header
    Kakao
</template>

<script>
import Header from './Header'
import Kakao from './Kakao'

export default {
  name: 'home',
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
