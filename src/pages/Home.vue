<template lang="pug">
  div#home
    div.container
      div.page__wrapper
        router-view
        router-link(
          v-for="(value, key) in projectList"
          :key="key"
          :to="value.linkto"
          v-tooltip.bottom="{content: value.title, delay: {show: 500, hide: 100}}"
        ) {{ value.title }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      projectList: {
        univcam: {
          title: 'UnivCam',
          linkto: 'univcam'
        }
      }
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
