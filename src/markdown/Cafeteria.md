# 인천대학교 학식 번호판 앱 INU Cafeteria for iOS

iOS 개발 : 김선일(인천대학교 정보통신공학과, [Github](http://github.com/seonift))

[앱스토어 링크](https://itunes.apple.com/kr/app/inu-카페테리아/id1272600111?mt=8)

## 주요 기능

1. 교내 음식점 모바일 번호판 알림

앱이 online 상태인 경우, Socket.io를 이용하여 서버와 실시간 통신하며 번호판 알림.
앱이 background에 있을 때에는 FCM을 이용하여 서버로부터 푸시 메시지 수신.

2. 학생 인증용 바코드 발급

학생 인증을 거친 후, 유효한 사용자의 경우 학생 인증을 받을 수 있는 바코드 제공. 이느 교내에서 사용.
바코드 값은 학번에 따라 서버에서 발급.

## 사용한 라이브러리

1. Firebase

푸시 서비스를 구현하기 위해 구글의 Firebase 사용.

2. Alamofire

서버와 http 통신을 하기 위해 사용.

3. ObjectMapper

서버로부터 json을 받을 때 쉽게 자료를 맵핑하기 위해 사용.

4. NVActivityIndicatorView

로딩 중 화면을 보여주기 위해 사용.

5. Socket.io Client for Swift

서버와 실시간으로 데이터를 주고 받기위해 사용(번호판).

6. Toaster

안내 메시지를 띄우기 위해 사용.
