<template lang="pug">
  div#header
    div.container
      div.header__container.page__wrapper
        div.header__logo
          router-link(
            :to="'/home'"
            v-scroll-to="{el: 'body', duration: 0}"
            v-tooltip.bottom="{content: 'Home', delay: {show: 500, hide: 100}}"
          )
            img.header__logo--img(
              src="../assets/dist/favicon.svg"
            )

        div.header__link
          router-link.header__link--each(
            v-for="(value, key) in menuList"
            :key="key"
            :to="value"
            v-scroll-to="{el: 'body', duration: 0}"
            v-tooltip.bottom="{content: key, delay: {show: 500, hide: 100}}"
          ) {{ key }}
</template>

<script>
export default {
  name: 'header-el',

  data () {
    return {
      menuList: {
        Home: '/home',
        About: '/about',
        Contact: '/contact'
      }
    }
  },
}
</script>

<style lang="scss">

#header {
  top: 0;
  z-index: 10;
  width: 100%;
  position: fixed;
  height: $grid14x;
  align-items: center;
  background-color: #fff;
  @include box-shadow($grid2x, $grid3x);

  .header__container {
    margin: 0 auto;

    .header__logo {
      float: left;

      .header__logo--img {
        cursor: pointer;
        width: $grid10x;
        height: $grid10x;
        padding: $grid2x 0;
      }
    }

    .header__link {
      float: right;

      .header__link--each {
        font-weight: 900;
        display: inline-block;
        padding: $grid4x 0 $grid4x $grid4x;

        &:not(:last-child) {
          padding: $grid4x;
        }

        @media #{$pablet} {
          padding-left: $grid2x;

          &:not(:last-child) {
            padding: $grid4x $grid2x;
          }
        }
      }
    }
  }
}
</style>
