import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Category from "./Category";

const CategoryListContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const CategoryListWrapper = styled.div`
  display: flex;
  gap: 1.25vw;
`;

export default function CategoryList({ categories, activeId, setActiveId }) {
  const handleClickCategory = (id) => {
    setActiveId(id);
  };

  return (
    <CategoryListContainer>
      <CategoryListWrapper>
        {categories.map((category) => (
          <Category
            key={category.id}
            onClick={() => {
              handleClickCategory(category.id);
            }}
            name={category.name}
            $isActive={activeId === category.id}
          />
        ))}
      </CategoryListWrapper>
    </CategoryListContainer>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  setActiveId: PropTypes.func.isRequired,
};
