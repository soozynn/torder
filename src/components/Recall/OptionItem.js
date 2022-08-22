import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imageUnSelectButtonSrc from "../../assets/unSelectButton.svg";
import imageSelectButtonSrc from "../../assets/selectButton.svg";
import imagePlusButtonSrc from "../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../assets/minusButton.svg";

const OptionItemContainer = styled.div`
  font-family: "NotoSerifKR-bold";
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  height: 12vw;
  margin-bottom: 1.875vw;
  padding: 3.125vw 3.75vw;
  border: ${(props) =>
    props.active ? "0.25vw solid #2f2a26" : "0.125vw solid #e8e8e8"};
  font-size: 4.25vw;
  border-radius: 1.25vw;
  box-sizing: border-box;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxIcon = styled.img`
  width: 4.5vw;
  height: 4.5vw;
`;

const Title = styled.p`
  font-size: 2.875vw;
  font-weight: 700;
  color: #2f2a26;
  width: 51vw;
  margin-left: 1.875vw;
`;

const ButtonIcon = styled.img`
  width: 5.75vw;
  height: 5.75vw;
`;

const OptionCount = styled.p`
  font-size: 3.5vw;
  font-weight: 500;
`;

export default function OptionItem({
  title,
  onClick,
  checkedOptions,
  setCheckedOptions,
  setNotificationText,
  setIsOpenNotification,
}) {
  const [count, setCount] = useState(1);

  const handleClickPlusButton = (e) => {
    e.stopPropagation();

    if (count > 8) {
      setNotificationText("더 이상 수량을 추가할 수 없습니다.");
      setIsOpenNotification(true);
      return;
    }

    setCount((prev) => prev + 1);

    const selectedOption = checkedOptions.find(
      (option) => option.name === title
    );
    const num = count + 1;

    if (selectedOption) {
      setCheckedOptions(
        checkedOptions.map((option) =>
          option.name === title ? { ...option, count: num } : option
        )
      );
    } else {
      setCheckedOptions((prev) => [...prev, { name: title, count: num }]);
    }
  };

  const handleClickMinusButton = (e) => {
    e.stopPropagation();

    if (count < 2) return;

    setCount((prev) => prev - 1);

    const selectedOption = checkedOptions.find(
      (option) => option.name === title
    );
    const num = count - 1;

    if (selectedOption) {
      setCheckedOptions(
        checkedOptions.map((option) =>
          option.name === title ? { ...option, count: num } : option
        )
      );
    } else {
      setCheckedOptions((prev) => [...prev, { name: title, count: num }]);
    }
  };

  useEffect(() => {
    const selectedOption = checkedOptions.find(
      (option) => option.name === title
    );

    if (!selectedOption) {
      setCount(1);
    }
  }, [checkedOptions, title]);

  return (
    <OptionItemContainer
      onClick={onClick}
      active={checkedOptions.find((option) => option.name === title)}
    >
      <CheckBoxWrapper>
        {checkedOptions.find((option) => option.name === title) ? (
          <>
            <CheckBoxIcon alt="check" src={imageSelectButtonSrc} />
            <Title>{title}</Title>
          </>
        ) : (
          <>
            <CheckBoxIcon alt="uncheck" src={imageUnSelectButtonSrc} />
            <Title>{title}</Title>
          </>
        )}
      </CheckBoxWrapper>
      <div onClick={(e) => handleClickPlusButton(e)}>
        <ButtonIcon alt="plus" src={imagePlusButtonSrc} />
      </div>
      <OptionCount>
        {checkedOptions.find((option) => option.name === title) ? count : 1}개
      </OptionCount>
      <div onClick={(e) => handleClickMinusButton(e)}>
        <ButtonIcon alt="minus" src={imageMinusButtonSrc} />
      </div>
    </OptionItemContainer>
  );
}

OptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  checkedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  setCheckedOptions: PropTypes.func.isRequired,
  setNotificationText: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
};
