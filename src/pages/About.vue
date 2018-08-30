<template lang="pug">
  div#about
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
            :href="value.href"
            target="_blank"
          ) :&nbsp;{{ value.href }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'about',
  data () {
    return {
      nameKo: globalVar.nameKo,
      memberList: {
        Android: [
          { name: '이채은',
            href: 'https://github.com/chaeeun',
          },
          { name: '황견주',
            href: 'https://github.com/Kyun-J',
          },
          { name: '이가윤',
            href: 'https://github.com/Gayoon',
          },
          { name: '손민재',
            href: 'https://github.com/bungabear',
          },
          { name: '김성민',
            href: 'https://github.com/pinokio531',
          },
          { name: '김승현',
            href: 'https://github.com/coee',
          },
          { name: '김근영',
          },
          { name: '이동언',
            href: 'https://github.com/ide127',
          },
          { name: '송진석',
          },
          { name: '김바른',
            href: 'https://github.com/qkfms2298',
          },
          { name: '김지선',
          },
          { name: '최아현',
            href: 'https://github.com/ChoiAhHyun',
          },
          { name: '김도연',
          },
          { name: '정고운',
            href: 'https://github.com/GowoonJ',
          },
          { name: '윤동관',
            href: 'https://github.com/YoonDongGwan',
          },
        ],
        iOS: [
          { name: '김선일',
            href: 'https://github.com/Seonift',
          },
          { name: '최은영',
            href: 'https://github.com/emily7485',
          },
          { name: '이준상',
            href: 'https://github.com/zunzunzun',
          },
          { name: '조용문',
            href: 'https://github.com/choymoon',
          },
          { name: '조준영',
            href: 'https://github.com/youngblu',
          },
          { name: '김재희',
            href: 'https://github.com/jaehui327',
          },
          { name: '황동균',
            href: 'https://github.com/dongdong97',
          },
          { name: '김민지',
          },
          { name: '이형주',
            href: 'https://github.com/hyungju2',
          },
          { name: '김수현',
            href: 'https://github.com/suhyun9921',
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
            href: 'https://github.com/ftilrftilr12',
          },
          { name: '권대우',
          },
          { name: '임동완',
            href: 'https://github.com/doukong',
          },
          { name: '박소현',
            href: 'https://github.com/sohyeonpark0901',
          },
          { name: '손혜선',
            href: 'https://github.com/SonHyeSeon',
          },
          { name: '한현우',
          },
          { name: '노창환',
            href: 'https://github.com/nohchanghwan',
          },
          { name: '임헌준',
            href: 'https://github.com/Limheonjun',
          },
        ],
        Design: [
          { name: '서혁',
            href: 'https://github.com/spemer',
          },
          { name: '김진웅',
            href: 'https://github.com/Woongdesign',
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
          { name: '왕윤석',
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
