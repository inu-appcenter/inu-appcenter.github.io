<template lang="pug">
  div#contact
    div.container
      div.page__wrapper Contact
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {

    }
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
