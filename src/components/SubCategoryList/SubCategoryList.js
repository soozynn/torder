import React, { useState } from "react";
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

export default function SubCategoryList({ subCategories }) {
  const [activeId, setActiveId] = useState("");

  const handleClickSubCategory = (id) => {
    setActiveId(id);
  };

  return (
    <SubCategoryListContainer>
      <SubCategoryListWrapper>
        {subCategories.map((subCategory) => (
          <SubCategory
            key={subCategory.id}
            name={subCategory.name}
            onClick={() => handleClickSubCategory(subCategory.id)}
            isActive={activeId === subCategory.id}
          />
        ))}
      </SubCategoryListWrapper>
    </SubCategoryListContainer>
  );
}

SubCategoryList.propTypes = {
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
