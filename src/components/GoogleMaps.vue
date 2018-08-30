<template lang="pug">
  div#google-map
    GmapMap.GmapMap(
      :center="{lat:37.376547, lng:126.635774}"
      :zoom="15"
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

    .map__text {
      position: absolute;
      top: 0;
    }

    .gmnoprint,
    button {
      display: none;
    }
  }
}
</style>
