import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DutchPayButtonContainer = styled.p`
  height: 13.75vw;
  background-color: #2f2a26;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.125vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const Count = styled.span`
  font-size: 3.5vw;
  color: #dcd6d1;
`;

const Price = styled.span`
  font-size: 4.25vw;
  font-weight: 700;
  color: #fff;
`;

export default function DutchPayPrice({ order, count }) {
  console.log(order);
  return (
    <DutchPayButtonContainer>
      <Count>1인당</Count>
      <Price>
        {order.length
          ? (
              order.reduce(
                (accumulator, object) => accumulator + object.price,
                0
              ) / count
            ).toLocaleString()
          : "0"}
        원
      </Price>
    </DutchPayButtonContainer>
  );
}

DutchPayPrice.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  count: PropTypes.number.isRequired,
};
