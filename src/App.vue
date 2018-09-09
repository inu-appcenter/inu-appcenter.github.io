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
import Vue from 'vue'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Kakao from '@/components/misc/Kakao'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#034A9A',
  height: '2px'
})

export default {
  name: 'app',

  data () {
    return {
      g: 'inu-appcenter.github.io',
      f: 'https://inu-appcenter.firebaseapp.com',
    }
  },

  created () {
    // redirect to f
    if (window.location.href.indexOf(this.g) > -1) {
      window.location.href = this.f
    }

    // load progressbar
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

  mounted () {
    this.$Progress.finish()
  },

  components: {
    Header,
    Hero,
    Footer,
    Kakao
  },

  // set target (_blank) for a tags w/ #markdown
  updated () {
    let getAnchorTags = document.querySelectorAll('#markdown a');

    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if(!getAnchorTarget)
        anchor.setAttribute('target', '_blank')
    })
  },
}
</script>

<style lang="scss">

</style>
