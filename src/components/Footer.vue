<template lang="pug">
  div#footer
    div.footer--container
      div.footer__gh
        a.footer__gh--link.fa.fa-github(
          target="_blank"
          :href="acURL"
          v-tooltip.top="{content: '앱센터 깃허브', delay: {show: 500, hide: 100}}"
        )

      div.footer__copyright
        p.footer__copyright--text
          | © {{ thisYear }} INU Appcenter. All rights reserved.
</template>

<script>
export default {
  name: 'footer-el',
  data () {
    return {
      year: '',
      acURL: 'https://github.com/inu-appcenter'
    }
  },
  computed: {
    thisYear() {
      return this.year = new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">

</style>
