import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.125vw;
  height: 3.25vw;
  border: 0.125vw solid #2f2a26;
  border-radius: 4.25vw;
  box-sizing: border-box;
  font-family: "NotoSerifKR-semibold";
  font-size: 1.75vw;
`;

export default function Label({ children }) {
  return <LabelContainer>{children}</LabelContainer>;
}

Label.propTypes = {
  children: PropTypes.string.isRequired,
};
