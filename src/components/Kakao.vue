<template lang="pug">
  div#plusfriend-addfriend-button
    img(
      v-tooltip.left="{content: '카카오톡 문의하기', delay: {show: 500, hide: 100}}"
      @click="plusFriendChat"
      src="/src/assets/dist/kakao.svg"
    )
</template>

<script>
export default {
  name: 'kakao-btn',

  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: process.env.KAKAO_URL
      })
    }
  },

}
</script>

<style lang="scss">

#plusfriend-addfriend-button{

  &:not(.contact__each) {

    @keyframes popup {
      from {
        opacity: 0;
        transform: scale(0);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    right: $grid4x;
    bottom: $grid4x;
    position: fixed;
    transform: scale(0);
    animation: popup .25s ease-in-out 2.5s 1 forwards;

    img {
      cursor: pointer;
      border-radius: $grid8x;
      transition: all .25s ease;
      @include box-shadow($grid3x, $grid4x, $black08);

      &:hover {
        @include box-shadow($grid3x, $grid4x, $black16);
      }
    }
  }
}
</style>
