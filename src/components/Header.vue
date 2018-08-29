<template lang="pug">
  div#header
    div.container
      div.header__container.page__wrapper
        div.header__logo
          img.header__logo--img(
            src="../assets/dist/favicon.svg"
            v-scroll-to="'body'"
            v-tooltip.bottom="{content: '맨 위로', delay: {show: 500, hide: 100}}"
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
  }
}
</script>

<style lang="scss">

</style>
