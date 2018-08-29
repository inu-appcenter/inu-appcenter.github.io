<template lang="pug">
  div#home
    div.alt__container
      router-view
      router-link(
        v-for="(value, key) in projectList"
        :key="key"
        :to="value.linkto"
      ) {{ value.title }}
        //- v-tooltip.bottom="{content: 'value.title', delay: {show: 500, hide: 100}}"
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
  }
}
</script>

<style lang="scss">

</style>
