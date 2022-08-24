import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imagePlusButtonSrc from "../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../assets/minusButton.svg";

const MenuInformationContainer = styled.div`
  padding: 3.125vw 5vw 3.75vw;
  box-sizing: border-box;
  border-bottom: 1vw solid #f6f6f6;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-family: "NotoSerifKR-semibold";
  font-size: 3.25vw;
  letter-spacing: -0.1625vw;
`;

const Price = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 3.5vw;
  color: #131313;
`;

const MenuQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5vw;
`;

const QuantityText = styled.p`
  font-family: "NotoSerifKR-semibold";
  font-size: 3.25vw;
  letter-spacing: -0.1625vw;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.25vw;
  height: 10.25vw;
  background: none;
  border: unset;
  transition: all 0.2s;
`;

const CountIcon = styled.img`
  width: 5.75vw;
  height: 5.75vw;
`;

const Quantity = styled.p`
  width: 7.5vw;
  font-family: "NotoSerifKR-semibold";
  font-size: 3.5vw;
  letter-spacing: -0.175vw;
  text-align: center;
`;

export default function MenuInformation({
  soldOut,
  price,
  quantity,
  handleClickPlusButton,
  handleClickMinusButton,
  maxQuantity,
}) {
  return (
    <MenuInformationContainer>
      <PriceContainer>
        <Title>가격</Title>
        <Price>{price.toLocaleString()}원</Price>
      </PriceContainer>

      <MenuQuantityContainer>
        {!soldOut && (
          <>
            <QuantityText>수량</QuantityText>
            <QuantityWrapper>
              {maxQuantity !== 1 && (
                <ButtonWrapper onClick={handleClickPlusButton}>
                  <CountIcon alt="plus" src={imagePlusButtonSrc} />
                </ButtonWrapper>
              )}
              <Quantity>{quantity}개</Quantity>
              {maxQuantity !== 1 && (
                <ButtonWrapper onClick={handleClickMinusButton}>
                  <CountIcon alt="minus" src={imageMinusButtonSrc} />
                </ButtonWrapper>
              )}
            </QuantityWrapper>
          </>
        )}
      </MenuQuantityContainer>
    </MenuInformationContainer>
  );
}

MenuInformation.propTypes = {
  soldOut: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleClickPlusButton: PropTypes.func.isRequired,
  handleClickMinusButton: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number.isRequired,
};
