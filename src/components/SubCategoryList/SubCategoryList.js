import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubCategory from "./SubCategory";

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
`;

export default function SubCategoryList({ subCategories, activeCategoryId }) {
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(
    subCategories[0].id
  );

  useEffect(() => {
    setActiveSubCategoryId(
      subCategories.filter((subCategory) =>
        subCategory.parentCategoriesCodes.includes(activeCategoryId)
      )[0].id
    );
  }, [activeCategoryId, subCategories]);

  const handleClickSubCategory = (id) => {
    setActiveSubCategoryId(id);
  };

  return (
    <SubCategoryListContainer>
      <SubCategoryListWrapper>
        {subCategories
          .filter((subCategory) =>
            subCategory.parentCategoriesCodes.includes(activeCategoryId)
          )
          .map((subCategory) => (
            <SubCategory
              key={subCategory.id}
              name={subCategory.name}
              onClick={() => handleClickSubCategory(subCategory.id)}
              isActive={activeSubCategoryId === subCategory.id}
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
