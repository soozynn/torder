# 티오더 프론트앤드 과제

## 파일 설명

1. mock.json → 위 데이터 작업 진행 하세요.
2. fonts.scss → 폰트 파일 스타일링 파일입니다.(폰트 적용 부분은 재플린 참고)
3. util.js → description 유틸 함수 내장

## mock.json 프로퍼티 설명

```jsx
const mock = {
  // 매장 정보
  "store":{
    // 매장 id
    "id":"SCD2",
    // 매장 이름
    "name":"청담스케줄(본점)",
    // 매장 로고 이미지
    "logoURL":"https://s3.ap-northeast-2.amazonaws.com/images.good.orderhae.com/OKNCIE_SCD002/banner/KakaoTalk2022021412141216001.png",
    // 매장 배포된 버전 정보.
    "version": "v1.0.0"
  },
  // 매장 테이블 정보
  "table":{
    // 테이블 id
    "id":"1",
    // 테이블 이름
    "title":"1"
  },
  // 대 카테고리 리스트
  "categories":[
    {
      // 대 카테고리 ID
      "id":"110701",
      // 카테고리 이름
      "name":"메인"
    },
  ],
  // 서브 카테고리 리스트
  "subCategories":[
    {
      // 서브 카테고리 id
      "id":"110707",
      // 소속된 대 카테고리 Ids
      "parentCategoriesIDs":[
        "110701" // 대 카테고리 ID
      ],
      // 서브 카테고리 이름
      "name":"메인요리"
    },
  ],
  // 음식 데이터 목록
  "goods":[
    {
      // 음식 아이디
      "id":"000081",
      // 음식 이름
      "name":"반반벌집빙수",
      // 음식 가격
      "price":33000,
      // 음식 설명, 없는건 "" 빈 스트링 (v-html 속성을 사용 하세요.)
      // util.js 있는 getProductDescription 함수 필수로 사용
      "description":"샤인머스캣, 멜론, 딸기, 연시홍시 중 택2 ////※ 제철 최상급 과일을 후숙하여 사용중입니다. //조기 소진 시 주문이 어려운 점 양해 부탁드립니다.",
      // 소속된 서브 카테고리 목록
      "belongToCategories":[
        "110714" // 소속된 서브 카테고리 코드
      ],
      // 상품 이미지 주소
      "image":"https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/OKNCIE_SCD002/000081/1642850930item_700X700_toJPEGBot.jpg",
      // 품절 플래그
      "soldOut": false,
       // HIT 라벨 플래그
      "hit": false,
      // BEST 라벨 플래그
      "best": false,
      // 추천 라벨 플래그
      "recommend": false,
      // 신제품 라벨 플래그
      "new": false,
      // "orderMaxQuantity"와 "orderMinQuantity" 값이 둘다 0이라면 양수의 제한은 없다.
      // 주문 최대 수량 갯수 (2라면 장바구니에 2개보다 더 담을수 없다.)
      "orderMaxQuantity":0,
      // 주문 최소 수량 갯수 (2라면 장바구니에 담을수 있는 갯수가 최소 2개 부터 시작 1개만 주문 할 수 없다.)
      "orderMinQuantity":0,
      // 상품 옵션 그룹 배열
      "optionGroups":[
        {
          // 상품 그룹 이름
          "name":"반반빙수",
          // 선택할수 있는 옵션 갯수 최대 2가지를 고를 수 있다.(1가지만 고르고 장바구니에 담을수 있다.)
          "selectedOptionLimit":2,
          // 필수면 true, 선택이면 false
          "require": true,
          // 옵션 항목들
          "optionItems":[
            {
              // 옵션 이름
              "optionName":"반반빙수(딸기)",
              // 옵션 가격
              "price":0,
              // 옵션 갯수 증감 버튼은 옵션 갯수 리밋이 2이상 일 때부터 출현한다.
              // 0 이라면 양수는 제한이 없다.
              "optionQuantityLimit":1
            }
          ]
        }
      ]
    }
  ],
  // 이벤트 데이트
  "event":[
    {
      // 이벤트 아이디
      "id": 1,
      // 이벤트 명(헤더)
      "name" : "타다 LITE 20% 쿠폰 증정",
      // 이벤트 이미지
      "imgUrl" : "https://s3.ap-northeast-2.amazonaws.com/recruit.torder.io/front/test/assets/tada.png"
    }
  ],
  // 직원 호출 서비스 아이템
  "serviceItems":[
    {
      // 서비스 이름
      "name":"얼음컵",
      // 서비스 id
      "id":"000123"
    }
  ]
}
```
