import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuWrapper = styled.div`
  padding: 3.75vw 0;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #ddd;
`;

const MenuName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25vw;
  font-family: "NotoSerifKR-bold";
  color: #131313;

  * {
    text-align: right;
    font-size: 3.75vw;
  }
`;

const MenuInformation = styled.div`
  margin-top: 2.375vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 2.75vw;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 1.25vw;
`;

const DefaultInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameText = styled.p`
  flex: 1;
  display: flex;
  font-size: 4vw;
  letter-spacing: -0.2vw;
`;

const PriceWrapper = styled.div`
  width: 28.75vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5vw;

  * {
    text-align: right;
    font-size: 3.75vw;
  }
`;

const Count = styled.p`
  flex: 1;
`;

const Price = styled.p`
  width: 18vw;
`;

export default function Order({ name, price, count, option }) {
  return (
    <div>
      <MenuWrapper>
        <MenuName>
          <NameText>{option ? option.name : name}</NameText>
          <PriceWrapper>
            <Count>{option ? option.count : count}개</Count>
            <Price>{(price * count).toLocaleString()}</Price>
          </PriceWrapper>
        </MenuName>

        <MenuInformation>
          <DefaultInformation>
            <p>기본</p>
            <p>{price.toLocaleString()}</p>
          </DefaultInformation>
        </MenuInformation>
      </MenuWrapper>
    </div>
  );
}

Order.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number.isRequired,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
};
