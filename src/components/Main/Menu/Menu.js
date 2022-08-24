import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Label from "../Label/index";
import Mark from "../Mark/index";
import MenuImage from "./MenuImage";
import SoldOutImage from "../SoldoutImage/index";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1.5vw;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  font-family: "NotoSerifKR-semibold";
  letter-spacing: -0.06875vw;
  width: 35vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 1.25;
  font-size: 2.75vw;
`;

const Price = styled.p`
  margin-top: 0.25vw;
  font-family: "NotoSerifKR-bold";
  font-size: 3.125vw;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.375vw;
  gap: 0.625vw;
`;

export default function Menu({ menu, onClick }) {
  const {
    name,
    price,
    description,
    image,
    soldOut,
    hit,
    best,
    new: newKeyword,
    recommend,
    optionGroups,
  } = menu;

  return (
    <MenuContainer onClick={onClick}>
      <ImageWrapper>
        <MenuImage url={image} />
        {soldOut && <SoldOutImage />}
      </ImageWrapper>

      <Information>
        {(optionGroups.length > 0 || description) && (
          <Mark option={optionGroups.length > 0} description={description} />
        )}
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}</Price>

        <LabelContainer>
          {best && <Label>BEST</Label>}
          {hit && <Label>HIT</Label>}
          {recommend && <Label>추천</Label>}
          {newKeyword && <Label>신메뉴</Label>}
        </LabelContainer>
      </Information>
    </MenuContainer>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  menu: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    belongToCategories: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    soldOut: PropTypes.bool,
    hit: PropTypes.bool,
    best: PropTypes.bool,
    recommend: PropTypes.bool,
    new: PropTypes.bool,
    orderMaxQuantity: PropTypes.number,
    orderMinQuantity: PropTypes.number,
    optionGroups: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        selectedOptionLimit: PropTypes.number,
        require: PropTypes.bool,
        optionItems: PropTypes.arrayOf(
          PropTypes.shape({
            displayName: PropTypes.string,
            price: PropTypes.number,
            optionQuantityLimit: PropTypes.number,
          })
        ),
      })
    ),
  }),
};
