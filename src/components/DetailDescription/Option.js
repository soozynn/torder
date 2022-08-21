import React, { useState } from "react";
import styled from "styled-components";

import imageSelectButtonSrc from "../../assets/selectButton.svg";
import imageUnSelectButtonSrc from "../../assets/unSelectButton.svg";
import imagePlusButtonSrc from "../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../assets/minusButton.svg";

const OptionContainer = styled.div`
  min-height: 12vw;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25vw;
  border: ${(props) =>
    props.select ? "0.125vw solid #000000" : "0.125vw solid #e8e8e8"};
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
  width: 4.5vw;
  height: 4.5vw;
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

const ButtonIcon = styled.div`
  width: 5.75vw;
  height: 5.75vw;
`;

export default function Option({
  soldOut,
  onClick,
  displayName,
  price,
  limit,
}) {
  const [limitQuantity, setLimitQuantity] = useState(1);
  const [isSelectedOption, setIsSelectedOption] = useState(false);

  return (
    <OptionContainer onClick={onClick}>
      <OptionNameWrapper>
        {!soldOut && (
          <div>
            {isSelectedOption ? (
              <OptionIcon alt="option" src={imageSelectButtonSrc} />
            ) : (
              <OptionIcon alt="option" src={imageUnSelectButtonSrc} />
            )}
          </div>
        )}
        <OptionName>{displayName}</OptionName>
      </OptionNameWrapper>

      <OptionPriceWrapper>
        <QuantityWrapper>
          {limit > 1 && (
            <div>
              <ButtonIcon alt="plus" src={imagePlusButtonSrc} />
            </div>
          )}
          <Quantity>{limitQuantity}</Quantity>
          {limit > 1 && (
            <div>
              <ButtonIcon alt="minus" src={imageMinusButtonSrc} />
            </div>
          )}
        </QuantityWrapper>
        <OptionPrice>+ {price.toLocaleString()}원</OptionPrice>
      </OptionPriceWrapper>
    </OptionContainer>
  );
}
