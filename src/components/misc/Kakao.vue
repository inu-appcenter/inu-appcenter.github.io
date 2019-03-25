<template lang="pug">
  div#plusfriend-addfriend-button
    img(
      @click="plusFriendChat"
      src="/src/assets/dist/kakao.svg"
      v-tooltip.left="{content: '카카오톡 문의하기', delay: {show: 500, hide: 100}}"
    )
</template>

<script>
export default {
  name: 'kakao-btn',

  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: '_xgxaSLd'
      })
    }
  },

}
</script>

<style lang="scss">
#plusfriend-addfriend-button {
  &:not(.contact__each) {
    @keyframes popup {
      from {
        opacity: 0;
        @include transform(scale(0));
      }
      to {
        opacity: 1;
        @include transform(scale(1));
      }
    }

    right: $grid4x;
    bottom: $grid4x;
    position: fixed;
    animation: popup 0.25s ease-in-out 2.5s 1 forwards;
    @include transform(scale(0));

    img {
      cursor: pointer;
      border-radius: $grid8x;
      transition: all 0.25s ease;
      @include box-shadow($grid3x, $grid4x, $black08);

      &:hover {
        @include transform(scale(1.05));
        @include box-shadow($grid3x, $grid4x, $black16);
      }
    }
  }
}
</style>
