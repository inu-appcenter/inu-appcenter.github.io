<template lang="pug">
  div#hero
    div.hero__dim
      div.hero__image
      div.container
        div.hero__text
          h1.hero__text--title {{ $t('generic.title') }}
          p.hero__text--subtitle {{ nameEnFull }}

        button.hero__scrolldown(
          v-scroll-to="{el: '.home__grid', duration: 0, offset: -120}"
          v-tooltip.bottom="{content: '프로젝트 보기', delay: {show: 500, hide: 100}}"
        )
          i.fa.fa-angle-down
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'hero',

  data () {
    return {
      nameKo: globalVar.nameKo,
      nameEnFull: globalVar.nameEnFull,
    }
  },

}
</script>

<style lang="scss">

$baseURI: '../assets/dist/hero.jpg';

#hero {
  width: 100%;
  height: 480px;
  position: relative;
  margin-top: $grid14x;
  background-image: url('#{$baseURI}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media #{$tablet} {
    max-height: calc(92vh - #{$grid16x});
  }


  .hero__dim {
    height: 100%;
    background-color: $black38;

    .hero__text {
      top: 50%;
      left: 50%;
      color: #fff;
      position: absolute;
      text-align: center;
      margin-right: -50%;
      @include transform(translate(-50%, -50%));

      .hero__text--title {

        @media #{$middle} {
          @include font-size($grid6x);
        }
      }

      .hero__text--subtitle {
        margin-top: -#{$grid4x};
      }
    }

    .hero__scrolldown {
      left: 50%;
      color: #fff;
      bottom: $grid8x;
      width: $grid12x;
      height: $grid12x;
      border: 1px solid #fff;
      transition: all .25s ease;
      position: absolute !important;
      display: inline-block !important;
      @include border-radius($grid12x);
      @include transform(translateX(-50%));

      &:hover {
        background-color: $brand;
        border: 1px solid transparent;
      }

      .fa-angle-down {
        @include font-size($grid6x);
      }
    }
  }
}
</style>
