<template lang="pug">
  div#about
    div.container
      About#markdown.page__wrapper
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
  },
  mounted () {
    let getAnchorTags = document.querySelectorAll('li a');
    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if(!getAnchorTarget) {
        anchor.setAttribute('target', '_blank')
      }
    })
  }
}
</script>

<style lang="scss">

</style>
