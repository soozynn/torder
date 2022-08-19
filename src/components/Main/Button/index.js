import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => (props.background ? "#b51900" : "#999")};
  border-radius: 1.25vw;
  font-size: 4.25vw;
  font-weight: 750;
  color: #fff;
  letter-spacing: -0.2125vw;
`;

export default function Button({ children, background, onClick }) {
  return (
    <ButtonText onClick={onClick} background={background}>
      {children}
    </ButtonText>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  onClick: PropTypes.func,
};
