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

export default function MenuCategoryList({ menu, name }) {
  const { subCategories } = menu;
  // 메인의 시그니처 아이디의 일치하는 패런트 아이디를 가진 값들만 걸러주기
  return (
    <MenuCategoryListContainer>
      {subCategories
        // .filter((subCategory) => 굿즈의 belongToCategories에 서브카테고리스 아이디가 포함되어있는지
        //   subCategory.parentCategoriesCodes.includes(subCategory.id)
        // )
        .map((subCategory) => (
          <MenuCategory key={subCategory.id} menu={menu} name={name} />
        ))}
    </MenuCategoryListContainer>
  );
}

MenuCategoryList.propTypes = {
  // menu: PropTypes.
};
