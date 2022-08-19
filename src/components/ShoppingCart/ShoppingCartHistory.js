import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageDeleteButtonSrc from "../../assets/deleteButton.svg";

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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const PlusButton = styled.button`
  width: 10.25vw;
  height: 10.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: unset;
  transition: all 0.2s;
`;

const TotalQuantity = styled.p`
  font-family: "notoserif-semibold";
  font-size: 3.5vw;
  letter-spacing: -0.175vw;
`;

const MinusButton = styled.button`
  width: 10.25vw;
  height: 10.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: unset;
  transition: all 0.2s;
`;

export default function ShoppingCartHistory({ list }) {
  const { name, option, price } = list;
  const [totalQuantity, setTotalQuantity] = useState(1);

  const handleClickPlusButton = () => {
    setTotalQuantity((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    setTotalQuantity((prev) => prev - 1);
  };

  return (
    <ShoppingCartHistoryContainer>
      <DeleteButton>
        <img alt="delete" src={imageDeleteButtonSrc} />
      </DeleteButton>

      <MenuInformation>
        <MenuName>{name}</MenuName>
        <MenuOption>{option ? option : ""}</MenuOption>
      </MenuInformation>

      <TotalInformation>
        <Price>{price}</Price>
        <TotalQuantityContainer>
          <PlusButton onClick={handleClickPlusButton}></PlusButton>
          <TotalQuantity>{totalQuantity}개</TotalQuantity>
          <MinusButton onClick={handleClickMinusButton}></MinusButton>
        </TotalQuantityContainer>
      </TotalInformation>
    </ShoppingCartHistoryContainer>
  );
}

ShoppingCartHistory.propTypes = {
  // list: PropTypes.string,
};
