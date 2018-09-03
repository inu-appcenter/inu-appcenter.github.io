<template lang="pug">
  div#app
    Header
    Hero(v-if="this.$route.path === '/'")
    router-view
    Footer
    Kakao
    vue-progress-bar
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Kakao from '@/components/Kakao'

export default {
  name: 'app',

  data () {
    return {
      f: 'inu-appcenter.firebaseapp.com',
    }
  },

  created () {
    let u = window.location.href
    if (u.indexOf(this.f) != 1) {
      u = this.f
    }
  },

  components: {
    Header,
    Hero,
    Footer,
    Kakao
  },

  updated () {
    let getAnchorTags = document.querySelectorAll('#markdown a');

    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if(!getAnchorTarget)
        anchor.setAttribute('target', '_blank')
    })
  },

  mounted () {
    this.$Progress.finish()
  },

  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
}
</script>

<style lang="scss">

</style>
