import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SubCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  letter-spacing: -0.075vw;
  font-family: ${(props) =>
    props.isActive ? "NotoSerifKR-bold" : "NotoSerifKR"};
  font-size: ${(props) => (props.isActive ? "3vw" : "2.75vw")};
  color: ${(props) => props.isActive && "#fff"};
`;

const SubCategoryTitle = styled.p`
  white-space: nowrap;
  padding: 0.875vw 2.625vw 1vw;
  box-sizing: border-box;
  background-color: ${(props) => props.isActive && "#ab240f"};
  border-radius: ${(props) => props.isActive && "12.5vw"};
`;

const Bar = styled.div`
  width: 0.25vw;
  height: 2.5vw;
  margin: 0 2.5vw;
  background-color: #999;
`;

export default function SubCategory({ name, onClick, isActive }) {
  return (
    <SubCategoryContainer isActive={isActive} onClick={onClick}>
      <SubCategoryTitle isActive={isActive}>{name}</SubCategoryTitle>
      <Bar></Bar>
    </SubCategoryContainer>
  );
}

SubCategory.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
