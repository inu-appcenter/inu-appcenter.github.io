import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,

  state: {
    thisYear: new Date().getFullYear(),

    nameKo: '인천대학교 앱센터',
    nameEn: 'INU Appcenter',
    nameEnFull: 'Incheon National University Appcenter',

    fbURL: 'https://www.facebook.com/INUAppCenter',
    igURL: 'https://instagram.com/inuappcen',
    ghURL: 'https://github.com/inu-appcenter',
    mailTo: 'inuappcenter@gmail.com',
    kakaoURL: 'https://pf.kakao.com/_xgxaSLd',

    lat: '37.376547',
    lng: '126.635774',

    menuList: {
      Home: '/home',
      About: '/about',
      Contact: '/contact'
    },

    contactInfo: {
      kakao: {
        name: '카카오톡 플러스친구',
        href: this.kakaoURL,
        text: '@인천대앱센터',
      },
      fb: {
        name: '페이스북',
        href: this.fbURL,
        text: '앱센터 페이스북',
      },
    },

    mail: {
      name: '이메일',
      text: this.mailTo,
    },

    snsList: {
      facebook: {
        href: this.fbURL,
        iconID: 'fbIcon',
        iconClass: 'facebook-square',
        title: '페이스북'
      },
      instagram: {
        href: this.igURL,
        iconID: 'igIcon',
        iconClass: 'instagram',
        title: '인스타그램'
      },
      github: {
        href: this.ghURL,
        iconID: 'ghIcon',
        iconClass: 'github',
        title: '깃허브'
      }
    },

    projectList: {
      // 라우터(index.js), Project.vue 파일과 일치해야합니다
      INUM: {
        href: 'INUM',
        src: 'src/assets/dist/INUM.png',
        caption: '인천대 중고나라',
      },
      INUClub: {
        href: 'INUClub',
        src: 'src/assets/dist/INUClub.png',
        caption: '동아리어플',
      },
      UnivCam: {
        href: 'UnivCam',
        src: 'https://spemer.com/img/works/univcam/thumb.png',
        caption: 'UnivCam',
      },
      INUBus: {
        href: 'INUBus',
        src: 'src/assets/dist/INUBus.png',
        caption: '인천대 버스알림',
      },
      Cafeteria: {
        href: 'Cafeteria',
        src: 'src/assets/dist/Cafeteria.png',
        caption: 'INU 카페테리아',
      },
    },

    memberList: {
      Android: [{
          name: '이채은',
          href: 'chaeeun',
        },
        {
          name: '황견주',
          href: 'Kyun-J',
        },
        {
          name: '이가윤',
          href: 'Gayoon',
        },
        {
          name: '손민재',
          href: 'bungabear',
        },
        {
          name: '김성민',
          href: 'pinokio531',
        },
        {
          name: '김승현',
          href: 'coee',
        },
        {
          name: '김근영',
          href: ''
        },
        {
          name: '이동언',
          href: 'ide127',
        },
        {
          name: '송진석',
          href: ''
        },
        {
          name: '김바른',
          href: 'qkfms2298',
        },
        {
          name: '최아현',
          href: 'ChoiAhHyun',
        },
        {
          name: '김도연',
          href: ''
        },
        {
          name: '정고운',
          href: 'GowoonJ',
        },
        {
          name: '윤동관',
          href: 'YoonDongGwan',
        },
      ],
      iOS: [{
          name: '김선일',
          href: 'Seonift',
        },
        {
          name: '이준상',
          href: 'zunzunzun',
        },
        {
          name: '조용문',
          href: 'choymoon',
        },
        {
          name: '조준영',
          href: 'junyng',
        },
        {
          name: '김재희',
          href: 'jaehui327',
        },
        {
          name: '황동균',
          href: 'dongdong97',
        },
        {
          name: '김민지',
          href: ''
        },
        {
          name: '이형주',
          href: 'hyungju2',
        },
        {
          name: '김수현',
          href: 'suhyun9921',
        },
        {
          name: '전예린',
          href: ''
        },
        {
          name: '유용상',
          href: ''
        },
      ],
      Server: [{
          name: '권순재',
          href: ''
        },
        {
          name: '최찬호',
          href: 'ftilrftilr12',
        },
        {
          name: '권대우',
          href: ''
        },
        {
          name: '임동완',
          href: 'doukong',
        },
        {
          name: '박소현',
          href: 'sohyeonpark0901',
        },
        {
          name: '손혜선',
          href: 'SonHyeSeon',
        },
        {
          name: '한현우',
          href: ''
        },
        {
          name: '노창환',
          href: 'nohchanghwan',
        },
        {
          name: '임헌준',
          href: 'Limheonjun',
        },
      ],
      Web: [{
          name: '김성민',
          href: 'pinokio531'
        },
        {
          name: '임동완',
          href: 'doukong'
        },
        {
          name: '김광훈',
          href: 'kwang-hoon'
        },
        {
          name: '류재경',
          href: 'ryujk'
        },
        {
          name: '서혁',
          href: 'spemer',
        },
      ],
      Design: [{
          name: '서혁',
          href: 'spemer',
        },
        {
          name: '김진웅',
          href: 'Woongdesign',
        },
        {
          name: '김민아',
          href: ''
        },
        {
          name: '남효신',
          href: ''
        },
        {
          name: '김리현',
          href: 'KLeehy'
        },
        {
          name: '정준기',
          href: ''
        },
        {
          name: '정서연',
          href: ''
        },
        {
          name: '양효정',
          href: ''
        },
        {
          name: '진정민',
          href: ''
        },
        {
          name: '이예린',
          href: ''
        },
        {
          name: '문보은',
          href: ''
        },
      ]
    },
  }

})
