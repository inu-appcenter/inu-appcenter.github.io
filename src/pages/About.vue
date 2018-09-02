<template lang="pug">
  div#about.container
    div#markdown.page__wrapper
      div.about__title
        h1.about__title--title {{nameKo}}
        p.about__title--text
          | INU Appcenter is an academic club focused on mobile and web application developments, based in Incheon National University.

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
            a.about__members--link(
              v-if="value.href"
              :href="'https://github.com/' + value.href"
              target="_blank"
            ) :&nbsp;https://github.com/{{ value.href }}

      TopBtn
</template>

<script>
import {globalVar} from '@/globalVar'
import TopBtn from '@/components/TopBtn'

export default {
  name: 'about',

  metaInfo: {
    title: globalVar.nameKo,
    titleTemplate: '%s - About',
  },

  data () {
    return {
      nameKo: globalVar.nameKo,

      memberList: {
        Android: [
          { name: '이채은',
            href: 'chaeeun',
          },
          { name: '황견주',
            href: 'Kyun-J',
          },
          { name: '이가윤',
            href: 'Gayoon',
          },
          { name: '손민재',
            href: 'bungabear',
          },
          { name: '김성민',
            href: 'pinokio531',
          },
          { name: '김승현',
            href: 'coee',
          },
          { name: '김근영',
          },
          { name: '이동언',
            href: 'ide127',
          },
          { name: '송진석',
          },
          { name: '김바른',
            href: 'qkfms2298',
          },
          { name: '김지선',
          },
          { name: '최아현',
            href: 'ChoiAhHyun',
          },
          { name: '김도연',
          },
          { name: '정고운',
            href: 'GowoonJ',
          },
          { name: '윤동관',
            href: 'YoonDongGwan',
          },
        ],
        iOS: [
          { name: '김선일',
            href: 'Seonift',
          },
          { name: '최은영',
            href: 'emily7485',
          },
          { name: '이준상',
            href: 'zunzunzun',
          },
          { name: '조용문',
            href: 'choymoon',
          },
          { name: '조준영',
            href: 'youngblu',
          },
          { name: '김재희',
            href: 'jaehui327',
          },
          { name: '황동균',
            href: 'dongdong97',
          },
          { name: '김민지',
          },
          { name: '이형주',
            href: 'hyungju2',
          },
          { name: '김수현',
            href: 'suhyun9921',
          },
          { name: '전예린',
          },
          { name: '유용상',
          },
        ],
        Server: [
          { name: '권순재',
          },
          { name: '최찬호',
            href: 'ftilrftilr12',
          },
          { name: '권대우',
          },
          { name: '임동완',
            href: 'doukong',
          },
          { name: '박소현',
            href: 'sohyeonpark0901',
          },
          { name: '손혜선',
            href: 'SonHyeSeon',
          },
          { name: '한현우',
          },
          { name: '노창환',
            href: 'nohchanghwan',
          },
          { name: '임헌준',
            href: 'Limheonjun',
          },
        ],
        Design: [
          { name: '서혁',
            href: 'spemer',
          },
          { name: '김진웅',
            href: 'Woongdesign',
          },
          { name: '김민아',
          },
          { name: '남효신',
          },
          { name: '김리현',
          },
          { name: '정준기',
          },
          { name: '정서연',
          },
          { name: '양효정',
          },
          { name: '진정민',
          },
          { name: '이예린',
          },
          { name: '문보은',
          },
        ]
      }
    }
  },

  components: {
    TopBtn
  },
}
</script>

<style lang="scss">
@import '../style/style.scss';

#about {

  .about__title {

    // .about__title--title {

    // }

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
