<template lang="pug">
  div#project
    router-view
    TopBtn
</template>

<script>
import TopBtn from '@/components/misc/TopBtn'

export default {
  name: 'markdown',

  components: {
    TopBtn,
  },

}
</script>

<style lang="scss">
#project {
  padding: $grid24x 0;
}
</style>
