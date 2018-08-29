<template lang="pug">
  div#header
    div.header__container
      div.header__logo
        img.header__logo--img(
          src="../assets/dist/favicon.svg"
        )
      div.header__link
        router-link.header__link--each(
          v-for="(value, key) in menuList"
          :key="key"
          :to="value"
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
