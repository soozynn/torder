import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuCategory from "./MenuCategory";

const MenuCategoryListContainer = styled.div`
  font-family: "NotoSerifKR";

  :first-child {
    margin-top: 0;
  }
`;

export default function MenuCategoryList({
  id,
  title,
  goods,
  subCategories,
  setIsOpenNotification,
  setNotificationText,
  setShowsShoppingCart,
}) {
  return (
    <MenuCategoryListContainer>
      {subCategories
        .filter((subCategory) => subCategory.parentCategoriesCodes.includes(id))
        .map((subCategory) => (
          <MenuCategory
            key={subCategory.id}
            id={subCategory.id}
            goods={goods}
            title={title}
            subTitle={subCategory.name}
            setIsOpenNotification={setIsOpenNotification}
            setNotificationText={setNotificationText}
            setShowsShoppingCart={setShowsShoppingCart}
          />
        ))}
    </MenuCategoryListContainer>
  );
}

MenuCategoryList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      parentCategoriesCodes: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ).isRequired,
  setShowsShoppingCart: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
  setNotificationText: PropTypes.func.isRequired,
  goods: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};
