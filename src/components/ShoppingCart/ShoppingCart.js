import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Recall from "../Recall";
import ShoppingCartHead from "./ShoppingCartHead";
import ShoppingCartHistory from "./ShoppingCartHistory";
import Button from "../Button/index";

const ShoppingCartContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 43.75vh;
  margin: 0;
  padding: 0;
`;

const RecallWrapper = styled.div`
  position: absolute;
  right: 2.5vw;
  top: -15.75vw;
  width: 17vw;
  height: 17vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShoppingCartBackground = styled.div`
  height: calc(43.75vh - 3.75vw);
  display: flex;
  flex-direction: column;
  margin-top: 3.75vw;
  background-color: #fff;
  box-shadow: 0 -1.25vw 3.75vw 0 rgb(0 0 0 / 16%);
  border-radius: 3.125vw 3.125vw 0 0;
  box-sizing: border-box;
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.375vw 3.75vw 1vw;
  box-sizing: border-box;
`;

const ShoppingCartTitle = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 3.25vw;
  letter-spacing: -0.08125vw;
`;

const AllDeleteButton = styled.p`
  padding: 5px 10px;
  background-color: unset;
  border: 1.2px solid #000000;
  border-radius: 8px;
  font-weight: 600;
  font-size: 2.5vw;
`;

const ShoppingCartListContainer = styled.div`
  flex: 1;
  padding: 0 3.125vw;
  box-sizing: border-box;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ShoppingCarListWrapper = styled.div`
  height: 30.25vw;
  display: flex;
  align-items: center;
  margin-top: 2vw;
  padding-right: 3.125vw;
  gap: 2.5vw;
`;

const HistoryListTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25vw 3.75vw 1.75vw;
  box-sizing: border-box;
`;

const TotalText = styled.p`
  font-family: "NotoSerifKR";
  font-size: 3.25vw;
  font-weight: 700; // not work
  letter-spacing: -0.08125vw;
`;

const TotalPrice = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 3.75vw;
  color: #b51900;
  letter-spacing: -0.09375vw;
`;

const ButtonContainer = styled.div`
  height: 14.625vw;
  display: flex;
  align-items: center;
  gap: 1.25vw;

  :last-child {
    margin-right: 4vw;
  }
`;

const CloseButtonWrapper = styled.div`
  width: 16.5vw;
  display: flex;
  justify-content: flex-end;
`;

const OrderButtonWrapper = styled.div`
  flex: 1;
`;

export default function ShoppingCart() {
  const shoppingCartList = useSelector((state) => state.menu.bill);

  return (
    <ShoppingCartContainer>
      <RecallWrapper>
        <Recall />
      </RecallWrapper>
      <ShoppingCartHead />

      <ShoppingCartBackground>
        <HistoryHeader>
          <ShoppingCartTitle>장바구니</ShoppingCartTitle>
          <AllDeleteButton>전체 삭제 X</AllDeleteButton>
        </HistoryHeader>

        <ShoppingCartListContainer>
          <ShoppingCarListWrapper>
            {shoppingCartList.map((list) => (
              <ShoppingCartHistory key={list.id} list={list} />
            ))}
          </ShoppingCarListWrapper>
        </ShoppingCartListContainer>

        <HistoryListTotal>
          <TotalText>
            총 {shoppingCartList.length}가지{" "}
            {/* {shoppingCartList
              .map((item) => item.count)
              .reduce((prev, next) => prev + next)} */}
            개
          </TotalText>
          <TotalPrice>
            {/* {shoppingCartList
              .map((item) => item.price)
              .reduce((prev, next) => prev + next)} */}
            원
          </TotalPrice>
        </HistoryListTotal>

        <ButtonContainer>
          <CloseButtonWrapper>
            <Button>닫기</Button>
          </CloseButtonWrapper>
          <OrderButtonWrapper>
            <Button color="red">주문하기</Button>
          </OrderButtonWrapper>
        </ButtonContainer>
      </ShoppingCartBackground>
    </ShoppingCartContainer>
  );
}
