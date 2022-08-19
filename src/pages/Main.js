import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Header from "../components/Header/index";
import CategoryList from "../components/Category/CategoryList";
import SubCategoryList from "../components/SubCategoryList/SubCategoryList";
import FullMenuList from "../components/Menu/FullMenuList";
import Navbar from "../components/Navbar/Navbar";
import Notification from "../components/Notification/index";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const GoodsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 93.3594vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 15vh;
  border-top-left-radius: 6.25vw;
  border-top-right-radius: 6.25vw;
  background-color: #fff;
  box-sizing: border-box;
  transform: translateY(0);
  transition: transform 1s;
`;

const Wrapbar = styled.div`
  width: 100vw;
  height: 6.25vw;
  display: flex;
  justify-content: center;
  padding: 2.35vw 0 2.2875vw;
  box-sizing: border-box;
`;

const CategoryListContainer = styled.div`
  padding-left: 4.75vw;
  box-sizing: border-box;
`;

export default function Main() {
  const data = useSelector((state) => state.menu.menu);
  const [activeCategoryId, setActiveCategoryId] = useState(
    data.categories[0].id
  );

  return (
    <>
      {data ? (
        <>
          <Header store={data.store} table={data.table} />

          <GoodsContainer>
            <Wrapbar></Wrapbar>
            <CategoryListContainer>
              <CategoryList
                categories={data.categories}
                activeId={activeCategoryId}
                setActiveId={setActiveCategoryId}
              />
              <SubCategoryList
                subCategories={data.subCategories}
                activeCategoryId={activeCategoryId}
              />
            </CategoryListContainer>
            <FullMenuList menu={data.goods} number={data.categories.length} />
          </GoodsContainer>

          <Navbar />
          <ShoppingCart />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
