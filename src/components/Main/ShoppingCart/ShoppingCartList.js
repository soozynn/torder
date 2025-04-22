import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import RecallIcon from "../RecallIcon/index";
import ShoppingCartHead from "./ShoppingCartHead";
import ShoppingCartHistory from "./ShoppingCartHistory";
import Button from "../Button/index";
import {
  orderMenuListInCart,
  removeAllMenuToCart,
} from "@features/menu/menuSlice";

const ShoppingCartListContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 43.75vh;
  margin: 0;
  padding: 0;
`;

const RecallWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2.5vw;
  top: -15.75vw;
  width: 17vw;
  height: 17vw;
`;

const ShoppingCartBackground = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(43.75vh - 3.75vw);
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
  padding: 0.7vw 1.6vw;
  background-color: unset;
  border: 1px solid #000000;
  border-radius: 4px;
  font-weight: 600;
  font-size: 2.5vw;
`;

const ShoppingCartContainer = styled.div`
  flex: 1;
  padding: 0 3.125vw;
  box-sizing: border-box;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ShoppingCartWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30.25vw;
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
  font-family: "notoserif-bold";
  font-size: 3.25vw;
  font-weight: 700;
  letter-spacing: -0.08125vw;
`;

const TotalPrice = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 3.75vw;
  color: #b51900;
  letter-spacing: -0.09375vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 14.625vw;
  gap: 1.25vw;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 22.5vw;
`;

const OrderButtonWrapper = styled.div`
  flex: 1;
`;

export default function ShoppingCartList({
  cartList,
  setIsOpenNotification,
  setNotificationText,
  setShowsShoppingCart,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickRecallButton = () => {
    navigate("/callStaff", { replace: true });
  };

  const handleClickCloseButton = () => {
    setShowsShoppingCart(false);
  };

  const handleClickOrderButton = () => {
    dispatch(orderMenuListInCart());
    setShowsShoppingCart(false);
    setIsOpenNotification(true);
    setNotificationText("주문을 완료했습니다.");
  };

  const handleClickAllDeleteButton = () => {
    dispatch(removeAllMenuToCart());
    setShowsShoppingCart(false);
  };

  useEffect(() => {
    if (!cartList.length) {
      setShowsShoppingCart(false);
    }
  }, [cartList.length, setShowsShoppingCart]);

  return (
    <ShoppingCartListContainer>
      <RecallWrapper>
        <RecallIcon onClick={handleClickRecallButton} />
      </RecallWrapper>
      <ShoppingCartHead />

      <ShoppingCartBackground>
        <HistoryHeader>
          <ShoppingCartTitle>장바구니</ShoppingCartTitle>
          <AllDeleteButton onClick={handleClickAllDeleteButton}>
            전체 삭제 X
          </AllDeleteButton>
        </HistoryHeader>

        <ShoppingCartContainer>
          <ShoppingCartWrapper>
            {cartList.map((menu) => (
              <ShoppingCartHistory
                key={menu.id}
                menu={menu}
                setNotificationText={setNotificationText}
                setIsOpenNotification={setIsOpenNotification}
              />
            ))}
          </ShoppingCartWrapper>
        </ShoppingCartContainer>

        <HistoryListTotal>
          <TotalText>
            총 {cartList.length}가지{" "}
            {cartList.reduce(
              (accumulator, object) => accumulator + object.count,
              0
            )}
            개
          </TotalText>
          <TotalPrice>
            {cartList
              .reduce(
                (accumulator, object) =>
                  accumulator + object.price * object.count,
                0
              )
              .toLocaleString()}
            원
          </TotalPrice>
        </HistoryListTotal>

        <ButtonContainer>
          <CloseButtonWrapper>
            <Button
              onClick={handleClickCloseButton}
              width="18.75vw"
              height="11.5vw"
            >
              닫기
            </Button>
          </CloseButtonWrapper>

          <OrderButtonWrapper>
            <Button
              background="red"
              width="72.5vw"
              height="11.5vw"
              onClick={handleClickOrderButton}
            >
              주문하기
            </Button>
          </OrderButtonWrapper>
        </ButtonContainer>
      </ShoppingCartBackground>
    </ShoppingCartListContainer>
  );
}

ShoppingCartList.propTypes = {
  setIsOpenNotification: PropTypes.func.isRequired,
  setNotificationText: PropTypes.func.isRequired,
  setShowsShoppingCart: PropTypes.func,
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
};
