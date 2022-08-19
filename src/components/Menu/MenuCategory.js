import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import Menu from "./Menu";
import { addMenu } from "../../features/menu/menuSlice";

const CategoryNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25vw;
`;

const CategoryName = styled.p`
  font-family: "NotoSerifKR-bold";
  font-size: 2.25vw;
  color: #7a7a7a;
  letter-spacing: -0.06875vw;
`;

const SubCategoryName = styled.p`
  box-sizing: border-box;
  line-height: 1.3;
  font-family: "NotoSerifKR-bold";
  font-size: 3vw;
  color: #2f2a26;
`;

const HorizontalBar = styled.div`
  width: 90vw;
  height: 0.25vw;
  margin-top: 1.125vw;
  background-color: #2f2a26;
`;

const MenuContainer = styled.div`
  margin-top: 2.375vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5vw;
  row-gap: 1.875vw;
`;

export default function MenuCategory({ title, subTitle, goods, subCategory }) {
  const dispatch = useDispatch();

  const handleClickMenu = (event) => {
    dispatch(addMenu(event.target));
  };

  return (
    <div>
      <CategoryNameWrapper>
        <CategoryName>{title}</CategoryName>
        <SubCategoryName>{subTitle}</SubCategoryName>
      </CategoryNameWrapper>
      <HorizontalBar></HorizontalBar>

      <MenuContainer>
        {goods.map((menu) => (
          <Menu key={menu.id} menu={menu} onClick={(e) => handleClickMenu(e)} />
        ))}
      </MenuContainer>
    </div>
  );
}

MenuCategory.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subCategory: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    parentCategoriesCodes: PropTypes.arrayOf(PropTypes.string.isRequired)
      .isRequired,
  }).isRequired,
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      belongToCategories: PropTypes.arrayOf(PropTypes.string),
      image: PropTypes.string,
      soldOut: PropTypes.bool,
      hit: PropTypes.bool,
      best: PropTypes.bool,
      recommend: PropTypes.bool,
      new: PropTypes.bool,
      orderMaxQuantity: PropTypes.number,
      orderMinQuantity: PropTypes.number,
      optionGroups: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          selectedOptionLimit: PropTypes.number,
          require: PropTypes.bool,
          optionItems: PropTypes.arrayOf(
            PropTypes.shape({
              displayName: PropTypes.string,
              price: PropTypes.number,
              optionQuantityLimit: PropTypes.number,
            })
          ),
        })
      ),
    })
  ),
};
