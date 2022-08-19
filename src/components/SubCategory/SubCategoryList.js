import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubCategory from "./SubCategory";
import { selectSubCategory } from "../../features/menu/menuSlice";

const SubCategoryListContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5vw 0 2.375vw;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
`;

const SubCategoryListWrapper = styled.div`
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function SubCategoryList({ subCategories, activeCategoryId }) {
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(
    subCategories[0].id
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveSubCategoryId(
      subCategories.filter((subCategory) =>
        subCategory.parentCategoriesCodes.includes(activeCategoryId)
      )[0].id
    );
  }, [activeCategoryId, subCategories]);

  // useEffect(() => {
  //   dispatch(selectSubCategory(subCategories[0].id));
  // }, [dispatch, subCategories]);

  const handleClickSubCategory = (event, id) => {
    setActiveSubCategoryId(id);
    console.log(event);
    dispatch(selectSubCategory(event.textContent));
  };

  return (
    <SubCategoryListContainer>
      <SubCategoryListWrapper>
        {subCategories
          .filter((subCategory) =>
            subCategory.parentCategoriesCodes.includes(activeCategoryId)
          )
          .map((subCategory, index, array) => (
            <SubCategory
              key={subCategory.id}
              name={subCategory.name}
              onClick={(e) => handleClickSubCategory(e, subCategory.id)}
              isActive={activeSubCategoryId === subCategory.id}
              lastbar={index !== array.length - 1}
            />
          ))}
      </SubCategoryListWrapper>
    </SubCategoryListContainer>
  );
}

SubCategoryList.propTypes = {
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      parentCategoriesCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  activeCategoryId: PropTypes.string.isRequired,
};
