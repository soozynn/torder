import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Menu from "./Menu";

export default function MenuCategory({ menu }) {
  return (
    <div>
      <Menu />
    </div>
  );
}

MenuCategory.propTypes = {
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
};
