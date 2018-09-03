<template lang="pug">
  div#hero
    div.hero__image
    div.container
      div.hero__text
        h1.hero__text--title {{ nameKo }}
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
@import '../style/style.scss';
$baseURI: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=443ecc7e4ff4ad0f3fbf446325d76ede&auto=format&fit=crop&w=1950&q=80';

#hero {
  width: 100%;
  height: 640px;
  position: relative;
  margin-top: $grid14x;
  background-image: url('#{$baseURI}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media #{$pablet} {
    max-height: calc(96vh - #{$grid14x});
  }

  .hero__text {
      top: 50%;
      left: 50%;
      color: #fff;
      position: absolute;
      text-align: center;
      margin-right: -50%;
      transform: translate(-50%, -50%);

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
    position: absolute;
    display: inline-block;
    border: 1px solid #fff;
    transition: all .25s ease;
    transform: translateX(-50%);
    @include border-radius($grid12x);

    &:hover {
      background-color: $brand;
      border: 1px solid transparent;
    }

    .fa-angle-down {
      @include font-size($grid6x);
    }
  }
}
</style>
