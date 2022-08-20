import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DutchPayButtonContainer = styled.p`
  height: 13.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  background-color: #2f2a26;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 700;
`;

const TotalTitle = styled.p`
  font-size: 4.25vw;
  color: #fff;
  letter-spacing: -0.2125vw;
`;

const Count = styled.p`
  width: 5.25vw;
  height: 5.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625vw;
  background-color: #fff;
  font-size: 3.5vw;
  color: #000;
`;

export default function TotalCount({ count }) {
  return (
    <DutchPayButtonContainer>
      <TotalTitle>주문합계</TotalTitle>
      <Count>{count}</Count>
    </DutchPayButtonContainer>
  );
}

TotalCount.propTypes = {
  count: PropTypes.number.isRequired,
};
