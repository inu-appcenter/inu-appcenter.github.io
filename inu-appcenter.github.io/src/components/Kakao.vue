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
  }
}
</script>

<style lang="scss">

</style>
