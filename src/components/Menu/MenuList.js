import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuCategory from "./MenuCategory";

const MenuListContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: auto;
  padding: 0 5vw 20vw;
  box-sizing: border-box;
`;

export default function MenuList({ menu, number }) {
  return (
    <MenuListContainer>
      {[...Array(number)].map((index) => (
        <MenuCategory key={index} menu={menu} />
      ))}
    </MenuListContainer>
  );
}

MenuList.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    belongToCategories: PropTypes.arrayOf(PropTypes.string.isRequired)
      .isRequired,
    image: PropTypes.string.isRequired,
    soldOut: PropTypes.bool.isRequired,
    hit: PropTypes.bool.isRequired,
    best: PropTypes.bool.isRequired,
    recommend: PropTypes.bool.isRequired,
    new: PropTypes.bool.isRequired,
    orderMaxQuantity: PropTypes.number.isRequired,
    orderMinQuantity: PropTypes.number.isRequired,
    optionGroups: PropTypes.shape({
      displayName: PropTypes.string,
      price: PropTypes.number,
      optionQuantityLimit: PropTypes.number,
    }).isRequired,
  }).isRequired,
  number: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
