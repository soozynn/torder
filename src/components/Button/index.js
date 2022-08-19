import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonText = styled.p`
  background-color: ${(props) => (props.color ? "#b51900" : "#999")};
  font-family: "NotoSerifKR";
  font-size: 4.25vw;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.2125vw;
  border-radius: 1.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button({ children, color }) {
  return <ButtonText color={color}>{children}</ButtonText>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};
