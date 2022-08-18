import React, { useState } from "react";
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

export default function CategoryList({ categories }) {
  const [activeId, setActiveId] = useState("");

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
            isActive={activeId === category.id}
          />
        ))}
      </CategoryListWrapper>
    </CategoryListContainer>
  );
}
CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
