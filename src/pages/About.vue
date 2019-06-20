<template lang="pug">
  div#about.container
    div#markdown.page__wrapper
      div.about__title
        h1.about__title--title {{ $t('generic.title') }}
        p.about__title--text
          |  {{ $t('generic.about') }}

      div.about__members--list(
        v-for="(value, key, index) in memberList"
        :key="key"
      )
        h1.about__members--title {{ key }}
        div.about__members(
          v-for="(value, key) in value"
          :key="key"
        )
          p.about__members--text {{ value.name }}
            span(v-if="value.href") :
            a.about__members--link(
              v-if="value.href"
              :href="'https://github.com/' + value.href"
              target="_blank"
              v-tooltip.right="{content: `${value.name}'s GitHub (새 탭)`, delay: {show: 500, hide: 100}}"
            ) &nbsp;github.com/{{ value.href }}

      TopBtn
</template>

<script>
import TopBtn from '@/components/misc/TopBtn'
import { mapState } from 'vuex'

export default {
  name: 'about',

  computed: {
    ...mapState([
      'memberList',
    ]),
  },

  components: {
    TopBtn,
  },

}
</script>

<style lang="scss">
#about {
  .about__title {
    .about__title--text {
      margin-bottom: $grid12x;
    }
  }

  .about__members--list {
    .about__members--title {
      margin-top: $grid12x;
    }

    .about__members {
      .about__members--text {
        font-weight: 900;
        margin-left: $grid2x;
        @include line-height($grid3x);

        .about__members--link {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
