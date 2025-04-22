import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import Header from "@components/Main/Header/index";
import CategoryList from "@components/Main/Category/CategoryList";
import SubCategoryList from "@components/Main/SubCategory/SubCategoryList";
import FullMenuList from "@components/Main/Menu/FullMenuList";
import Navbar from "@components/Main/Navbar/Navbar";
import ShoppingCartList from "@components/Main/ShoppingCart/ShoppingCartList";

const GoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 93.3594vh;
  padding-bottom: 15vh;
  border-top-left-radius: 6.25vw;
  border-top-right-radius: 6.25vw;
  background-color: #fff;
  box-sizing: border-box;
  transform: translateY(0);
  transition: transform 1s;
`;

const Wrapbar = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 6.25vw;
  padding: 2.35vw 0 2.2875vw;
  box-sizing: border-box;
`;

const CategoryListContainer = styled.div`
  padding-left: 4.75vw;
  box-sizing: border-box;
`;

export default function Main({
  showsShoppingCart,
  setShowsShoppingCart,
  activeCategoryId,
  setActiveCategoryId,
  setNotificationText,
  setIsOpenNotification,
  menuList,
}) {
  const { cart } = useSelector((state) => state.menu);

  const handleClickShoppingCart = () => {
    if (!cart.length) {
      setNotificationText("장바구니에 상품이 없습니다.");
      setIsOpenNotification(true);
      return;
    }

    setShowsShoppingCart(!showsShoppingCart);
  };

  return (
    <>
      <Header store={menuList.store} table={menuList.table} />

      <GoodsContainer>
        <Wrapbar />
        <CategoryListContainer>
          <>
            <CategoryList
              categories={menuList.categories}
              activeId={activeCategoryId}
              setActiveId={setActiveCategoryId}
            />
            <SubCategoryList
              subCategories={menuList.subCategories}
              activeCategoryId={activeCategoryId}
            />
          </>
        </CategoryListContainer>
        <FullMenuList
          goods={menuList.goods}
          categories={menuList.categories}
          subCategories={menuList.subCategories}
          setIsOpenNotification={setIsOpenNotification}
          setNotificationText={setNotificationText}
          setShowsShoppingCart={setShowsShoppingCart}
        />
      </GoodsContainer>
      {showsShoppingCart ? (
        <ShoppingCartList
          cartList={cart}
          setIsOpenNotification={setIsOpenNotification}
          setNotificationText={setNotificationText}
          setShowsShoppingCart={setShowsShoppingCart}
        />
      ) : (
        <Navbar onClick={handleClickShoppingCart} cartList={cart} />
      )}
    </>
  );
}

Main.propTypes = {
  showsShoppingCart: PropTypes.bool.isRequired,
  setShowsShoppingCart: PropTypes.func.isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  setActiveCategoryId: PropTypes.func.isRequired,
  menuList: PropTypes.shape({
    version: PropTypes.string.isRequired,
    table: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    store: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logoURL: PropTypes.string.isRequired,
    }),
  }),
};
