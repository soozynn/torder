import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

export default function FullMenuList() {
  const { menu } = useSelector((state) => state.menu);
  const { categories } = menu;

  return (
    <FullMenuListContainer>
      {categories.map((category) => (
        <MenuCategoryList key={category.id} menu={menu} name={category.name} />
      ))}
    </FullMenuListContainer>
  );
}
