<template lang="pug">
  div#about
    div.about__title
      h1.about__title--title {{nameKo}}
      p.about__title--text
        | INU Appcenter is an academic club focused on mobile and web application developments, based in Incheon National University.
      About#markdown
</template>

<script>
import {globalVar} from '@/globalVar'
import About from '@/md/about.md'

export default {
  name: 'about',
  data () {
    return {
      nameKo: globalVar.nameKo,
    }
  },
  components: {
    About
  }
}
</script>

<style lang="scss">
@import '../style/style.scss';

#about {
  width: 640px;

  .about__title {

    // .about__title--title {

    // }

    .about__title--text {
      margin-bottom: $grid12x;
    }
  }
}
</style>
