<template lang="pug">
  div#header
    router-link(
      :to="'/home'"
    ) Home
    router-link(
      :to="'/about'"
    ) about
    router-link(
      :to="'/contact'"
    ) contact
</template>

<script>
export default {
  name: 'header-el',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
