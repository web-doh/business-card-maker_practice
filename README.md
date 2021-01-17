# Web Business Card Maker - practice

### 기간

- 2021/01/03 - 2021/01/17

### 프로젝트 접근 방식

- 기능을 한 가지씩 추가해 나가는 방식으로 진행
  <br/>

1. react-router와 firebase 사용하여 로그인 페이지 구현

- github, google 연동 로그인 (팝업)
- 사이트 개별 sign up / login 페이지 분리

2. react-router의 useLocation을 활용하여, 내비게이션 바에 스타일링 추가

- 현재 location pathname과 동일한 메뉴의 이름 색상 변경하기

3. 로그인 유저와 로그인 하지 않은 유저의 path 분리

4. firebase의 database와 cloudinary 이미지 업로드 api를 활용하여 
   사진이 있는 카드를 회원 아이디, 카드 아이디 별로 저장할 수 있는 기능 구현

5. state를 활용해서 카드 작성 시 미리보기 기능 구현 

6. state를 활용해서 카드 편집 관련 토글 버튼 만들기 (버튼 클릭시, 편집 & 삭제 버튼 보여주기)

7. css grid로 cards(로그인한 유저) 및 public(로그인하지 않은 유저) 페이지 레이아웃 구성

8. logout 버튼 및 card 삭제 버튼 클릭시 confirm 팝업창 띄우는 기능 구현
