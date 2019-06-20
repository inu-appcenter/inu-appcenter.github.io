<template lang="pug">
  div#home
    div.container
      div.page__wrapper
        router-view
        div.home__grid(
          v-if="this.$route.path == '/'"
        )
          div.home__grid--parent(
            v-for="(section, index) in Object.keys(entries)"
            :key="index"
          )
            div.home__grid--list(
              v-for="entry in entries[section]"
              :key="entry.id"
              @click="$router.push({name: entry.id})"
            )
              progressive-img.home__grid--img(
                :src="entry.src"
                v-tooltip.top="{content: key, delay: {show: 500, hide: 100}}"
              )
              figcaption {{ entry.caption }}

        TopBtn(
          v-if="this.$route.path !== '/'"
        )
</template>

<script>
import POST_ENTRIES from '@/statics/data/post.json'
import TopBtn from '@/components/misc/TopBtn'

export default {
  name: 'home',

  computed: {
    entries: _ => POST_ENTRIES,
  },

  components: {
    TopBtn,
  },

}
</script>

<style lang="scss">
#home {
  .home__grid {
    .home__grid--parent {
      @include grid-layout();

      @media #{$landsc} {
        grid-template-columns: repeat(2, 1fr);
      }

      .home__grid--list {
        .home__grid--img {
          max-width: 100%;
          background-size: cover;
          transition: all 0.5s ease;
          border: 1px solid $texteee;
          background-repeat: no-repeat;
          background-position: center center;
          @include border-radius($grid2x);

          &:hover {
            border: 1px solid transparent;
            @include transform(translateY(-1%));
            @include box-shadow($grid, $grid2x, $black16);
          }
        }

        figcaption {
          color: $text333;
          font-weight: 700;
          text-align: center;
          @include font-size($grid4x);
        }
      }
    }
  }
}
</style>
