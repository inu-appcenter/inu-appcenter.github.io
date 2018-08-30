<template lang="pug">
  div#home
    div.container
      div.page__wrapper
        router-view
        div.home__grid(
           v-if="this.$route.path === '/'"
        )
          router-link.home__grid--list(
            v-for="(value, key) in projectList"
            :key="key"
            :to="value.linkto"
          )
            img.home__grid--img(
              :src="value.src"
            )
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      projectList: {
        univcam: {
          title: 'UnivCam',
          linkto: 'univcam',
          src: 'https://spemer.com/img/works/univcam/thumb.png'
        },
      }
    }
  }
}
</script>

<style lang="scss">
@import '../style/style.scss';

#home {

  .home__grid {
    @include grid-layout();

    @media #{$landsc} {
      grid-template-columns: repeat(2, 1fr);
    }

    .home__grid--list {

      .home__grid--img {
        max-width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        transition: all .5s ease;
        border: 1px solid $texteee;
        @include grid-layout();
        @include border-radius($grid2x);

        &:hover {
          border: 1px solid transparent;
          transition: all .25s ease;
          @include box-shadow($grid, $grid2x, $black16);
        }
      }
    }
  }
}
</style>
