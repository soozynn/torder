import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import OptionCategory from "./OptionCategory";

const OptionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75vw 5vw;
  padding-bottom: 36vw;
  gap: 2.75vw;
  background-color: #fff;
  box-sizing: border-box;
`;

export default function OptionList({
  options,
  selectedOptions,
  setSelectedOptions,
  setNotificationText,
  setIsOpenNotification,
  setOptionsRequire,
  price,
}) {
  return (
    <OptionListContainer>
      {options &&
        options.map((option) => (
          <OptionCategory
            key={option.name}
            option={option}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            setNotificationText={setNotificationText}
            setIsOpenNotification={setIsOpenNotification}
            setOptionsRequire={setOptionsRequire}
            price={price}
          />
        ))}
    </OptionListContainer>
  );
}

OptionList.propTypes = {
  setNotificationText: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
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
  setIsCheckedRequiredOption: PropTypes.func.isRequired,
};
