<template lang="pug">
  div#footer
    div.container
      div.footer__container.page__wrapper
        div.footer__sns
          a.footer__sns--link.fa(
            v-for="(value, key) in snsList"
            :href="'https://' + value.href"
            target="_blank"
            aria-hidden="true"
            :class="'fa-' + value.iconClass"
            :id="value.iconID"
            v-tooltip.top="{content: '인천대학교 앱센터 ' + value.title + '(새 탭)', delay: {show: 500, hide: 100}}"
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
      snsList: {
        facebook: {
          href: 'facebook.com/INUAppCenter',
          iconID : 'fbIcon',
          iconClass : 'facebook-square',
          title: '페이스북'
        },
        instagram: {
          href: 'instagram.com/inuappcen',
          iconID : 'igIcon',
          iconClass : 'instagram',
          title: '인스타그램'
        },
        github: {
          href: 'github.com/inu-appcenter',
          iconID : 'ghIcon',
          iconClass : 'github',
          title: '깃허브'
        }
      }
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
