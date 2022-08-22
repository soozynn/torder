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

const OptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875vw;
`;

export default function OptionList({
  options,
  soldOut,
  setOption,
  setNotificationText,
  setIsOpenNotification,
  setIsCheckedRequiredOption,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClickOption = (item) => {
    if (soldOut) {
      setNotificationText("품절 된 상품입니다.");
      setIsOpenNotification(true);
      return;
    }

    // if (limitQuantity > item.optionQuantityLimit) {
    //   setNotificationText("더 이상 수량을 추가할 수 없습니다.");
    //   setIsOpenNotification(true);
    //   return;
    // }

    // setSelectedOption(item.displayName);
    // setOption((prev) => [...prev, { option: selectedOption }]);
  };

  if (!options) return;

  return (
    <OptionListContainer>
      {options.map((option) => (
        <div key={option.name}>
          <OptionText>
            <FlagText>
              {option.name} / {option.require ? "필수옵션" : "선택옵션"}
            </FlagText>
            <FlagMaxSelectQuantity>
              {option.selectedOptionLimit}개 까지 선택할 수 있습니다.
            </FlagMaxSelectQuantity>
          </OptionText>

          <OptionListWrapper>
            {option.optionItems.map((item) => (
              <Option
                key={item.displayName}
                item={item}
                onClick={() => handleClickOption(item)}
                setNotificationText={setNotificationText}
                setIsOpenNotification={setIsOpenNotification}
                selectedOptions={selectedOptions}
              />
            ))}
          </OptionListWrapper>
        </div>
      ))}
    </OptionListContainer>
  );
}

OptionList.propTypes = {
  setNotificationText: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
  soldOut: PropTypes.bool,
  setOption: PropTypes.func,
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
