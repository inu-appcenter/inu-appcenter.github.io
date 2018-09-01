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

        TopBtn(
          v-if="this.$route.path !== '/'"
        )
</template>

<script>
import {globalVar} from '@/globalVar'
import TopBtn from '@/components/TopBtn'

export default {
  name: 'home',

  metaInfo: {
    title: globalVar.nameKo,
    titleTemplate: '%s',
  },

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
  },

  components: {
    TopBtn
  },
}
</script>

<style lang="scss">
@import '../style/style.scss';

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
        @include grid-layout();
        @include border-radius($grid2x);

        &:hover {
          transition: all .25s ease;
          border: 1px solid transparent;
          @include box-shadow($grid, $grid2x, $black16);
        }
      }
    }
  }
}
</style>
