# 📚 티오더 프론트앤드 과제

## 실행방법

```
$ git clone https://github.com/soozynn/torder.git
```

```
$ npm install
```

설치 후,

```
$ npm start
```

http://localhost:3000/ 을 실행시켜주세요.

## 최종 결과

<img src="./README.asset/result.gif" />

## 🏠 폴더 구조

> 처음에는 components 폴더 내부에서 페이지 별로 나누지 않았으나, 어디서 어떤 컴포넌트가 필요한지도 추적을 할 수 있도록 분리하면 더 깔끔할 것 같다는 생각이 들어 page 별로 다시한번 구조를 분리 해주었습니다.

```
src
┣ assets // icons svg folder
┣ components
┃     ┣ Bill // Bill page에서 필요한 컴포넌트만 따로 모아두었습니다.
┃     ┃  ┣ DutchPay
┃     ┃  ┣ Header
┃     ┃  ┗ OrderList
┃     ┃
┃     ┗ Main // Main page에서 필요한 컴포넌트 분리
┃        ┣ Button
┃        ┣ Category
┃        ┣ Header
┃        ┣ Label
┃        ┣ Mark
┃        ┣ Menu
┃        ┣ Navbar
┃        ┣ Notification
┃        ┣ RecallIcon
┃        ┣ ShoppingCart
┃        ┣ Sidebar
┃        ┣ SoldoutImage
┃        ┗ SubCategory
┃
┣ features
┃    ┗ menu
┃       ┗ menuSlice.js
┣ pages
┃   ┣ Bill.js
┃   ┣ DetailDescription.js
┃   ┣ Events.js
┃   ┣ Main.js
┃   ┣ Order.js
┃   ┗ Recall.js
┃
┣ store
┃   ┗ store.js
┃
┣ App.js
┣ index.js
┗ mock.json
```

## 사용한 기술 스택

```
  "@reduxjs/toolkit": "^1.8.4",
  "prop-types": "^15.8.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-redux": "^8.0.2",
  "react-router-dom": "^6.3.0",
  "styled-components": "^5.3.5",
```

- styled-components<br />
  props를 사용하여 style을 컴포넌트에 맞춰 유동적이게 적용할 수 있는 점을 좋아하기에 선택하게 되었습니다. 자체 스타일을 포함하기에 작은 컴포넌트를 잘 만들어 놓는다면 이외의 여러 프로젝트에서도 쉽게 재사용할 수 있는 이점과 이 외에도 글로벌 스타일을 주어 전체적으로 통일된 스타일 또한 적용할 수 있는 이점이 있어 해당 기술을 선택하게 되었습니다.

- @reduxjs/toolkit<br />
  스토어 설정, 리듀서 생성, 불변성 업데이트 로직 등 단순화하는 유틸리티가 포함되어 있어 사용하기 간단하고, 더 적은 코드로 더 많은 작업 수행 가능한 점, 또 이전과 달리 mutable 로직을 작성할 수 있으며 전체 슬라이스 상태의 생성도 자동으로 수행할 수 있는 여러 장점에 의해 상태 라이브러리로 채택하게 되었습니다.
  <br />
  실제로 사용하게 된 이유로는 props drilling 및 데이터를 추적하기 어렵다는 생각이 들어 사용하게 되었습니다.

## About

추가적으로 더 개선이 필요한 엣지 케이스 고려 및 유닛 코드 테스트도 작성하도록 하겠습니다. 또, 좀 더 재사용성있는 컴포넌트 만들기, 성능 최적화에 대해서도 더 생각해보도록 하겠습니다. 감사합니다!
