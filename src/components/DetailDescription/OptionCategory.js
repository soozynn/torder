import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Option from "./Option";

const OptionText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.625vw 0;
  gap: 1.25vw;
  box-sizing: border-box;
`;

const FlagText = styled.p`
  flex: 1;
  font-family: "NotoSerifKR-bold";
  font-size: 3.25vw;
  letter-spacing: -0.1625vw;
`;

const FlagMaxSelectQuantity = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.875vw;
  letter-spacing: -0.14375vw;
  color: #999;
`;

const OptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875vw;
`;

export default function OptionCategory({
  option,
  setNotificationText,
  setIsOpenNotification,
  setSelectedOptions,
  selectedOptions,
  setOptionsRequire,
  price,
}) {
  const { name, require, selectedOptionLimit, optionItems } = option;

  const [quantity, setQuantity] = useState(0);
  const [isCheckedRequire, setIsCheckedRequire] = useState(false);
  console.log(option);
  const handleClickOption = (item, limit) => {
    const sameOption = selectedOptions.some(
      (option) => option.name === item.displayName
    );

    if (limit <= quantity && !sameOption) {
      setNotificationText("더 이상 수량을 추가할 수 없습니다.");
      setIsOpenNotification(true);
      return;
    }

    if (sameOption) {
      setSelectedOptions(
        selectedOptions.filter((option) => option.name !== item.displayName)
      );
      setQuantity((prev) => prev - 1);
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        {
          name: item.displayName,
          count: 1,
          price: item.price,
          parentTitle: name,
          parentPrice: price,
        },
      ]);
      setQuantity((prev) => prev + 1);
    }

    setOptionsRequire();
  };

  return (
    <div>
      <OptionText>
        <FlagText>
          {name} / {require ? "필수옵션" : "선택옵션"}
        </FlagText>
        <FlagMaxSelectQuantity>
          {selectedOptionLimit}개 까지 선택할 수 있습니다.
        </FlagMaxSelectQuantity>
      </OptionText>

      <OptionListWrapper>
        {optionItems.map((item) => (
          <Option
            key={item.displayName}
            item={item}
            onClick={() => handleClickOption(item, selectedOptionLimit)}
            setNotificationText={setNotificationText}
            setIsOpenNotification={setIsOpenNotification}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            maxQuantity={selectedOptionLimit}
            require={require}
          />
        ))}
      </OptionListWrapper>
    </div>
  );
}
