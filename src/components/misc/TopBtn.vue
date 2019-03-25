<template lang="pug">
  div#top(
    v-scroll-to="{el: 'body', duration: 0}"
  )
    button.topbtn__btn(
    ) {{ $t('generic.top') }}
</template>

<script>
export default {
  name: 'topBtn',

  data () {
    return {
      tooltip: '맨 위로',
    }
  },

  methods: {
  },

}
</script>

<style lang="scss">
#top {
  .topbtn__btn {
    border: none;
    outline: none;
    color: $brand;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    width: $grid32x;
    height: $grid12x;
    font-weight: 900;
    margin-top: $grid16x;
    border: $brand 1px solid;
    background-color: #fff;
    transition: all 0.25s ease;
    @include border-radius($grid32x);

    &:hover {
      color: #fff;
      background-color: $brand;
    }
  }
}
</style>
