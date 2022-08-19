import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuCategory from "./MenuCategory";

const MenuCategoryListContainer = styled.div`
  font-family: "NotoSerifKR";

  :first-child {
    margin-top: 0;
  }
`;

export default function MenuCategoryList({ menu, name, activeCategory }) {
  const { subCategories } = menu;
  // 해당 서브카테고리스 갯수만큼
  return (
    <MenuCategoryListContainer>
      {subCategories
        // .filter((subCategory) => (

        // ))
        .map((subCategory) => (
          <MenuCategory key={subCategory.id} menu={menu} name={name} />
        ))}
    </MenuCategoryListContainer>
  );
}

MenuCategoryList.propTypes = {
  // menu: PropTypes.
};
