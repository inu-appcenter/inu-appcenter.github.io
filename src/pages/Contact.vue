<template lang="pug">
  div#contact
    div.contact__title
      h1.contact__title--text {{nameKo}}
    div.contact__info
      p.contact__info--text(
        v-for="(value, key) in contactInfo"
        :key="key"
      ) {{ value.name }}:&nbsp;
        a.contact__info--link(
          target="_blank"
          :href="value.href"
        ) {{ value.text }}

      p.contact__info--text {{ mail.name }}:&nbsp;
        span.contact__info--link(
          @click="toast"
          v-clipboard:copy="mail.text"
          v-tooltip.bottom="{content: '복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
        ) {{ mail.text }}
          i.fa.fa-clipboard
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'contact',
  data () {
    return {
      nameKo: globalVar.nameKo,
      contactInfo: {
        kakao: {
          name: '카카오톡 플러스친구',
          href: globalVar.kakaoURL,
          text: '@인천대앱센터',
        },
        fb: {
          name: '페이스북',
          href: globalVar.fbURL,
          text: '앱센터 페이스북',
        },
      },
      mail: {
        name: '이메일',
        text: globalVar.mailTo,
      },
    }
  },
  methods: {
    toast () {
      this.$toasted.show('이메일 주소가 복사되었습니다', {
        theme: "primary",
        position: "bottom-center",
        duration : 2000
      })
    }
  }
}
</script>

<style lang="scss">

</style>
