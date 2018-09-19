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
            :to="value.href"
            v-scroll-to="{el: 'body', duration: 0}"
          )
            img.home__grid--img(
              :src="value.src"
              v-tooltip.bottom="{content: key, delay: {show: 500, hide: 100}}"
            )

        TopBtn(
          v-if="this.$route.path !== '/'"
        )
</template>

<script>
import {globalVar} from '@/globalVar'
import TopBtn from '@/components/misc/TopBtn'

export default {
  name: 'home',

  metaInfo: {
    title: globalVar.nameKo,
    titleTemplate: '%s',
  },

  data () {
    return {
      projectList: {
      // add each projects below
            INUClub: {
              href: 'INUClub',
              src: 'src/assets/dist/splash.png',
            },
            INUM: {
              href: 'INUM',
              src: 'https://github.com/inu-appcenter/InuMarketIos/blob/master/InuMarket/InuMarket/Assets.xcassets/AppIcon.appiconset/ItunesArtwork@2x.png?raw=true',
            },
            UnivCam: {
              href: 'UnivCam',
              src: 'https://spemer.com/img/works/univcam/thumb.png',
            },
            INUBus: {
              href: 'INUBus',
              src: 'https://github.com/inu-appcenter/INU-Bus-Android/blob/master/app/src/main/res/drawable-xxxhdpi/ic_logo.png?raw=true',
            },
            Cafeteria: {
              href: 'Cafeteria',
              src: 'https://github.com/inu-appcenter/inu_cafeteria/blob/master/inu_cafeteria/Assets.xcassets/AppIcon.appiconset/logo@2x.png?raw=true',
            },
      },
    }
  },

  computed: {
    reverseItems() {
      return this.projectList.slice().reverse();
    }
  },

  components: {
    TopBtn,
  },

}
</script>

<style lang="scss">

#home {

  .home__grid {
    @include grid-layout();

    @media #{$landsc} {
      grid-template-columns: repeat(2, 1fr);
    }

    .home__grid--list {

      .home__grid--img {
        max-width: 100%;
        background-size: cover;
        transition: all .5s ease;
        border: 1px solid $texteee;
        background-repeat: no-repeat;
        background-position: center center;
        @include border-radius($grid2x);

        &:hover {
          border: 1px solid transparent;
          @include transform(translateY(-1%));
          @include box-shadow($grid, $grid2x, $black16);
        }
      }
    }
  }
}
</style>
