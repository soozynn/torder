import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Option from "./Option";

const OptionListContainer = styled.div`
  padding: 0.75vw 5vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2.75vw;
  padding-bottom: 36vw;
  box-sizing: border-box;
`;

const OptionText = styled.div`
  padding: 2.625vw 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25vw;
`;

const FlagText = styled.p`
  flex: 1;
  font-family: "NotoSerifKR-bold";
  font-size: 3.25vw;
  letter-spacing: -0.1625vw;
`;

const FlagMaxSelectQuantity = styled.p`
  font-size: 2.875vw;
  letter-spacing: -0.14375vw;
  color: #999;
  display: flex;
  align-items: center;
`;

export default function OptionList({
  options,
  soldOut,
  limit,
  setOption,
  setNotificationText,
}) {
  const [isSelectedOption, setIsSelectedOption] = useState(false);
  const [limitQuantity, setLimitQuantity] = useState(0);
  const [selectedOption, setSelectedOption] = useState({
    option: "",
    quantity: 0,
  });
  const handleClickOption = (limitQuantity) => {
    if (soldOut) {
      setNotificationText("품절 된 상품입니다.");
      return;
    }

    // if (limitQuantity >= limit) {
    //   setNotificationText("더 이상 수량을 추가할 수 없습니다.");
    //   return;
    // }

    setIsSelectedOption(!isSelectedOption);
    setOption((prev) => [...prev, selectedOption]);
  };

  return (
    <OptionListContainer>
      {options.length > 0 &&
        options.map((option) => (
          <div>
            <OptionText>
              <FlagText>
                {option.name} / {option.require ? "필수옵션" : "선택옵션"}
              </FlagText>
              <FlagMaxSelectQuantity>
                {option.selectedOptionLimit}개 까지 선택할 수 있습니다.
              </FlagMaxSelectQuantity>
            </OptionText>

            <OptionList>
              {option.optionItems.map((item) => (
                <Option
                  key={item.displayName}
                  soldOut={soldOut}
                  displayName={item.displayName}
                  price={item.price}
                  limit={item.optionQuantityLimit}
                  onClick={() => handleClickOption(item.optionQuantityLimit)}
                />
              ))}
            </OptionList>
          </div>
        ))}
    </OptionListContainer>
  );
}

OptionList.propTypes = {
  soldOut: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      selectedOptionLimit: PropTypes.number.isRequired,
      require: PropTypes.bool.isRequired,
      optionItems: PropTypes.arrayOf(
        PropTypes.shape({
          displayName: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          optionQuantityLimit: PropTypes.number.isRequired,
        })
      ),
    })
  ),
};
