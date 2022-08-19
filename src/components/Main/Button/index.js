import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonText = styled.p`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.background ? "#b51900" : "#999")};
  border-radius: 1.25vw;
  font-size: 4.25vw;
  font-weight: 750;
  color: #fff;
  letter-spacing: -0.2125vw;
`;

export default function Button({
  children,
  background,
  width,
  height,
  onClick,
}) {
  return (
    <ButtonText
      onClick={onClick}
      background={background}
      width={width}
      height={height}
    >
      {children}
    </ButtonText>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
