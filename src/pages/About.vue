<template lang="pug">
  div#about
    div.container
      About#markdown.page__wrapper
</template>

<script>
import About from '@/md/about.md'

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
