<template lang="pug">
  div#contact.container
    div#markdown.page__wrapper
      div.contact__title
        h1.contact__title--text {{ $t('generic.title') }}

      div.contact__info
        p.contact__info--text(
          v-for="(value, key) in contactInfo"
          :key="key"
        ) {{ value.name }}:&nbsp;
          a.contact__info--link(
            target="_blank"
            :href="value.href"
            v-tooltip.right="{content: value.name + '(새 탭)', delay: {show: 500, hide: 100}}"
          ) {{ value.text }}

        p.contact__info--text {{ mail.name }}:&nbsp;
          span.contact__info--link(
            @click="toast"
            v-clipboard:copy="mail.text"
            v-tooltip.bottom="{content: '복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
          ) {{ mail.text }}
            i.fa.fa-clipboard

      GoogleMaps

      //- MailForm
</template>

<script>
import Vue from 'vue'
import {globalVar} from '@/globalVar'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
import GoogleMaps from '@/components/GoogleMaps'
// import MailForm from '@/components/MailForm'

Vue.use(Toasted)
Vue.use(VueClipboard)

export default {
  name: 'contact',

  metaInfo: {
    title: globalVar.nameKo,
    titleTemplate: '%s - Contact',
  },

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
  },

  components: {
    GoogleMaps,
    // MailForm
  },
}
</script>

<style lang="scss">

#contact {
  width: 100%;

  // .contact__title {

  //   .contact__title--text {

  //   }
  // }

  .contact__info {

    .contact__info--text {
      display: inline;
      @include line-height($grid5x);

      &:not(:last-child) {

        ::after {
          white-space: pre;
          content: '\a';
        }
      }

      .contact__info--link {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        .fa-clipboard {
          color: $text999;
          padding-left: $grid;
        }
      }
    }
  }
}
</style>
