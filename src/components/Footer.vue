<template lang="pug">
  div#footer
    div.container
      div.footer__container.page__wrapper
        div.footer__sns
          a.footer__sns--link.fa(
            v-for="(value, key) in snsList"
            :href="value.href"
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
import {globalVar} from '@/globalVar'

export default {
  name: 'footer-el',

  data () {
    return {
      year: '',

      snsList: {
        facebook: {
          href: globalVar.fbURL,
          iconID : 'fbIcon',
          iconClass : 'facebook-square',
          title: '페이스북'
        },
        instagram: {
          href: globalVar.igURL,
          iconID : 'igIcon',
          iconClass : 'instagram',
          title: '인스타그램'
        },
        github: {
          href: globalVar.ghURL,
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
  },
}
</script>

<style lang="scss">

#footer {
  width: 100%;
  margin-top: $grid8x;
  padding: $grid8x 0 $grid12x;
  border-top: $texteee 1px solid;

  .footer__container {
    margin: 0 auto;
    text-align: center;

    .footer__sns {

      .footer__sns--link {
        color: $text999;
        margin-top: $grid4x;
        transition: all .25s ease;
        padding: 0 $grid4x $grid4x $grid4x;
        @include font-size($grid6x);

        &:hover {
          color: $text333;
          @include transform(scale(1.1));
        }

        &#fbIcon {

          &:hover {
            color: $fbIcon;
          }
        }

        &#igIcon {

          &:hover {
            color: $igIcon;
          }
        }

        &#ghIcon {

          &:hover {
            color: $ghIcon;
          }
        }
      }
    }

    .footer__copyright {

      .footer__copyright--text {
        @include font-size($grid3x);
      }
    }
  }
}
</style>
