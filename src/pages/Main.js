import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/index";
import Header from "../components/Header/index";
import Notification from "../components/Notification/index";
import CategoryList from "../components/Category/CategoryList";
import SubCategoryList from "../components/SubCategoryList/SubCategoryList";
import mockData from "../mock.json";

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
  const [data, setData] = useState({ ...mockData });
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
            <Navbar />
          </GoodsContainer>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
