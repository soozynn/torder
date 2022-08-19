import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageDeleteButtonSrc from "../../assets/deleteButton.svg";
import imagePlusButtonSrc from "../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../assets/minusButton.svg";
import { removeMenu } from "../../features/menu/menuSlice";

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
  font-family: "notoserif-bold";
  font-size: 2.875vw;
  line-height: 1.1;
`;

const TotalQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 6.25vw;
  height: 6.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vw; // 수정 필요
  background: none;
  border: unset;
  transition: all 0.2s;
`;

const TotalQuantity = styled.p`
  font-family: "notoserif-semibold";
  font-size: 3.5vw;
  letter-spacing: -0.175vw;
`;

export default function ShoppingCartHistory({ list }) {
  const { name, option, price } = list;
  const [totalQuantity, setTotalQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!totalQuantity) {
      // dispatch(removeMenu(id));
    }
  }, [totalQuantity, dispatch]);

  const handleClickPlusButton = () => {
    setTotalQuantity((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    setTotalQuantity((prev) => prev - 1);
  };

  return (
    <ShoppingCartHistoryContainer>
      <DeleteButton>
        <Icon alt="delete" src={imageDeleteButtonSrc} />
      </DeleteButton>

      <MenuInformation>
        <MenuName>{name}</MenuName>
        <MenuOption>{option ? option : ""}</MenuOption>
      </MenuInformation>

      <TotalInformation>
        <Price>{price}4000</Price>

        <TotalQuantityContainer>
          <Button onClick={handleClickPlusButton}>
            <img alt="plus" src={imagePlusButtonSrc} />
          </Button>
          <TotalQuantity>{totalQuantity}개</TotalQuantity>
          <Button onClick={handleClickMinusButton}>
            <img alt="minus" src={imageMinusButtonSrc} />
          </Button>
        </TotalQuantityContainer>
      </TotalInformation>
    </ShoppingCartHistoryContainer>
  );
}

ShoppingCartHistory.propTypes = {
  // list: PropTypes.string,
};
