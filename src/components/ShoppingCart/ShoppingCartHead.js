import React from "react";
import styled from "styled-components";

import Recall from "../Recall";

const ShoppingCartHeadContainer = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  height: 7vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const HeadText = styled.p`
  width: 16.25vw;
  height: 3.75vw;
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/front/Intersection-no-shadow.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: "notoserif-bold";
  font-size: 2.625vw;
  letter-spacing: -0.13125vw;
  filter: drop-shadow(0 -3.25vw 3.125vw rgba(0, 0, 0, 0.1));
`;

export default function ShoppingCartHead() {
  return (
    <ShoppingCartHeadContainer>
      <HeadText>펼쳐보기</HeadText>
    </ShoppingCartHeadContainer>
  );
}
