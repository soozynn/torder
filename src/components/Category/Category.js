import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.div`
  white-space: nowrap;
  padding: 1.125vw 3.125vw;
  background-color: ${(props) => props.isActive && "#2f2a26"};
  border: 0.25vw solid #2f2a26;
  border-radius: 4.25vw;
  box-sizing: border-box;
  font-weight: 900;
  font-family: "NotoSerifKR-semibold";
  font-size: 3.25vw;
  color: ${(props) => props.isActive && "#fff"};

  :last-child {
    margin-right: 2.2vw;
  }
`;

export default function Category({ onClick, name, isActive }) {
  return (
    <Content onClick={onClick} isActive={isActive}>
      {name}
    </Content>
  );
}

Category.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
