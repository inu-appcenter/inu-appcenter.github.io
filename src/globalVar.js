import Vue from 'vue'

export const globalVar = new Vue ({
  data: {
    nameKo: '인천대학교 앱센터',
    nameEn: 'INU Appcenter',
    nameEnFull: 'Incheon National University Appcenter',

    fbURL: 'https://www.facebook.com/INUAppCenter',
    igURL: 'https://instagram.com/inuappcen',
    ghURL: 'https://github.com/inu-appcenter',
    mailTo: 'inuappcenter@gmail.com',
    kakaoURL: 'https://pf.kakao.com/' + process.env.KAKAO_URL,

    lat: '37.376547',
    lng: '126.635774',

    univCam: 'https://rawgit.com/inu-appcenter/UnivCam-ios/master/README.md'
  }
})
