<template lang="pug">
  div#about
    div.alt__container
      About#markdown
</template>

<script>
import About from '../md/about.md'

export default {
  name: 'about',
  data () {
    return {

    }
  },
  components: {
    About
  }
}
</script>

<style lang="scss">

</style>
