import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageSelectButtonSrc from "../../assets/selectButton.svg";
import imageUnSelectButtonSrc from "../../assets/unSelectButton.svg";
import imagePlusButtonSrc from "../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../assets/minusButton.svg";
console.log(imageSelectButtonSrc);
const OptionContainer = styled.div`
  min-height: 12vw;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25vw;
  border: ${(props) =>
    props.selected ? "0.125vw solid #000000" : "0.125vw solid #e8e8e8"};
  border-radius: 1.25vw;
  padding: 0 3.75vw;
  box-sizing: border-box;
`;

const OptionNameWrapper = styled.div`
  width: 41.625vw;
  display: flex;
  align-items: center;
  gap: 2.5vw;
`;

const OptionIcon = styled.img`
  width: 5.75vw;
  height: 5.75vw;
`;

const OptionName = styled.span`
  flex: 1;
  font-family: "NotoSerifKR-bold";
  font-size: 3vw;
  letter-spacing: -0.075vw;
  width: 26.875vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const OptionPriceWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const OptionPrice = styled.span`
  flex: 1;
  font-family: "NotoSerifKR-bold";
  font-size: 3.5vw;
  text-align: right;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875vw;
`;

const Quantity = styled.p`
  width: 6.875vw;
  font-family: "NotoSerifKR-semibold";
  font-size: 3.5vw;
  letter-spacing: -0.175vw;
  text-align: center;
`;

const ButtonIcon = styled.p`
  width: 5.75vw;
  height: 5.75vw;
`;

export default function Option({
  item,
  onClick,
  setNotificationText,
  setIsOpenNotification,
  slectedOptionName,
  setOption,
  setSelcetedOptionName,
}) {
  const { displayName, price, optionQuantityLimit } = item;

  const [quantity, setQuantity] = useState(optionQuantityLimit);

  const handleClickPlusButton = () => {
    if (quantity >= optionQuantityLimit) {
      setNotificationText("더 이상 수량을 추가할 수 없습니다.");
      setIsOpenNotification(true);
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    if (quantity <= optionQuantityLimit) {
      setNotificationText("더 이상 선택할 수 없습니다.");
      setIsOpenNotification(true);
      return;
    }

    setQuantity((prev) => prev - 1);
  };

  const handleClickOptionIcon = () => {
    setSelcetedOptionName(item.displayName);
    setOption((prev) => [
      ...prev,
      { slectedOptionName, count: quantity, price },
    ]);
  };

  return (
    <OptionContainer
      onClick={onClick}
      selected={displayName === slectedOptionName}
    >
      <OptionNameWrapper>
        <div>
          {displayName === slectedOptionName ? (
            <OptionIcon
              alt="selected-option"
              src={imageSelectButtonSrc}
              onClick={handleClickOptionIcon}
            />
          ) : (
            <OptionIcon
              alt="unselected-option"
              src={imageUnSelectButtonSrc}
              onClick={handleClickOptionIcon}
            />
          )}
        </div>

        <OptionName>{displayName}</OptionName>
      </OptionNameWrapper>

      <OptionPriceWrapper>
        <QuantityWrapper>
          {optionQuantityLimit > 1 && (
            <div onClick={handleClickPlusButton}>
              <ButtonIcon alt="plus" src={imagePlusButtonSrc} />
            </div>
          )}
          <Quantity>{quantity}개</Quantity>
          {optionQuantityLimit > 1 && (
            <div onClick={handleClickMinusButton}>
              <ButtonIcon alt="minus" src={imageMinusButtonSrc} />
            </div>
          )}
        </QuantityWrapper>
        <OptionPrice>+ {price.toLocaleString()}원</OptionPrice>
      </OptionPriceWrapper>
    </OptionContainer>
  );
}

Option.propTypes = {
  setNotificationText: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    optionQuantityLimit: PropTypes.number.isRequired,
  }).isRequired,
};
