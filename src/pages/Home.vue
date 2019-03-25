<template lang="pug">
  div#home
    div.container
      div.page__wrapper
        router-view

        div.home__grid(
          v-if="this.$route.path == '/'"
        )
          router-link.home__grid--list(
            v-for="(value, key) in projectList"
            :key="key"
            :to="value.href"
          )
            progressive-img.home__grid--img(
              :src="value.src"
              v-tooltip.top="{content: key, delay: {show: 500, hide: 100}}"
            )
            figcaption {{ value.caption }}

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
            INUM: {
              href: 'INUM',
              src: 'src/assets/dist/INUM.png',
              caption: '인천대 중고나라',
            },
            INUClub: {
              href: 'INUClub',
              src: 'src/assets/dist/INUClub.png',
              caption: '동아리어플',
            },
            UnivCam: {
              href: 'UnivCam',
              src: 'https://spemer.com/img/works/univcam/thumb.png',
              caption: 'UnivCam',
            },
            INUBus: {
              href: 'INUBus',
              src: 'src/assets/dist/INUBus.png',
              caption: '인천대 버스알림',
            },
            Cafeteria: {
              href: 'Cafeteria',
              src: 'src/assets/dist/Cafeteria.png',
              caption: 'INU 카페테리아',
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
        transition: all 0.5s ease;
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

      figcaption {
        color: $text333;
        font-weight: 700;
        text-align: center;
        @include font-size($grid4x);
      }
    }
  }
}
</style>
