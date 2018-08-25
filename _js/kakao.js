const dotenv = require('dotenv').config();

dotenv.connect({
  kakaoUrl: process.env.KAKAO_URL,
  kakaoKey: process.env.KAKAO_KEY
});


Kakao.init(process.env.KAKAO_URL);
function plusFriendChat() {
  Kakao.PlusFriend.chat({
    plusFriendId: process.env.KAKAO_KEY
  });
}