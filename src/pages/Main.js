import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Header from "../components/Main/Header/index";
import CategoryList from "../components/Main/Category/CategoryList";
import SubCategoryList from "../components/Main/SubCategory/SubCategoryList";
import FullMenuList from "../components/Main/Menu/FullMenuList";
import Navbar from "../components/Main/Navbar/Navbar";
import Notification from "../components/Main/Notification/index";
import ShoppingCartList from "../components/Main/ShoppingCart/ShoppingCartList";

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
  const { menu, cart } = useSelector((state) => state.menu);
  const [showsShoppingCart, setShowsShoppingCart] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState(
    menu.categories[0].id
  );

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
          {isOpenNotification && (
            <Notification
              isOpenNotification={isOpenNotification}
              setIsOpenNotification={setIsOpenNotification}
            >
              {notificationText}
            </Notification>
          )}
        </>
      ) : (
        <Notification>데이터를 불러오지 못하였습니다.</Notification>
      )}
    </>
  );
}
