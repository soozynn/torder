import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageDeleteButtonSrc from "../../../assets/deleteButton.svg";
import imagePlusButtonSrc from "../../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../../assets/minusButton.svg";
import {
  addMenuToCart,
  removeMenuToCart,
  reduceMenuToCart,
} from "../../../features/menu/menuSlice";

const ShoppingCartHistoryContainer = styled.div`
  position: relative;
  min-width: 27.5vw;
  height: 30.25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f3f2;
  border-radius: 2.5vw;
  box-sizing: border-box;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 7.875vw;
  height: 7.875vw;
  display: flex;
  justify-content: flex-end;
  transform: translate(15%, -15%);
  filter: drop-shadow(0 0 1vw rgba(0, 0, 0, 0.2));
`;

const Icon = styled.img`
  width: 5.25vw;
  height: 5.25vw;
`;

const MenuInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.375vw;
  gap: 0.625vw;
  box-sizing: border-box;
`;

const MenuName = styled.p`
  width: 100%;
  max-height: 7.25vw;
  display: -webkit-box;
  padding: 0 2.75vw;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.33;
  font-family: "NotoSerifKR-bold";
  font-size: 2.625vw;
  letter-spacing: -0.06625vw;
`;

const MenuOption = styled.p`
  padding: 0 2.75vw;
  box-sizing: border-box;
  font-family: "NotoSerifKR";
  font-size: 2.375vw;
  color: #0080ff;
  text-decoration: underline;
`;

const TotalInformation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Price = styled.p`
  padding: 0 2.75vw;
  font-family: "NotoSerifKR-bold";
  font-size: 2.875vw;
  line-height: 1.1;
`;

const TotalQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 10.25vw;
  height: 10.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: unset;
  transition: all 0.2s;
`;

const ButtonIcon = styled.img`
  width: 5.75vw;
  height: 5.75vw;
`;

const TotalQuantity = styled.p`
  font-family: "NotoSerifKR-semibold";
  font-size: 3.5vw;
  letter-spacing: -0.175vw;
`;

export default function ShoppingCartHistory({
  menu,
  setNotificationText,
  setIsOpenNotification,
}) {
  const { name, option, price, count, orderMaxQuantity, orderMinQuantity } =
    menu;

  const [quantity, setQuantity] = useState(orderMinQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickDeleteButton = () => {
    dispatch(removeMenuToCart(menu.id));
  };

  const handleClickViewOptions = () => {
    navigate("/cartOption", { replace: true });
  };

  const handleClickPlusButton = () => {
    if (quantity >= orderMaxQuantity) {
      setIsOpenNotification(true);
      setNotificationText("더 이상 수량을 추가할 수 없습니다.");
      return;
    }

    dispatch(
      addMenuToCart({
        id: menu.id,
        name: menu.name,
        price: menu.price,
        count: 1,
      })
    );
    setQuantity((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    if (!quantity) {
      dispatch(removeMenuToCart(menu.id));
      return;
    }

    if (quantity >= orderMaxQuantity) {
      setIsOpenNotification(true);
      setNotificationText(`최소 주문 수량이 ${orderMaxQuantity}개 입니다.`);
      return;
    }

    dispatch(
      reduceMenuToCart({
        id: menu.id,
      })
    );
    setQuantity((prev) => prev - 1);
  };

  return (
    <ShoppingCartHistoryContainer>
      <DeleteButton onClick={handleClickDeleteButton}>
        <Icon alt="delete" src={imageDeleteButtonSrc} />
      </DeleteButton>

      <MenuInformation>
        <MenuName>{name}</MenuName>
        <MenuOption onClick={handleClickViewOptions}>
          {option ? "옵션보기" : ""}
        </MenuOption>
      </MenuInformation>

      <TotalInformation>
        <Price>{price.toLocaleString()}</Price>

        <TotalQuantityContainer>
          <Button onClick={handleClickPlusButton}>
            <ButtonIcon alt="plus" src={imagePlusButtonSrc} />
          </Button>

          <TotalQuantity>{count}개</TotalQuantity>

          <Button onClick={handleClickMinusButton}>
            <ButtonIcon alt="minus" src={imageMinusButtonSrc} />
          </Button>
        </TotalQuantityContainer>
      </TotalInformation>
    </ShoppingCartHistoryContainer>
  );
}

ShoppingCartHistory.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
  setIsOpenNotification: PropTypes.func.isRequired,
  setNotificationText: PropTypes.func.isRequired,
};
