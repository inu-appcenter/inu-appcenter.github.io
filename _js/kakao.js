const dotenv = require('dotenv').config();

dotenv.connect({
  kakaoUrl: process.env.KAKAO_URL,
  kakaoKey: process.env.KAKAO_KEY
});
