import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const OptionWrapper = styled.div`
  margin-top: 1vw;
  display: flex;
  align-items: center;
  gap: 1.25vw;
  font-size: 2.75vw;
  color: #0080ff;
`;

const OptionName = styled.p`
  flex: 1;
`;

const OpiotnQuantity = styled.p`
  width: 5.75vw;
`;

const OptionPrice = styled.p`
  width: 15.375vw;
  font-weight: 700;
  text-align: right;
`;

export default function OptionItem({ name, count, price }) {
  return (
    <OptionWrapper>
      <OptionName>+ {name}</OptionName>
      <OpiotnQuantity>{count}개</OpiotnQuantity>
      <OptionPrice>{price}</OptionPrice>
    </OptionWrapper>
  );
}

OptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
