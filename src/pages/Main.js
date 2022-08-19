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
  const { menu, bill } = useSelector((state) => state.menu);
  const [isClickedShoppingCart, setIsClickedShoppingCart] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(
    menu.categories[0].id
  );

  const handleClickShoppingCart = () => {
    if (!bill.length) return;
    // return 대신 notification 보여주기
    setIsClickedShoppingCart(!isClickedShoppingCart);
  };

  return (
    <>
      {menu ? (
        <>
          <Header store={menu.store} table={menu.table} />

          <GoodsContainer>
            <Wrapbar></Wrapbar>
            <CategoryListContainer>
              <CategoryList
                categories={menu.categories}
                activeId={activeCategoryId}
                setActiveId={setActiveCategoryId}
              />
              <SubCategoryList
                subCategories={menu.subCategories}
                activeCategoryId={activeCategoryId}
              />
            </CategoryListContainer>
            <FullMenuList
              goods={menu.goods}
              categories={menu.categories}
              subCategories={menu.subCategories}
            />
          </GoodsContainer>

          {isClickedShoppingCart ? (
            <ShoppingCart />
          ) : (
            <Navbar onClick={handleClickShoppingCart} />
          )}
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
