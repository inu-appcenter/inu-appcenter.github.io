<template lang="pug">
  div#home
    div.container
      div.page__wrapper
        router-view
        div.home__grid(
           v-if="this.$route.path === '/'"
        )
          router-link.home__grid--list(
            v-for="(value, key) in projectList"
            :key="key"
            :to="value.linkto"
          )
            img.home__grid--img(
              :src="value.src"
            )
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      projectList: {
        univcam: {
          title: 'UnivCam',
          linkto: 'univcam',
          src: 'https://spemer.com/img/works/univcam/thumb.png'
        },
      }
    }
  }
}
</script>

<style lang="scss">

</style>
