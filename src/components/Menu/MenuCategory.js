import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Menu from "./Menu";

const CategoryNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25vw;
`;

const CategoryName = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 2.25vw;
  color: #7a7a7a;
  letter-spacing: -0.06875vw;
`;

const SubCategoryName = styled.p`
  box-sizing: border-box;
  line-height: 1.3;
  font-family: "NotoSerifKR-bold";
  font-size: 3vw;
  color: #2f2a26;
`;

const HorizontalBar = styled.div`
  width: 90vw;
  height: 0.25vw;
  margin-top: 1.125vw;
  background-color: #2f2a26;
`;

const MenuContainer = styled.div`
  margin-top: 2.375vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5vw;
  row-gap: 1.875vw;
`;

export default function MenuCategory({ menu, name }) {
  const {} = menu;

  return (
    <div>
      <CategoryNameWrapper>
        <CategoryName>{name}</CategoryName>
        <SubCategoryName>{}</SubCategoryName>
      </CategoryNameWrapper>

      <HorizontalBar></HorizontalBar>

      <MenuContainer>
        {/* {} */}
        <Menu />
      </MenuContainer>
    </div>
  );
}
