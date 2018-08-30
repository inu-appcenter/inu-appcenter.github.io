<template lang="pug">
  div#google-map
    GmapMap.GmapMap(
      :zoom="15"
      :center="{lat:37.376547, lng:126.635774}"
      v-tooltip.bottom="{content: adr, delay: {show: 500, hide: 100}}"
    )
      GmapMarker(
        :clickable="false"
        :draggable="false"
        :position="{lat:37.376547, lng:126.635774}"
      )
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: "GoogleMap",

  data() {
    return {
      center: { lat: globalVar.lat, lng: globalVar.lng },
      adr: '인천대학교 송도캠퍼스 4호관 107호'
    }
  },
}
</script>

<style lang="scss">
@import '../style/style.scss';

#google-map {

  .GmapMap {
    width: 100%;
    height: 50vh;
    max-height: 400px;
    margin-top: $grid8x;

    .gmnoprint,
    button {
      display: none;
    }
  }
}
</style>
