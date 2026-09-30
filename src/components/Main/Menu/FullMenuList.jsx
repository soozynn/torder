import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuCategoryList from "./MenuCategoryList";

const FullMenuListContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: auto;
  padding: 0 5vw 20vw;
  box-sizing: border-box;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  :first-child {
    margin-top: 0;
  }
`;

export default function FullMenuList({
  goods,
  categories,
  subCategories,
  setIsOpenNotification,
  setNotificationText,
  setShowsShoppingCart,
}) {
  return (
    <FullMenuListContainer>
      {categories.map((category) => (
        <MenuCategoryList
          key={category.id}
          id={category.id}
          title={category.name}
          goods={goods}
          subCategories={subCategories}
          setIsOpenNotification={setIsOpenNotification}
          setNotificationText={setNotificationText}
          setShowsShoppingCart={setShowsShoppingCart}
        />
      ))}
    </FullMenuListContainer>
  );
}

FullMenuList.propTypes = {
  setShowsShoppingCart: PropTypes.func.isRequired,
  setIsOpenNotification: PropTypes.func.isRequired,
  setNotificationText: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      parentCategoriesCodes: PropTypes.arrayOf(PropTypes.string.isRequired)
        .isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
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
