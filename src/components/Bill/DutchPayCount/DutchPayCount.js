import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import imagePlusButtonSrc from "../../../assets/plusButton.svg";
import imageMinusButtonSrc from "../../../assets/minusButton.svg";

const DutchPayCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13.75vw;
  padding: 0 5vw;
  box-sizing: border-box;
  border-top: 0.125vw solid #ccc;
`;

const Text = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 4.25vw;
  letter-spacing: -0.10625vw;
  color: #2f2a26;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.625vw;
  font-family: "NotoSerifKR-semibold";
  font-size: 3.5vw;
  letter-spacing: -0.175vw;
`;

const Button = styled.img`
  width: 5.75vw;
  height: 5.75vw;
`;

export default function DutchPayCount({ count, setCount }) {
  const handleClickPlusButton = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickMinusButton = () => {
    if (count === 1) return;

    setCount((prev) => prev - 1);
  };

  return (
    <DutchPayCountContainer>
      <Text>더치페이</Text>
      <CountWrapper>
        <div onClick={handleClickPlusButton}>
          <Button alt="plus" src={imagePlusButtonSrc} />
        </div>
        <span>{count}명</span>
        <div onClick={handleClickMinusButton}>
          <Button alt="minus" src={imageMinusButtonSrc} />
        </div>
      </CountWrapper>
    </DutchPayCountContainer>
  );
}

DutchPayCount.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
